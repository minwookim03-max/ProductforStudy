import React, { useEffect, useRef, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const marketStats = [
  { label: "Local sellers", value: "48+" },
  { label: "Same-day delivery zones", value: "12" },
  { label: "Reward points back", value: "3%" },
];

const valueProps = [
  {
    title: "Home delivery across Calgary",
    text: "Coordinate cold-chain delivery windows for Korean groceries, fresh banchan, and ready-to-heat meals.",
  },
  {
    title: "Free delivery over $100",
    text: "Automatically surface basket progress and unlock free delivery once the order subtotal passes CA$100.",
  },
  {
    title: "Reward points on every order",
    text: "Members earn points from each seller checkout and redeem them on marketplace-wide promotions.",
  },
];

const MAX_ADDRESS_RESULTS = 10;

const categories = [
  { id: "produce", name: "Fresh Produce", itemCount: 34, accent: "Crisp greens, pears, mushrooms" },
  { id: "pantry", name: "Pantry Staples", itemCount: 112, accent: "Gochujang, rice, noodles, seaweed" },
  { id: "frozen", name: "Frozen & Ready Meals", itemCount: 56, accent: "Dumplings, rice cakes, soups" },
  { id: "snacks", name: "Snacks & Drinks", itemCount: 87, accent: "Chips, teas, sparkling sodas" },
];

const products = [
  {
    id: 1,
    slug: "hallabong-box",
    name: "Jeju Hallabong Citrus Box",
    category: "produce",
    seller: "Seoul Fresh Market",
    price: 24,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 118,
    points: 72,
    delivery: "Delivered today in NW Calgary",
    description: "Sweet seedless hallabong picked for winter citrus cravings, packed by a local Korean grocer.",
    image: "Hallabong",
  },
  {
    id: 2,
    slug: "doenjang-kit",
    name: "Artisan Doenjang Pantry Kit",
    category: "pantry",
    seller: "Maple Kimchi Co.",
    price: 18,
    badge: "Seller pick",
    rating: 4.8,
    reviews: 64,
    points: 54,
    delivery: "Next-day delivery available",
    description: "Small-batch fermented soybean paste with soup stock, chili flakes, and recipe card.",
    image: "Doenjang",
  },
  {
    id: 3,
    slug: "mandu-family-pack",
    name: "Mandu Family Pack",
    category: "frozen",
    seller: "Prairie K-Foods",
    price: 16,
    badge: "Freezer staple",
    rating: 4.7,
    reviews: 91,
    points: 48,
    delivery: "Frozen delivery van route on Friday",
    description: "Pork and chive dumplings sealed for pan-fry, steam, or hot pot nights.",
    image: "Mandu",
  },
  {
    id: 4,
    slug: "yakgwa-set",
    name: "Yakgwa Tea Pairing Set",
    category: "snacks",
    seller: "Hanok Treats",
    price: 14,
    badge: "New arrival",
    rating: 4.9,
    reviews: 27,
    points: 42,
    delivery: "Ships with tea-safe gift packaging",
    description: "Honey cookies, citron tea, and a Calgary-roasted barley tea blend for gifting.",
    image: "Yakgwa",
  },
];

const sellerHighlights = [
  {
    name: "Seoul Fresh Market",
    focus: "Fresh produce and weekly imports",
    eta: "2-hour delivery windows",
  },
  {
    name: "Maple Kimchi Co.",
    focus: "Small-batch kimchi and pantry sauces",
    eta: "Pickup + local courier",
  },
  {
    name: "Prairie K-Foods",
    focus: "Frozen meals and family packs",
    eta: "Temperature-controlled delivery",
  },
];

const checkoutSteps = ["Basket", "Delivery", "Payment", "Review"];

const calgarySearchHint = "Calgary, Alberta, Canada";
let googleMapsScriptPromise;

function getGoogleMapsApiKey() {
  return window.APP_CONFIG?.googleMapsApiKey || window.GOOGLE_MAPS_API_KEY || "";
}

function loadGooglePlacesLibrary() {
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google.maps);
  }

  if (googleMapsScriptPromise) {
    return googleMapsScriptPromise;
  }

  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    return Promise.reject(
      new Error("Missing Google Maps API key. Set window.APP_CONFIG.googleMapsApiKey in index.html.")
    );
  }

  googleMapsScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      encodeURIComponent(apiKey) +
      "&libraries=places&v=weekly";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.maps?.places) {
        resolve(window.google.maps);
        return;
      }
      reject(new Error("Google Places library failed to initialize."));
    };
    script.onerror = () => reject(new Error("Failed to load Google Places script."));
    document.head.appendChild(script);
  });

  return googleMapsScriptPromise;
}

