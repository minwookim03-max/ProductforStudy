import React, { useEffect, useState } from "https://esm.sh/react@18.3.1";
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

function App() {
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
    document.title = "Seoul Basket Calgary Marketplace";
  }, []);

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
      cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    }),
    h(
      "main",
      { className: "content-shell" },
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
        })
    )
  );
}

function Header({ page, setPage, cartCount }) {
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
      { className: "brand-block", onClick: () => setPage("home"), role: "button", tabIndex: 0 },
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
      "button",
      { className: "cart-pill", type: "button", onClick: () => setPage("cart") },
      `Cart ${cartCount}`
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

function FormField({ label, value }) {
  return h(
    "label",
    { className: "form-field" },
    h("span", null, label),
    h("input", { type: "text", value, readOnly: true })
  );
}

createRoot(document.getElementById("root")).render(h(App));