function extractAddressDetails(place) {
  const components = place.address_components || [];
  const streetNumber =
    components.find((component) => component.types.includes("street_number"))?.long_name || "";
  const postalCode =
    components.find((component) => component.types.includes("postal_code"))?.long_name || "";

  return {
    streetNumber,
    formattedAddress: place.formatted_address || "",
    postalCode,
  };
}


function money(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function h(type, props, ...children) {
  return React.createElement(type, props, ...children);
}

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getAppRoute(pathname = window.location.pathname) {
  const normalized = normalizePathname(pathname);

  if (normalized === "/login" || normalized.endsWith("/login")) {
    return "/login";
  }

  if (normalized === "/register" || normalized.endsWith("/register")) {
    return "/register";
  }

  return "/";
}

function getAppBasePath(pathname = window.location.pathname) {
  const normalized = normalizePathname(pathname);

  if (normalized === "/") {
    return "/";
  }

  if (normalized.endsWith("/login")) {
    return normalized.slice(0, -"/login".length) || "/";
  }

  if (normalized.endsWith("/register")) {
    return normalized.slice(0, -"/register".length) || "/";
  }

  return normalized;
}

function buildAppPath(basePath, route) {
  if (route === "/") {
    return basePath === "/" ? "/" : `${basePath}/`;
  }

  return basePath === "/" ? route : `${basePath}${route}`;
}

function App() {
  const [basePath] = useState(() => getAppBasePath());
  const [route, setRoute] = useState(() => getAppRoute());
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("pantry");
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [cartItems, setCartItems] = useState([
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
  ]);

  const selectedProduct = products.find((product) => product.id === selectedProductId) || products[0];

  const cartDetails = cartItems.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return { ...item, product };
  });

  const subtotal = cartDetails.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal >= 100 ? 0 : 12;
  const pointsEarned = cartDetails.reduce((sum, item) => sum + item.product.points * item.quantity, 0);
  const total = subtotal + deliveryFee;
  const freeDeliveryGap = Math.max(0, 100 - subtotal);

  useEffect(() => {
    document.title =
      route === "/login"
        ? "Login | Seoul Basket"
        : route === "/register"
          ? "Register | Seoul Basket"
          : "Seoul Basket Calgary Marketplace";
  }, [route]);

  useEffect(() => {
    function syncRoute() {
      setRoute(getAppRoute());
    }

    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  function navigateTo(nextRoute) {
    const normalizedRoute = nextRoute === "/login" || nextRoute === "/register" ? nextRoute : "/";
    const targetPath = buildAppPath(basePath, normalizedRoute);

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }

    setRoute(normalizedRoute);
  }

  function openCategory(categoryId) {
    setSelectedCategory(categoryId);
    setPage("category");
  }

  function openProduct(productId) {
    setSelectedProductId(productId);
    setPage("product");
  }

  function updateQuantity(productId, nextQuantity) {
    if (nextQuantity <= 0) {
      setCartItems((current) => current.filter((item) => item.productId !== productId));
      return;
    }

    setCartItems((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity: nextQuantity } : item
      )
    );
  }

  function addToCart(productId) {
    setCartItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
    setPage("cart");
  }

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return h(
    "div",
    { className: "page-shell" },
    h(Header, {
      page,
      setPage,
      route,
      navigateTo,
      cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    }),
    h(
      "main",
      {
        className:
          route === "/login" || route === "/register"
            ? "content-shell content-shell-login"
            : "content-shell",
      },
      route === "/login"
        ? h(LoginPage, { navigateTo })
        : route === "/register"
          ? h(RegisterPage, { navigateTo })
          : [
            page === "home" &&
              h(HomePage, {
                setPage,
                openCategory,
                openProduct,
              }),
            page === "category" &&
              h(CategoryPage, {
                categories,
                selectedCategory,
                filteredProducts,
                openCategory,
                openProduct,
              }),
            page === "product" &&
              h(ProductPage, {
                product: selectedProduct,
                openCategory,
                addToCart,
              }),
            page === "cart" &&
              h(CartPage, {
                cartDetails,
                subtotal,
                deliveryFee,
                total,
                pointsEarned,
                freeDeliveryGap,
                updateQuantity,
                setPage,
              }),
            page === "checkout" &&
              h(CheckoutPage, {
                cartDetails,
                subtotal,
                deliveryFee,
                total,
                pointsEarned,
              }),
          ]
    )
  );
}

function Header({ page, setPage, route, navigateTo, cartCount }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "category", label: "Categories" },
    { id: "product", label: "Product" },
    { id: "cart", label: "Cart" },
    { id: "checkout", label: "Checkout" },
  ];

  return h(
    "header",
    { className: "site-header" },
    h(
      "div",
      {
        className: "brand-block",
        onClick: () => {
          navigateTo("/");
          setPage("home");
        },
        role: "button",
        tabIndex: 0,
      },
      h("span", { className: "brand-kicker" }, "Calgary Korean Marketplace"),
      h("strong", { className: "brand-title" }, "Seoul Basket")
    ),
    h(
      "nav",
      { className: "top-nav", "aria-label": "Main navigation" },
      navItems.map((item) =>
        h(
          "button",
          {
            key: item.id,
            className: page === item.id ? "nav-link is-active" : "nav-link",
            type: "button",
            onClick: () => setPage(item.id),
          },
          item.label
        )
      )
    ),
    h(
      "div",
      { className: "header-actions" },
      h(
        "button",
        { className: "login-pill", type: "button", onClick: () => navigateTo("/login") },
        "Login"
      ),
      h(
        "button",
        { className: "cart-pill", type: "button", onClick: () => setPage("cart") },
        `Cart ${cartCount}`
      )
    )
  );
}

function LoginPage({ navigateTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(nextErrors);
    setSubmitted(true);
  }

  return h(
    "section",
    { className: "login-shell" },
    h(
      "div",
      { className: "login-promo" },
      h("p", { className: "eyebrow" }, "Member sign in"),
      h("h1", null, "Sign in to keep your Calgary grocery basket, rewards, and delivery preferences in sync."),
      h(
        "p",
        { className: "hero-text" },
        "Track repeat orders, collect marketplace reward points, and save delivery addresses across local Korean grocery sellers."
      ),
      h(
        "div",
        { className: "login-benefits" },
        h("span", { className: "benefit-chip" }, "Home delivery tracking"),
        h("span", { className: "benefit-chip" }, "Free delivery over CA$100"),
        h("span", { className: "benefit-chip" }, "Reward point history")
      )
    ),
    h(
      "div",
      { className: "login-card" },
      h(
        "div",
        { className: "auth-card-header" },
        h("p", { className: "eyebrow" }, "Welcome back"),
        h("h2", null, "Login"),
        h("p", { className: "auth-subcopy" }, "Use your saved account to continue checkout faster and keep your delivery preferences synced.")
      ),
      h(
        "form",
        { className: "login-form", onSubmit: handleSubmit, noValidate: true },
        h(
          "div",
          { className: "auth-field-group" },
          h(FormField, {
            label: "Email",
            value: email,
            type: "email",
            placeholder: "you@example.com",
            autoComplete: "email",
            readOnly: false,
            error: errors.email,
            onChange: (event) => setEmail(event.target.value),
          }),
          h(FormField, {
            label: "Password",
            value: password,
            type: "password",
            placeholder: "Enter your password",
            autoComplete: "current-password",
            readOnly: false,
            error: errors.password,
            onChange: (event) => setPassword(event.target.value),
          })
        ),
        submitted && Object.keys(errors).length > 0
          ? h("p", { className: "auth-banner auth-banner-error", role: "alert" }, "Please fix the highlighted fields before continuing.")
          : h("p", { className: "auth-banner" }, "Secure sign in for marketplace orders, saved addresses, and reward history."),
        h("button", { className: "button-primary full-width auth-submit", type: "submit" }, "Login"),
        h(
          "div",
          { className: "login-links" },
          h("a", { href: "#forgot", className: "text-link" }, "Forgot password?"),
          h(
            "button",
            { className: "text-link text-link-button", type: "button", onClick: () => navigateTo("/register") },
            "Create account"
          )
        )
      ),
      h(
        "button",
        { className: "button-secondary full-width auth-secondary", type: "button", onClick: () => navigateTo("/") },
        "Back to marketplace"
      )
    )
  );
}

function RegisterPage({ navigateTo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [unitDetails, setUnitDetails] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleStreetNumberChange(event) {
    setStreetNumber(event.target.value);
    setSelectedAddress("");
    setPostalCode("");
  }

  function handleAddressSelect(result) {
    if (result.streetNumber) {
      setStreetNumber(result.streetNumber);
    }
    setSelectedAddress(result.formattedAddress);
    setPostalCode(result.postalCode);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedContactNumber = contactNumber.trim();
    const trimmedStreetNumber = streetNumber.trim();
    const trimmedPostalCode = postalCode.trim().toUpperCase();

    if (!trimmedName) {
      nextErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      nextErrors.name = "Enter your full name.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!trimmedContactNumber) {
      nextErrors.contactNumber = "Contact number is required.";
    } else if (!/^[0-9+()\-\s]{10,}$/.test(trimmedContactNumber)) {
      nextErrors.contactNumber = "Enter a valid phone number.";
    }

    if (!trimmedStreetNumber) {
      nextErrors.streetNumber = "Street number is required.";
    }

    if (!selectedAddress) {
      nextErrors.address = "Select a Google Places address from the search results.";
    }

    if (!trimmedPostalCode) {
      nextErrors.postalCode = "Postal Code is required.";
    } else if (!/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/.test(trimmedPostalCode)) {
      nextErrors.postalCode = "Enter a valid Canadian postal code.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    setSubmitted(true);
  }

  return h(
    "section",
    { className: "login-shell" },
    h(
      "div",
      { className: "login-promo" },
      h("p", { className: "eyebrow" }, "Create your account"),
      h("h1", null, "Join Seoul Basket to save delivery details, track orders, and collect marketplace rewards."),
      h(
        "p",
        { className: "hero-text" },
        "Create a customer account once and use it across Calgary Korean grocery sellers, repeat baskets, and member-only promotions."
      ),
      h(
        "div",
        { className: "login-benefits" },
        h("span", { className: "benefit-chip" }, "Faster checkout"),
        h("span", { className: "benefit-chip" }, "Saved addresses"),
        h("span", { className: "benefit-chip" }, "Reward point balance")
      )
    ),
    h(
      "div",
      { className: "login-card" },
      h(
        "div",
        { className: "auth-card-header" },
        h("p", { className: "eyebrow" }, "New member"),
        h("h2", null, "Register"),
        h("p", { className: "auth-subcopy" }, "Create an account to save your basket, speed up checkout, and manage reward points across sellers.")
      ),
      h(
        "form",
        { className: "login-form", onSubmit: handleSubmit, noValidate: true },
        h(
          "div",
          { className: "auth-field-group" },
          h(FormField, {
            label: "Name",
            value: name,
            placeholder: "Your full name",
            readOnly: false,
            error: errors.name,
            onChange: (event) => setName(event.target.value),
          }),
          h(FormField, {
            label: "Email",
            value: email,
            type: "email",
            placeholder: "you@example.com",
            autoComplete: "email",
            readOnly: false,
            error: errors.email,
            onChange: (event) => setEmail(event.target.value),
          }),
          h(FormField, {
            label: "Contact number",
            value: contactNumber,
            type: "tel",
            placeholder: "(403) 555-0197",
            autoComplete: "tel",
            readOnly: false,
            error: errors.contactNumber,
            onChange: (event) => setContactNumber(event.target.value),
          }),
          h(AddressLookupField, {
            label: "Street number",
            value: streetNumber,
            placeholder: "Enter street number, e.g. 1423",
            onChange: handleStreetNumberChange,
            selectedAddress,
            selectionError: errors.address,
            fieldError: errors.streetNumber,
            onSelect: handleAddressSelect,
          }),
          h(FormField, {
            label: "Apt / Unit (Optional)",
            value: unitDetails,
            placeholder: "Unit 302, Apt 12B, Suite 5",
            autoComplete: "address-line2",
            readOnly: false,
            onChange: (event) => setUnitDetails(event.target.value),
          }),
          h(FormField, {
            label: "Postal Code",
            value: postalCode,
            placeholder: "T2N 1N4",
            autoComplete: "postal-code",
            readOnly: false,
            error: errors.postalCode,
            onChange: (event) => setPostalCode(event.target.value.toUpperCase()),
          }),
          h(FormField, {
            label: "Password",
            value: password,
            type: "password",
            placeholder: "Create a password",
            autoComplete: "new-password",
            readOnly: false,
            error: errors.password,
            onChange: (event) => setPassword(event.target.value),
          }),
          h(FormField, {
            label: "Confirm password",
            value: confirmPassword,
            type: "password",
            placeholder: "Confirm your password",
            autoComplete: "new-password",
            readOnly: false,
            error: errors.confirmPassword,
            onChange: (event) => setConfirmPassword(event.target.value),
          })
        ),
        submitted && Object.keys(errors).length > 0
          ? h("p", { className: "auth-banner auth-banner-error", role: "alert" }, "Please fix the highlighted fields before creating your account.")
          : null,
        h("button", { className: "button-primary full-width auth-submit", type: "submit" }, "Register"),
        h(
          "div",
          { className: "login-links" },
          h(
            "button",
            { className: "text-link text-link-button", type: "button", onClick: () => navigateTo("/login") },
            "Already have an account?"
          )
        )
      ),
      h(
        "button",
        { className: "button-secondary full-width auth-secondary", type: "button", onClick: () => navigateTo("/") },
        "Back to marketplace"
      )
    )
  );
}

function HomePage({ setPage, openCategory, openProduct }) {
  return h(
    React.Fragment,
    null,
    h(
      "section",
      { className: "hero-panel" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "eyebrow" }, "Marketplace for Calgary's Korean grocery community"),
        h("h1", null, "Order local Korean groceries, specialty pantry staples, and family meals from trusted Calgary sellers."),
        h(
          "p",
          { className: "hero-text" },
          "One storefront connects multiple Korean grocery sellers, coordinated delivery windows, and loyalty rewards for repeat customers."
        ),
        h(
          "div",
          { className: "hero-actions" },
          h(
            "button",
            { className: "button-primary", type: "button", onClick: () => setPage("category") },
            "Browse categories"
          ),
          h(
            "button",
            { className: "button-secondary", type: "button", onClick: () => openProduct(1) },
            "View featured product"
          )
        ),
        h(
          "div",
          { className: "stat-grid" },
          marketStats.map((stat) =>
            h(
              "article",
              { key: stat.label, className: "stat-card" },
              h("strong", null, stat.value),
              h("span", null, stat.label)
            )
          )
        )
      ),
      h(
        "aside",
        { className: "hero-aside" },
        h("p", { className: "eyebrow" }, "Why shoppers stay"),
        valueProps.map((item) =>
          h(
            "article",
            { key: item.title, className: "value-card" },
            h("h3", null, item.title),
            h("p", null, item.text)
          )
        )
      )
    ),
    h(
      "section",
      { className: "section-block" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Shop by category"),
        h("h2", null, "Designed for mixed baskets and fast replenishment")
      ),
      h(
        "div",
        { className: "category-grid" },
        categories.map((category) =>
          h(
            "button",
            {
              key: category.id,
              className: "category-card",
              type: "button",
              onClick: () => openCategory(category.id),
            },
            h("span", { className: "category-name" }, category.name),
            h("span", { className: "category-meta" }, `${category.itemCount} items`),
            h("span", { className: "category-accent" }, category.accent)
          )
        )
      )
    ),
    h(
      "section",
      { className: "section-block marketplace-band" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Seller marketplace"),
        h("h2", null, "Multiple Korean grocery sellers, one checkout-ready storefront")
      ),
      h(
        "div",
        { className: "seller-grid" },
        sellerHighlights.map((seller) =>
          h(
            "article",
            { key: seller.name, className: "seller-card" },
            h("h3", null, seller.name),
            h("p", null, seller.focus),
            h("span", null, seller.eta)
          )
        )
      )
    ),
    h(
      "section",
      { className: "section-block" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Featured products"),
        h("h2", null, "High-intent picks for first-time Calgary shoppers")
      ),
      h(
        "div",
        { className: "product-grid" },
        products.map((product) =>
          h(ProductCard, {
            key: product.id,
            product,
            onOpen: () => openProduct(product.id),
          })
        )
      )
    )
  );
}

function CategoryPage({ categories, selectedCategory, filteredProducts, openCategory, openProduct }) {
  return h(
    "section",
    { className: "page-panel" },
    h(
      "div",
      { className: "section-heading" },
      h("p", { className: "eyebrow" }, "Category page"),
      h("h1", null, "Browse by need, season, or seller specialty")
    ),
    h(
      "div",
      { className: "category-tabs" },
      categories.map((category) =>
        h(
          "button",
          {
            key: category.id,
            className: category.id === selectedCategory ? "filter-chip is-active" : "filter-chip",
            type: "button",
            onClick: () => openCategory(category.id),
          },
          category.name
        )
      )
    ),
    h(
      "div",
      { className: "collection-summary" },
      h("p", null, "Home delivery, free delivery over CA$100, and reward points are highlighted directly in collection cards."),
      h("span", null, `${filteredProducts.length} curated results`)
    ),
    h(
      "div",
      { className: "product-grid" },
      filteredProducts.map((product) =>
        h(ProductCard, {
          key: product.id,
          product,
          onOpen: () => openProduct(product.id),
        })
      )
    )
  );
}

function ProductPage({ product, openCategory, addToCart }) {
  return h(
    "section",
    { className: "page-panel product-layout" },
    h(
      "div",
      { className: "product-visual" },
      h("span", { className: "product-badge" }, product.badge),
      h("div", { className: "product-illustration" }, product.image)
    ),
    h(
      "div",
      { className: "product-copy" },
      h("p", { className: "eyebrow" }, `${product.seller} · ${product.delivery}`),
      h("h1", null, product.name),
      h("p", { className: "hero-text" }, product.description),
      h(
        "div",
        { className: "rating-row" },
        h("strong", null, `${product.rating} / 5`),
        h("span", null, `${product.reviews} reviews`),
        h(
          "button",
          {
            className: "inline-link",
            type: "button",
            onClick: () => openCategory(product.category),
          },
          "See more in this category"
        )
      ),
      h(
        "div",
        { className: "purchase-box" },
        h("strong", { className: "price-tag" }, money(product.price)),
        h("span", null, `${product.points} reward points`),
        h("p", null, "Free delivery unlocks automatically when the basket subtotal reaches CA$100."),
        h(
          "button",
          { className: "button-primary full-width", type: "button", onClick: () => addToCart(product.id) },
          "Add to cart"
        )
      )
    )
  );
}

function CartPage({ cartDetails, subtotal, deliveryFee, total, pointsEarned, freeDeliveryGap, updateQuantity, setPage }) {
  return h(
    "section",
    { className: "page-panel split-layout" },
    h(
      "div",
      { className: "cart-list" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Cart page"),
        h("h1", null, "Build a mixed basket across sellers")
      ),
      cartDetails.map((item) =>
        h(
          "article",
          { key: item.productId, className: "cart-item" },
          h("div", { className: "mini-illustration" }, item.product.image),
          h(
            "div",
            { className: "cart-copy" },
            h("h3", null, item.product.name),
            h("p", null, `${item.product.seller} · ${money(item.product.price)} each`)
          ),
          h(
            "div",
            { className: "qty-control" },
            h(
              "button",
              {
                type: "button",
                onClick: () => updateQuantity(item.productId, item.quantity - 1),
              },
              "-"
            ),
            h("span", null, item.quantity),
            h(
              "button",
              {
                type: "button",
                onClick: () => updateQuantity(item.productId, item.quantity + 1),
              },
              "+"
            )
          ),
          h("strong", { className: "line-total" }, money(item.product.price * item.quantity))
        )
      )
    ),
    h(
      "aside",
      { className: "summary-card" },
      h("p", { className: "eyebrow" }, "Order summary"),
      freeDeliveryGap > 0
        ? h("p", { className: "summary-highlight" }, `Add ${money(freeDeliveryGap)} more for free delivery.`)
        : h("p", { className: "summary-highlight is-success" }, "Free delivery unlocked for this order."),
      h(SummaryRow, { label: "Subtotal", value: money(subtotal) }),
      h(SummaryRow, { label: "Delivery", value: deliveryFee === 0 ? "Free" : money(deliveryFee) }),
      h(SummaryRow, { label: "Reward points", value: `${pointsEarned} pts` }),
      h(SummaryRow, { label: "Total", value: money(total), emphasized: true }),
      h(
        "button",
        { className: "button-primary full-width", type: "button", onClick: () => setPage("checkout") },
        "Proceed to checkout"
      )
    )
  );
}

function CheckoutPage({ cartDetails, subtotal, deliveryFee, total, pointsEarned }) {
  return h(
    "section",
    { className: "page-panel split-layout" },
    h(
      "div",
      { className: "checkout-form" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Checkout page"),
        h("h1", null, "Fast checkout for local delivery")
      ),
      h(
        "div",
        { className: "step-row" },
        checkoutSteps.map((step, index) =>
          h(
            "div",
            { key: step, className: index === checkoutSteps.length - 1 ? "step-chip is-muted" : "step-chip" },
            `${index + 1}. ${step}`
          )
        )
      ),
      h(
        "div",
        { className: "form-grid" },
        h(FormField, { label: "Full name", value: "Minji Park" }),
        h(FormField, { label: "Phone", value: "(403) 555-0197" }),
        h(FormField, { label: "Postal code", value: "T2N 1N4" }),
        h(FormField, { label: "Delivery window", value: "Today, 6:00 PM - 8:00 PM" }),
        h(FormField, { label: "Address", value: "1423 16 Ave NW, Calgary" }),
        h(FormField, { label: "Payment", value: "Visa ending in 2431" })
      ),
      h(
        "div",
        { className: "checkout-note" },
        h("strong", null, "Marketplace note"),
        h("p", null, "Customers place one order while each seller sees their own fulfillment queue and payout summary.")
      )
    ),
    h(
      "aside",
      { className: "summary-card" },
      h("p", { className: "eyebrow" }, "Review order"),
      cartDetails.map((item) =>
        h(
          "div",
          { key: item.productId, className: "checkout-line" },
          h("span", null, `${item.quantity} x ${item.product.name}`),
          h("strong", null, money(item.product.price * item.quantity))
        )
      ),
      h(SummaryRow, { label: "Subtotal", value: money(subtotal) }),
      h(SummaryRow, { label: "Delivery", value: deliveryFee === 0 ? "Free" : money(deliveryFee) }),
      h(SummaryRow, { label: "Reward points", value: `${pointsEarned} pts` }),
      h(SummaryRow, { label: "Total", value: money(total), emphasized: true }),
      h("button", { className: "button-primary full-width", type: "button" }, "Place order")
    )
  );
}

function ProductCard({ product, onOpen }) {
  return h(
    "article",
    { className: "product-card" },
    h(
      "div",
      { className: "product-card-top" },
      h("span", { className: "product-badge" }, product.badge),
      h("div", { className: "product-thumb" }, product.image)
    ),
    h("p", { className: "seller-line" }, product.seller),
    h("h3", null, product.name),
    h("p", { className: "product-description" }, product.description),
    h(
      "div",
      { className: "product-meta" },
      h("span", null, product.delivery),
      h("span", null, `${product.points} pts`)
    ),
    h(
      "div",
      { className: "product-footer" },
      h("strong", null, money(product.price)),
      h("button", { className: "button-secondary", type: "button", onClick: onOpen }, "View details")
    )
  );
}

function SummaryRow({ label, value, emphasized }) {
  return h(
    "div",
    { className: emphasized ? "summary-row is-emphasized" : "summary-row" },
    h("span", null, label),
    h("strong", null, value)
  );
}

function AddressLookupField({
  label,
  value,
  placeholder,
  onChange,
  selectedAddress,
  selectionError,
  fieldError,
  onSelect,
}) {
  const [options, setOptions] = useState([]);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const sessionTokenRef = useRef(null);
  const placesContainerRef = useRef(null);

  useEffect(() => {
    let isActive = true;

    loadGooglePlacesLibrary()
      .then((maps) => {
        if (!isActive) {
          return;
        }

        if (!autocompleteServiceRef.current) {
          autocompleteServiceRef.current = new maps.places.AutocompleteService();
        }

        if (!placesServiceRef.current && placesContainerRef.current) {
          placesServiceRef.current = new maps.places.PlacesService(placesContainerRef.current);
        }

        if (!sessionTokenRef.current) {
          sessionTokenRef.current = new maps.places.AutocompleteSessionToken();
        }

        setApiError("");
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }
        setApiError(error.message);
      });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!autocompleteServiceRef.current) {
      return;
    }

    const trimmedValue = value.trim();
    if (!trimmedValue || selectedAddress) {
      setOptions([]);
      setIsLoading(false);
      setApiError("");
      return;
    }

    let isCancelled = false;
    setIsLoading(true);
    const timeoutId = window.setTimeout(() => {
      const requestTimeoutId = window.setTimeout(() => {
        if (isCancelled) {
          return;
        }
        setIsLoading(false);
        setOptions([]);
        setApiError("Google Places request timed out. Check API key restrictions or local network access.");
      }, 5000);

      try {
        autocompleteServiceRef.current.getPlacePredictions(
          {
            input: trimmedValue + " " + calgarySearchHint,
            componentRestrictions: { country: "ca" },
            sessionToken: sessionTokenRef.current,
          },
          (predictions, status) => {
            if (isCancelled) {
              return;
            }

            window.clearTimeout(requestTimeoutId);
            setIsLoading(false);

            const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
            const zeroStatus = window.google?.maps?.places?.PlacesServiceStatus?.ZERO_RESULTS;

            if (status === okStatus && predictions) {
              setOptions(predictions.slice(0, MAX_ADDRESS_RESULTS));
              setApiError("");
              return;
            }

            setOptions([]);

            if (status === zeroStatus) {
              setApiError("");
              return;
            }

            setApiError("");
          }
        );
      } catch (error) {
        window.clearTimeout(requestTimeoutId);
        if (isCancelled) {
          return;
        }
        setIsLoading(false);
        setOptions([]);
        setApiError(error?.message || "Google Places could not return address suggestions right now.");
      }
    }, 250);

    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [selectedAddress, value]);

  function selectPrediction(prediction) {
    if (!placesServiceRef.current) {
      setApiError("Place details service is not ready yet.");
      return;
    }

    placesServiceRef.current.getDetails(
      {
        placeId: prediction.place_id,
        fields: ["formatted_address", "address_components"],
        sessionToken: sessionTokenRef.current,
      },
      (place, status) => {
        const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
        if (status !== okStatus || !place) {
          setApiError("Google Places could not load the selected address.");
          return;
        }

        onSelect(extractAddressDetails(place));
        setOptions([]);
        sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
        setApiError("");
      }
    );
  }

  const isInvalid = Boolean(fieldError || selectionError || apiError);

  return h(
    "label",
    { className: isInvalid ? "form-field form-field-address is-invalid" : "form-field form-field-address" },
    h("span", null, label),
    h("input", { type: "text", value, placeholder, onChange, autoComplete: "address-line1", "aria-invalid": isInvalid }),
    h("div", { ref: placesContainerRef, className: "places-attribution-anchor", "aria-hidden": "true" }),
    isLoading ? h("small", { className: "field-hint" }, "Searching addresses...") : null,
    options.length > 0
      ? h(
          "div",
          { className: "address-results" },
          options.map((prediction) =>
            h(
              "button",
              {
                key: prediction.place_id,
                className: "address-option",
                type: "button",
                onClick: () => selectPrediction(prediction),
              },
              h("strong", null, prediction.structured_formatting?.main_text || prediction.description),
              h("span", null, prediction.structured_formatting?.secondary_text || prediction.description)
            )
          )
        )
      : value.trim().length > 0 && !selectedAddress && !isLoading && !apiError
        ? h("small", { className: "field-hint" }, "No matching address results yet. Try adding more of the street number or nearby address context.")
        : null,
    selectedAddress
      ? h(
          "div",
          { className: "selected-address-card" },
          h("span", { className: "selected-address-label" }, "Selected Address"),
          h("strong", null, selectedAddress)
        )
      : null,
    fieldError ? h("small", { className: "field-error", role: "alert" }, fieldError) : null,
    selectionError ? h("small", { className: "field-error", role: "alert" }, selectionError) : null,
    apiError ? h("small", { className: "field-error", role: "alert" }, apiError) : null
  );
}

function FormField({
  label,
  value,
  type = "text",
  placeholder = "",
  autoComplete,
  readOnly = true,
  onChange,
  error,
}) {
  return h(
    "label",
    { className: error ? "form-field is-invalid" : "form-field" },
    h("span", null, label),
    h("input", { type, value, placeholder, autoComplete, readOnly, onChange, "aria-invalid": Boolean(error) }),
    error ? h("small", { className: "field-error", role: "alert" }, error) : null
  );
}

createRoot(document.getElementById("root")).render(h(App));
