const announcementItems = [
  "Weekly flyer updates every Tuesday",
  "KakaoTalk community perks for Calgary members",
  "Cold-chain delivery windows posted every morning",
];

const quickCategories = [
  { id: "vans-pick", label: "Van's Pick", shortLabel: "Van", tone: "orange" },
  { id: "soups-side-dishes", label: "Soups / Side Dishes", shortLabel: "Soup", tone: "brown" },
  { id: "kimchi", label: "Kimchi", shortLabel: "Kim", tone: "orange" },
  { id: "meal-kits", label: "Meal Kits", shortLabel: "Meal", tone: "green" },
  { id: "fruits-vegetables", label: "Fruits / Vegetables", shortLabel: "Fresh", tone: "green" },
  { id: "meat", label: "Meat", shortLabel: "Meat", tone: "brown" },
  { id: "seafood", label: "Seafood", shortLabel: "Sea", tone: "green" },
  { id: "snacks-desserts", label: "Snacks / Desserts", shortLabel: "Snack", tone: "orange" },
  { id: "home-beauty", label: "Home / Beauty", shortLabel: "Home", tone: "brown" },
];

const marketplaceCategories = [
  {
    id: "vans-pick",
    label: "Van's Pick",
    note: "Weekly marketplace highlights",
    children: ["Fresh this week", "Family meal bundles", "Calgary favourites"],
  },
  {
    id: "soups-side-dishes",
    label: "Soups / Side Dishes",
    note: "Ready-to-serve comfort foods",
    children: ["Guk / Tang", "Banchan sets", "Porridge", "Steamed dishes"],
  },
  {
    id: "kimchi",
    label: "Kimchi",
    note: "Small-batch fermented staples",
    children: ["Napa kimchi", "Radish kimchi", "Water kimchi"],
  },
  {
    id: "meal-kits",
    label: "Meal Kits",
    note: "Dinner-ready Korean kits",
    children: ["Jjigae kits", "BBQ sets", "Street food kits"],
  },
  {
    id: "fruits-vegetables",
    label: "Fruits / Vegetables",
    note: "Fresh produce for weekly baskets",
    children: ["Leafy greens", "Fruit trays", "Herbs / garnish"],
  },
  {
    id: "meat",
    label: "Meat",
    note: "Trusted Calgary meat sellers",
    children: ["Bulgogi cuts", "Pork belly", "Marinated trays"],
  },
  {
    id: "seafood",
    label: "Seafood",
    note: "Cold-chain handled seafood",
    children: ["Frozen fish", "Shellfish", "Dried seafood"],
  },
  {
    id: "snacks-desserts",
    label: "Snacks / Desserts",
    note: "Pantry treats and sweets",
    children: ["Chips / crackers", "Rice cakes", "Frozen desserts"],
  },
  {
    id: "home-beauty",
    label: "Home / Beauty",
    note: "Lifestyle add-ons",
    children: ["Sheet masks", "Home care", "Gift sets"],
  },
];

const products = [
  {
    id: 1,
    name: "Van's Weekend Banchan Box",
    seller: "Van Market Calgary",
    price: 29,
    compareAtPrice: 34,
    badge: "Hot",
    tags: ["Hot"],
    states: ["fresh", "ready"],
    rating: 4.9,
    reviews: 132,
    delivery: "Delivered this Thursday in Calgary",
    description: "A ready-to-share banchan assortment with japchae, stir-fried anchovy, seasoned spinach, and radish kimchi.",
    image: "Banchan box",
  },
  {
    id: 2,
    name: "Budae Jjigae Family Meal Kit",
    seller: "Baro Kitchen",
    price: 22,
    compareAtPrice: 27,
    badge: "New",
    tags: ["Hot"],
    states: ["fresh"],
    rating: 4.8,
    reviews: 76,
    delivery: "Weekend delivery slots open",
    description: "A complete stew kit with sausages, tofu, noodles, kimchi, and spicy broth for four.",
    image: "Meal kit",
  },
  {
    id: 3,
    name: "Seoul House Mat Kimchi",
    seller: "Maple Kimchi Co.",
    price: 17,
    compareAtPrice: 20,
    badge: "Best",
    tags: ["Best Seller"],
    states: ["fresh", "ready"],
    rating: 4.9,
    reviews: 201,
    delivery: "Fresh batch packed today",
    description: "Crisp napa kimchi fermented in small batches for a balanced spicy and savoury flavour.",
    image: "Kimchi jar",
  },
  {
    id: 4,
    name: "Ssam Vegetable Box",
    seller: "Calgary Green Basket",
    price: 14,
    compareAtPrice: 16,
    badge: "Farm",
    tags: [],
    states: ["fresh"],
    rating: 4.7,
    reviews: 48,
    delivery: "Calgary / Airdrie route this week",
    description: "Leafy greens, perilla leaves, garlic, peppers, and cucumber packed for barbecue nights.",
    image: "Fresh greens",
  },
  {
    id: 5,
    name: "Bulgogi Family Tray",
    seller: "Prairie K-Meats",
    price: 26,
    compareAtPrice: null,
    badge: "More",
    tags: ["Best Seller"],
    states: ["fresh", "ready"],
    rating: 4.8,
    reviews: 89,
    delivery: "Cold-chain van delivery available",
    description: "Thinly sliced marinated beef prepared for quick pan-fry dinners and lettuce wraps.",
    image: "Bulgogi tray",
  },
  {
    id: 6,
    name: "Norwegian Mackerel Fillet Pack",
    seller: "Blue Sea Mart",
    price: 19,
    compareAtPrice: 24,
    badge: "Deal",
    tags: ["Hot"],
    states: ["frozen"],
    rating: 4.6,
    reviews: 54,
    delivery: "Frozen route on Friday",
    description: "Portioned mackerel fillets for grilling, braising, and easy weeknight Korean meals.",
    image: "Seafood pack",
  },
  {
    id: 7,
    name: "Street Tteokbokki Party Cup",
    seller: "Hanok Treats",
    price: 11,
    compareAtPrice: 13,
    badge: "Hot",
    tags: ["Hot"],
    states: ["ready"],
    rating: 4.8,
    reviews: 94,
    delivery: "Add-on item for any route",
    description: "Chewy rice cakes, sweet-spicy sauce, fish cake, and sesame for a quick street-food craving.",
    image: "Tteokbokki",
  },
  {
    id: 8,
    name: "Galbitang Soup Pack",
    seller: "Seoul Soup House",
    price: 18,
    compareAtPrice: null,
    badge: "Best",
    tags: ["Best Seller"],
    states: ["fresh", "ready"],
    rating: 4.9,
    reviews: 117,
    delivery: "Heat-and-serve delivery today",
    description: "Slow-simmered beef short rib soup prepared for comforting dinners and easy lunch prep.",
    image: "Soup pack",
  },
  {
    id: 9,
    name: "Daily Sheet Mask Set",
    seller: "Glow Seoul Living",
    price: 15,
    compareAtPrice: null,
    badge: "New",
    tags: [],
    states: [],
    rating: 4.7,
    reviews: 38,
    delivery: "Ships with lifestyle orders",
    description: "A gentle everyday skincare bundle with hydration masks and a travel-size soothing cream.",
    image: "Beauty set",
  },
  {
    id: 10,
    name: "Shine Muscat Gift Tray",
    seller: "Seoul Fresh Market",
    price: 21,
    compareAtPrice: 25,
    badge: "Deal",
    tags: ["Best Seller"],
    states: ["fresh"],
    rating: 4.8,
    reviews: 61,
    delivery: "Cochrane route available Saturday",
    description: "Sweet crisp grapes selected for gifting, entertaining, or premium fruit baskets.",
    image: "Fruit tray",
  },
];

const productProfiles = {
  1: {
    subtitle: "A ready-to-serve Korean side-dish set for easy weeknight tables.",
    ingredients: ["Japchae", "Seasoned spinach", "Stir-fried anchovy", "Radish kimchi", "Sesame oil seasoning"],
    storage: "Keep refrigerated at 0-4 C. Best enjoyed within 3 days of delivery.",
  },
  2: {
    subtitle: "Family-size Korean stew kit with pantry staples packed for one pot cooking.",
    ingredients: ["Sausage", "Kimchi", "Tofu", "Instant noodles", "Spicy broth base"],
    storage: "Keep refrigerated. Cook within 2 days or freeze immediately after delivery.",
  },
  3: {
    subtitle: "Small-batch napa kimchi with balanced spice and clean fermented depth.",
    ingredients: ["Napa cabbage", "Korean chili flakes", "Garlic", "Ginger", "Fish sauce"],
    storage: "Refrigerate after opening. Fermentation flavour deepens over 7-10 days.",
  },
  4: {
    subtitle: "Fresh ssam vegetables packed for barbecue wraps and crisp family dinners.",
    ingredients: ["Lettuce", "Perilla leaves", "Cucumber", "Garlic", "Green chili peppers"],
    storage: "Refrigerate in the produce drawer. Wash before serving and enjoy within 4 days.",
  },
  5: {
    subtitle: "Marinated bulgogi tray for fast skillet dinners and lettuce wrap nights.",
    ingredients: ["Sliced beef", "Soy sauce", "Pear puree", "Garlic", "Sesame oil"],
    storage: "Keep refrigerated and cook within 2 days. Suitable for freezing upon arrival.",
  },
  6: {
    subtitle: "Portioned fish pack prepared for Korean grilling, braising, and freezer storage.",
    ingredients: ["Mackerel fillet", "Sea salt"],
    storage: "Keep frozen until ready to cook. Thaw in the refrigerator overnight.",
  },
  7: {
    subtitle: "Sweet-spicy street-food cup with chewy rice cakes and fish cake comfort.",
    ingredients: ["Rice cakes", "Gochujang sauce", "Fish cake", "Scallion", "Sesame seeds"],
    storage: "Keep refrigerated and cook on the same day for best texture.",
  },
  8: {
    subtitle: "Rich short-rib soup pack for heat-and-serve comfort meals.",
    ingredients: ["Beef short rib", "Radish", "Garlic", "Green onion", "Clear beef broth"],
    storage: "Keep refrigerated. Reheat thoroughly and consume within 2 days.",
  },
  9: {
    subtitle: "Daily Korean beauty bundle designed for easy hydration and soothing care.",
    ingredients: ["Hydration sheet masks", "Soothing cream", "Skin-conditioning essence"],
    storage: "Store in a cool dry place away from direct sunlight.",
  },
  10: {
    subtitle: "Premium shine muscat tray selected for gifting and seasonal fruit orders.",
    ingredients: ["Fresh shine muscat grapes"],
    storage: "Keep chilled and enjoy within 3 days for best sweetness and texture.",
  },
};

const heroSlides = [
  {
    image: "./assets/Banner-Sample1.png",
    alt: "Korean fried chicken and tteokbokki weekly deals banner",
  },
  {
    image: "./assets/Banner-Sample2.png",
    alt: "Korean fried chicken, kimbab, and free delivery banner",
  },
  {
    image: "./assets/Banner-Sample3.png",
    alt: "Calgary Korean grocery delivery banner with grocery bag",
  },
];

const brandHallItems = [
  {
    name: "Van Market Calgary",
    focus: "Weekly Korean grocery staples, produce, and family-ready prepared foods",
    eta: "Trusted local seller",
  },
  {
    name: "Baro Kitchen",
    focus: "Meal kits, frozen comfort foods, and quick dinner solutions for busy households",
    eta: "Popular for repeat baskets",
  },
  {
    name: "Glow Seoul Living",
    focus: "Home and beauty essentials that pair well with grocery orders and gifting",
    eta: "Lifestyle add-ons",
  },
];

const sectionProducts = {
  featured: [1, 8, 3, 5, 7],
  best: [1, 3, 5, 8, 6],
  new: [2, 4, 7, 9, 10],
  deals: [6, 10, 2, 8, 4],
};

const deliveryZones = [
  { icon: "Cal", title: "Calgary", note: "Primary delivery zone", eta: "Estimated Apr 16-17, 2026" },
  { icon: "Air", title: "Airdrie", note: "Selected route days", eta: "Estimated Apr 17, 2026" },
  { icon: "Coc", title: "Cochrane", note: "Weekly marketplace drop", eta: "Estimated Apr 18, 2026" },
];

const checkoutDeliverySlots = [
  "Thu, Apr 16 · Calgary route",
  "Fri, Apr 17 · Airdrie route",
  "Sat, Apr 18 · Cochrane route",
];

const canadianProvinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const countryRegions = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

let activeSlide = 0;
let slideIntervalId;
let currentDetailTab = "description";
let currentDetailQty = 1;
let currentDetailImage = 0;
let currentDetailProductId = null;
let cartState = [];
let checkoutFormState = {
  name: "",
  phone: "",
  addressQuery: "",
  selectedAddress: "",
  addressLine2: "",
  postalCode: "",
  shippingCity: "",
  shippingProvince: "",
  deliveryDate: checkoutDeliverySlots[0],
  cardName: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  useShippingAsBillingAddress: true,
  billingAddressQuery: "",
  billingSelectedAddress: "",
  billingAddressLine2: "",
  billingPostalCode: "",
  billingCity: "",
  billingProvince: "",
  billingCountry: "Canada",
  redeemEnabled: false,
  redeemPoints: 0,
  addressOptions: [],
  addressLoading: false,
  addressApiError: "",
  billingAddressOptions: [],
  billingAddressLoading: false,
  billingAddressApiError: "",
  errors: {},
  banner: "",
  isSubmitting: false,
};
let loginFormState = {
  email: "",
  password: "",
  errors: {},
  banner: "",
};
let authState = {
  isLoggedIn: false,
  email: "",
  name: "",
  points: 0,
};
let isAccountMenuOpen = false;
let registerFormState = {
  name: "",
  email: "",
  addressQuery: "",
  selectedAddress: "",
  addressLine2: "",
  postalCode: "",
  password: "",
  confirmPassword: "",
  requiredConsent: false,
  marketingConsent: false,
  addressOptions: [],
  addressLoading: false,
  addressApiError: "",
  errors: {},
  banner: "",
};

let googleMapsScriptPromise;
let registerAutocompleteService;
let registerPlacesService;
let registerPlacesAnchor;
let registerPlacesSessionToken;
let registerLookupDebounceId;
let registerLookupRequestId = 0;

function createCheckoutFormState() {
  return {
    name: authState.name || "",
    phone: "",
    addressQuery: "",
    selectedAddress: "",
    addressLine2: "",
    postalCode: "",
    shippingCity: "",
    shippingProvince: "",
    deliveryDate: checkoutDeliverySlots[0],
    cardName: authState.name || "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    useShippingAsBillingAddress: true,
    billingAddressQuery: "",
    billingSelectedAddress: "",
    billingAddressLine2: "",
    billingPostalCode: "",
    billingCity: "",
    billingProvince: "",
    billingCountry: "Canada",
    redeemEnabled: false,
    redeemPoints: authState.points >= 2500 ? 500 : 0,
    addressOptions: [],
    addressLoading: false,
    addressApiError: "",
    billingAddressOptions: [],
    billingAddressLoading: false,
    billingAddressApiError: "",
    errors: {},
    banner: "",
    isSubmitting: false,
  };
}

function createLoginFormState() {
  return {
    email: "",
    password: "",
    errors: {},
    banner: "",
  };
}

function createRegisterFormState() {
  return {
    name: "",
    email: "",
    addressQuery: "",
    selectedAddress: "",
    addressLine2: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
    requiredConsent: false,
    marketingConsent: false,
    addressOptions: [],
    addressLoading: false,
    addressApiError: "",
    errors: {},
    banner: "",
  };
}

function resetCheckoutFormState() {
  checkoutFormState = createCheckoutFormState();
}

function resetLoginFormState() {
  loginFormState = createLoginFormState();
}

function resetRegisterFormState() {
  registerFormState = createRegisterFormState();
}

function syncBillingAddressFromShipping() {
  checkoutFormState.billingAddressQuery = checkoutFormState.addressQuery;
  checkoutFormState.billingSelectedAddress = checkoutFormState.selectedAddress;
  checkoutFormState.billingAddressLine2 = checkoutFormState.addressLine2;
  checkoutFormState.billingPostalCode = checkoutFormState.postalCode;
  checkoutFormState.billingCity = checkoutFormState.shippingCity;
  checkoutFormState.billingProvince = checkoutFormState.shippingProvince;
  checkoutFormState.billingCountry = "Canada";
  checkoutFormState.billingAddressOptions = [];
  checkoutFormState.billingAddressApiError = "";
  checkoutFormState.billingAddressLoading = false;
}

function formatCardNumber(value) {
  return value.replace(/\D+/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1-');
}

function formatExpiryDate(value) {
  const digits = value.replace(/\D+/g, '').slice(0, 4);
  if (digits.length <= 2) {
    return digits;
  }
  return digits.slice(0, 2) + '/' + digits.slice(2);
}

function formatCvc(value) {
  return value.replace(/\D+/g, '').slice(0, 4);
}


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
    return Promise.reject(new Error("Missing Google Maps API key. Set window.APP_CONFIG.googleMapsApiKey in index.html."));
  }

  googleMapsScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-google-places="true"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.google.maps), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Google Places script.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(apiKey) + '&libraries=places&v=weekly';
    script.async = true;
    script.defer = true;
    script.dataset.googlePlaces = 'true';
    script.onload = () => {
      if (window.google?.maps?.places) {
        resolve(window.google.maps);
        return;
      }
      reject(new Error('Google Places library failed to initialize.'));
    };
    script.onerror = () => reject(new Error('Failed to load Google Places script.'));
    document.head.appendChild(script);
  });

  return googleMapsScriptPromise;
}

function extractAddressDetails(place) {
  const components = place.address_components || [];
  const postalCode = components.find((component) => component.types.includes('postal_code'))?.long_name || '';
  const city = components.find((component) => component.types.includes('locality'))?.long_name
    || components.find((component) => component.types.includes('postal_town'))?.long_name
    || components.find((component) => component.types.includes('sublocality_level_1'))?.long_name
    || components.find((component) => component.types.includes('administrative_area_level_3'))?.long_name
    || '';
  const province = components.find((component) => component.types.includes('administrative_area_level_1'))?.long_name || '';
  const country = components.find((component) => component.types.includes('country'))?.long_name || 'Canada';
  return {
    formattedAddress: place.formatted_address || '',
    postalCode,
    city,
    province,
    country,
  };
}


function normalizeAddressSearch(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

async function ensureRegisterPlacesServices() {
  const maps = await loadGooglePlacesLibrary();
  if (!registerAutocompleteService) {
    registerAutocompleteService = new maps.places.AutocompleteService();
  }

  const anchorNode = document.getElementById('places-service-anchor') || document.createElement('div');
  if (!registerPlacesService || registerPlacesAnchor !== anchorNode) {
    registerPlacesService = new maps.places.PlacesService(anchorNode);
    registerPlacesAnchor = anchorNode;
  }

  if (!registerPlacesSessionToken) {
    registerPlacesSessionToken = new maps.places.AutocompleteSessionToken();
  }

  return maps;
}

async function fetchRegisterAddressSuggestions(query) {
  const trimmed = query.trim();
  registerFormState.addressQuery = query;
  registerFormState.selectedAddress = '';
  registerFormState.addressApiError = '';

  if (registerLookupDebounceId) {
    window.clearTimeout(registerLookupDebounceId);
  }

  if (trimmed.length < 3) {
    registerFormState.addressOptions = [];
    registerFormState.addressLoading = false;
    rerenderRegisterView({ preserveAddressFocus: true, caretPosition: query.length });
    return;
  }

  registerFormState.addressLoading = true;

  const requestId = ++registerLookupRequestId;
  registerLookupDebounceId = window.setTimeout(async () => {
    try {
      await ensureRegisterPlacesServices();
      const predictions = await new Promise((resolve, reject) => {
        registerAutocompleteService.getPlacePredictions(
          {
            input: trimmed,
            componentRestrictions: { country: 'ca' },
            sessionToken: registerPlacesSessionToken,
          },
          (results, status) => {
            const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
            const zeroStatus = window.google?.maps?.places?.PlacesServiceStatus?.ZERO_RESULTS;
            if (status === okStatus) {
              resolve(results || []);
              return;
            }
            if (status === zeroStatus) {
              resolve([]);
              return;
            }
            reject(new Error('Google Places could not return address suggestions right now.'));
          }
        );
      });

      if (requestId !== registerLookupRequestId) {
        return;
      }

      const normalizedQuery = normalizeAddressSearch(trimmed);
      registerFormState.addressOptions = predictions
        .map((prediction) => ({
          placeId: prediction.place_id,
          mainText: prediction.structured_formatting?.main_text || prediction.description,
          secondaryText: prediction.structured_formatting?.secondary_text || prediction.description,
          description: prediction.description || '',
        }))
        .filter((prediction) => {
          const mainText = normalizeAddressSearch(prediction.mainText);
          const description = normalizeAddressSearch(prediction.description);
          return mainText.startsWith(normalizedQuery) || description.startsWith(normalizedQuery);
        });
      registerFormState.addressLoading = false;
      registerFormState.addressApiError = '';
    } catch (error) {
      if (requestId !== registerLookupRequestId) {
        return;
      }
      registerFormState.addressLoading = false;
      registerFormState.addressOptions = [];
      registerFormState.addressApiError = error?.message || 'Google Places could not return address suggestions right now.';
    }

    rerenderRegisterView({ preserveAddressFocus: true, caretPosition: query.length });
  }, 250);
}

async function selectRegisterAddress(placeId) {
  try {
    await ensureRegisterPlacesServices();
    const place = await new Promise((resolve, reject) => {
      registerPlacesService.getDetails(
        {
          placeId,
          fields: ['formatted_address', 'address_components'],
          sessionToken: registerPlacesSessionToken,
        },
        (result, status) => {
          const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
          if (status !== okStatus || !result) {
            reject(new Error('Google Places could not load the selected address.'));
            return;
          }
          resolve(result);
        }
      );
    });

    const details = extractAddressDetails(place);
    registerFormState.selectedAddress = details.formattedAddress;
    registerFormState.addressQuery = details.formattedAddress;
    registerFormState.postalCode = details.postalCode || registerFormState.postalCode;
    registerFormState.addressOptions = [];
    registerFormState.addressApiError = '';
    registerFormState.errors = { ...registerFormState.errors, selectedAddress: '', addressQuery: '', postalCode: '' };
    registerPlacesSessionToken = new window.google.maps.places.AutocompleteSessionToken();
  } catch (error) {
    registerFormState.addressApiError = error?.message || 'Google Places could not load the selected address.';
  }

  registerFormState.addressLoading = false;
  renderRegister();
  attachSharedControls();
  attachRegisterControls();
}

async function fetchCheckoutAddressSuggestions(query) {
  const trimmed = query.trim();
  checkoutFormState.addressQuery = query;
  checkoutFormState.selectedAddress = '';
  checkoutFormState.addressApiError = '';

  if (registerLookupDebounceId) {
    window.clearTimeout(registerLookupDebounceId);
  }

  if (trimmed.length < 3) {
    checkoutFormState.addressOptions = [];
    checkoutFormState.addressLoading = false;
    rerenderCheckoutView({ preserveAddressFocus: true, caretPosition: query.length });
    return;
  }

  checkoutFormState.addressLoading = true;
  const requestId = ++registerLookupRequestId;
  registerLookupDebounceId = window.setTimeout(async () => {
    try {
      await ensureRegisterPlacesServices();
      const predictions = await new Promise((resolve, reject) => {
        registerAutocompleteService.getPlacePredictions(
          {
            input: trimmed,
            sessionToken: registerPlacesSessionToken,
          },
          (results, status) => {
            const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
            const zeroStatus = window.google?.maps?.places?.PlacesServiceStatus?.ZERO_RESULTS;
            if (status === okStatus) {
              resolve(results || []);
              return;
            }
            if (status === zeroStatus) {
              resolve([]);
              return;
            }
            reject(new Error('Google Places could not return address suggestions right now.'));
          }
        );
      });

      if (requestId !== registerLookupRequestId) return;
      const normalizedQuery = normalizeAddressSearch(trimmed);
      checkoutFormState.addressOptions = predictions
        .map((prediction) => ({
          placeId: prediction.place_id,
          mainText: prediction.structured_formatting?.main_text || prediction.description,
          secondaryText: prediction.structured_formatting?.secondary_text || prediction.description,
          description: prediction.description || '',
        }))
        .filter((prediction) => {
          const mainText = normalizeAddressSearch(prediction.mainText);
          const description = normalizeAddressSearch(prediction.description);
          return mainText.startsWith(normalizedQuery) || description.startsWith(normalizedQuery);
        });
      checkoutFormState.addressLoading = false;
      checkoutFormState.addressApiError = '';
    } catch (error) {
      if (requestId !== registerLookupRequestId) return;
      checkoutFormState.addressLoading = false;
      checkoutFormState.addressOptions = [];
      checkoutFormState.addressApiError = error?.message || 'Google Places could not return address suggestions right now.';
    }

    rerenderCheckoutView({ preserveAddressFocus: true, caretPosition: query.length });
  }, 250);
}

async function selectCheckoutAddress(placeId) {
  try {
    await ensureRegisterPlacesServices();
    const place = await new Promise((resolve, reject) => {
      registerPlacesService.getDetails(
        {
          placeId,
          fields: ['formatted_address', 'address_components'],
          sessionToken: registerPlacesSessionToken,
        },
        (result, status) => {
          const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
          if (status !== okStatus || !result) {
            reject(new Error('Google Places could not load the selected address.'));
            return;
          }
          resolve(result);
        }
      );
    });

    const details = extractAddressDetails(place);
    checkoutFormState.selectedAddress = details.formattedAddress;
    checkoutFormState.addressQuery = details.formattedAddress;
    checkoutFormState.postalCode = details.postalCode || checkoutFormState.postalCode;
    checkoutFormState.shippingCity = details.city || checkoutFormState.shippingCity;
    checkoutFormState.shippingProvince = details.province || checkoutFormState.shippingProvince;
    checkoutFormState.addressOptions = [];
    checkoutFormState.addressApiError = '';
    checkoutFormState.errors = {
      ...checkoutFormState.errors,
      selectedAddress: '',
      addressQuery: '',
      postalCode: '',
      shippingCity: '',
      shippingProvince: '',
    };
    if (checkoutFormState.useShippingAsBillingAddress) {
      syncBillingAddressFromShipping();
    }
    registerPlacesSessionToken = new window.google.maps.places.AutocompleteSessionToken();
  } catch (error) {
    checkoutFormState.addressApiError = error?.message || 'Google Places could not load the selected address.';
  }

  checkoutFormState.addressLoading = false;
  renderCheckout();
  attachSharedControls();
  attachCheckoutControls();
}

async function fetchCheckoutBillingAddressSuggestions(query) {
  const trimmed = query.trim();
  checkoutFormState.billingAddressQuery = query;
  checkoutFormState.billingSelectedAddress = '';
  checkoutFormState.billingAddressApiError = '';

  if (registerLookupDebounceId) {
    window.clearTimeout(registerLookupDebounceId);
  }

  if (trimmed.length < 3) {
    checkoutFormState.billingAddressOptions = [];
    checkoutFormState.billingAddressLoading = false;
    rerenderCheckoutView({ preserveFieldName: 'billingAddressQuery', caretPosition: query.length });
    return;
  }

  checkoutFormState.billingAddressLoading = true;
  const requestId = ++registerLookupRequestId;
  registerLookupDebounceId = window.setTimeout(async () => {
    try {
      await ensureRegisterPlacesServices();
      const predictions = await new Promise((resolve, reject) => {
        registerAutocompleteService.getPlacePredictions(
          {
            input: trimmed,
            componentRestrictions: { country: 'ca' },
            sessionToken: registerPlacesSessionToken,
          },
          (results, status) => {
            const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
            const zeroStatus = window.google?.maps?.places?.PlacesServiceStatus?.ZERO_RESULTS;
            if (status === okStatus) {
              resolve(results || []);
              return;
            }
            if (status === zeroStatus) {
              resolve([]);
              return;
            }
            reject(new Error('Google Places could not return address suggestions right now.'));
          }
        );
      });

      if (requestId !== registerLookupRequestId) return;
      const normalizedQuery = normalizeAddressSearch(trimmed);
      checkoutFormState.billingAddressOptions = predictions
        .map((prediction) => ({
          placeId: prediction.place_id,
          mainText: prediction.structured_formatting?.main_text || prediction.description,
          secondaryText: prediction.structured_formatting?.secondary_text || prediction.description,
          description: prediction.description || '',
        }))
        .filter((prediction) => {
          const mainText = normalizeAddressSearch(prediction.mainText);
          const description = normalizeAddressSearch(prediction.description);
          return mainText.startsWith(normalizedQuery) || description.startsWith(normalizedQuery);
        });
      checkoutFormState.billingAddressLoading = false;
      checkoutFormState.billingAddressApiError = '';
    } catch (error) {
      if (requestId !== registerLookupRequestId) return;
      checkoutFormState.billingAddressLoading = false;
      checkoutFormState.billingAddressOptions = [];
      checkoutFormState.billingAddressApiError = error?.message || 'Google Places could not return address suggestions right now.';
    }

    rerenderCheckoutView({ preserveFieldName: 'billingAddressQuery', caretPosition: query.length });
  }, 250);
}

async function selectCheckoutBillingAddress(placeId) {
  try {
    await ensureRegisterPlacesServices();
    const place = await new Promise((resolve, reject) => {
      registerPlacesService.getDetails(
        {
          placeId,
          fields: ['formatted_address', 'address_components'],
          sessionToken: registerPlacesSessionToken,
        },
        (result, status) => {
          const okStatus = window.google?.maps?.places?.PlacesServiceStatus?.OK;
          if (status !== okStatus || !result) {
            reject(new Error('Google Places could not load the selected address.'));
            return;
          }
          resolve(result);
        }
      );
    });

    const details = extractAddressDetails(place);
    checkoutFormState.billingSelectedAddress = details.formattedAddress;
    checkoutFormState.billingAddressQuery = details.formattedAddress;
    checkoutFormState.billingPostalCode = details.postalCode || checkoutFormState.billingPostalCode;
    checkoutFormState.billingCity = details.city || checkoutFormState.billingCity;
    checkoutFormState.billingProvince = details.province || checkoutFormState.billingProvince;
    checkoutFormState.billingCountry = details.country || checkoutFormState.billingCountry;
    checkoutFormState.billingAddressOptions = [];
    checkoutFormState.billingAddressApiError = '';
    checkoutFormState.errors = {
      ...checkoutFormState.errors,
      billingSelectedAddress: '',
      billingAddressQuery: '',
      billingPostalCode: '',
      billingCity: '',
      billingProvince: '',
      billingCountry: '',
    };
    registerPlacesSessionToken = new window.google.maps.places.AutocompleteSessionToken();
  } catch (error) {
    checkoutFormState.billingAddressApiError = error?.message || 'Google Places could not load the selected address.';
  }

  checkoutFormState.billingAddressLoading = false;
  renderCheckout();
  attachSharedControls();
  attachCheckoutControls();
}

function money(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function productRoute(id) {
  return `#product-${id}`;
}

function cartRoute() {
  return "#cart";
}

function checkoutRoute() {
  return "#checkout";
}

function getCurrentRoute() {
  const hash = window.location.hash || "";
  if (hash === "#login") {
    return { page: "login" };
  }
  if (hash === "#register") {
    return { page: "register" };
  }
  if (hash === "#cart") {
    return { page: "cart" };
  }
  if (hash === "#checkout") {
    return { page: "checkout" };
  }
  const match = hash.match(/^#product-(\d+)$/);
  if (match) {
    return { page: "product", id: Number(match[1]) };
  }
  return { page: "home" };
}

function productProfile(product) {
  return productProfiles[product.id] || {
    subtitle: product.description,
    ingredients: ["Please review the delivered package label for full ingredient details."],
    storage: "Follow the package label after delivery.",
  };
}

function accountDisplayName(email) {
  const local = String(email || '').split('@')[0].trim();
  if (!local) return 'Member';
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function cartLineItems() {
  return cartState
    .map((entry) => {
      const product = productById(entry.productId);
      if (!product) return null;
      return { ...entry, product, lineTotal: product.price * entry.quantity };
    })
    .filter(Boolean);
}

function cartItemCount() {
  return cartState.reduce((sum, entry) => sum + entry.quantity, 0);
}

function cartSubtotal() {
  return cartLineItems().reduce((sum, entry) => sum + entry.lineTotal, 0);
}

function cartDeliveryFee() {
  const subtotal = cartSubtotal();
  if (!subtotal || subtotal >= 100) return 0;
  return 9;
}

function cartTotal() {
  return cartSubtotal() + cartDeliveryFee();
}

function setCartQuantity(productId, quantity) {
  const nextQty = Math.max(0, quantity);
  cartState = cartState
    .map((entry) => entry.productId === productId ? { ...entry, quantity: nextQty } : entry)
    .filter((entry) => entry.quantity > 0);
}

function addProductToCart(productId, quantity = 1) {
  const existing = cartState.find((entry) => entry.productId === productId);
  if (existing) {
    existing.quantity += quantity;
    cartState = [...cartState];
    return;
  }
  cartState = [...cartState, { productId, quantity }];
}

function userIconMarkup() {
  return '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="6.1" r="3.1"></circle><path d="M3.6 16.4c1.4-2.9 3.7-4.3 6.4-4.3 2.8 0 5.1 1.4 6.4 4.3"></path></svg>';
}

function accountUtilityMarkup() {
  if (!authState.isLoggedIn) {
    return `
      <button class="header-utility-button header-account-button" type="button" data-login-link="true">
        <span class="header-account-icon">${userIconMarkup()}</span>
        <span class="header-account-copy">
          <strong>Login</strong>
          <span>Sign in</span>
        </span>
      </button>
    `;
  }

  return `
    <div class="account-menu-shell${isAccountMenuOpen ? ' is-open' : ''}">
      <button class="header-utility-button header-account-button is-account" type="button" data-account-toggle="true" aria-expanded="${isAccountMenuOpen ? 'true' : 'false'}">
        <span class="header-account-icon">${userIconMarkup()}</span>
        <span class="header-account-copy">
          <strong>My Account</strong>
          <span>${authState.name || 'Member'}</span>
        </span>
      </button>
      ${isAccountMenuOpen ? `
        <div class="account-dropdown">
          <button class="account-dropdown-link" type="button" data-account-action="orders">My Orders</button>
          <button class="account-dropdown-link" type="button" data-account-action="points">My Points</button>
          <button class="account-dropdown-link is-logout" type="button" data-account-action="logout">Logout</button>
        </div>
      ` : ''}
    </div>
  `;
}

function galleryItems(product) {
  const tones = [
    ["#fff6ea", "#ebd0b3"],
    ["#f8efdf", "#dec2a0"],
    ["#eef4ea", "#d8e4d1"],
  ];
  const profile = productProfile(product);
  return [
    {
      title: product.image,
      note: product.badge + " pick",
      start: tones[0][0],
      end: tones[0][1],
    },
    {
      title: product.seller,
      note: profile.subtitle,
      start: tones[1][0],
      end: tones[1][1],
    },
    {
      title: product.delivery,
      note: "Local Calgary route",
      start: tones[2][0],
      end: tones[2][1],
    },
  ];
}


function discountPercent(product) {
  if (!product.compareAtPrice || product.compareAtPrice <= product.price) return null;
  return Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);
}

function stateMeta(state) {
  const map = {
    fresh: {
      icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M14.8 4.2c-3.2.2-5.6 1.6-7.1 4.1-1 1.7-1.3 3.5-1.4 5 .7-.9 1.6-1.7 2.8-2.4 1.9-1.2 4.1-1.9 6.6-2.2-.9 1-2.1 1.9-3.4 2.8-1.7 1.1-3 2.1-4 3.3 1.2.4 2.8.5 4.4 0 3-.9 5.2-3.9 5.2-7.8 0-1-.1-1.9-.4-2.8-.8-.1-1.8-.1-2.7 0Z"/></svg>',
      label: "Fresh"
    },
    frozen: {
      icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.2v15.6M6.2 4.4 10 6.6l3.8-2.2M6.2 15.6 10 13.4l3.8 2.2M3.2 10h13.6M4.4 6.2 6.6 10l-2.2 3.8M15.6 6.2 13.4 10l2.2 3.8"/></svg>',
      label: "Frozen"
    },
    ready: {
      icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3.5v4.2M8.5 3.5v4.2M7.2 7.7v8.8M12.5 3.5c1.4 1.1 2.2 2.5 2.2 4.4 0 1.6-.7 3-1.9 4.1v4.5"/></svg>',
      label: "Ready-to-eat"
    },
  };
  return map[state] || { icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3"/></svg>', label: state };
}

function stateChips(product) {
  return (product.states || []).map((state) => {
    const meta = stateMeta(state);
    return `
      <span class="detail-state-chip is-${state}">
        <span class="detail-state-icon">${meta.icon}</span>
        <span>${meta.label}</span>
      </span>
    `;
  }).join("");
}

function tagChips(product) {
  return (product.tags || []).map((tag) => `<span class="detail-tag-pill">${tag}</span>`).join("");
}

function categoryDropdownMarkup() {
  return `
    <div class="category-dropdown" aria-hidden="true">
      <div class="category-dropdown-panel">
        <div class="category-dropdown-list">
          ${marketplaceCategories
            .map(
              (category) => `
                <div class="category-dropdown-item">
                  <button class="category-dropdown-link" type="button">
                    <strong>${category.label}</strong>
                    <span class="category-dropdown-arrow">›</span>
                  </button>
                  <div class="category-submenu">
                    <p class="category-submenu-title">${category.label}</p>
                    <div class="category-submenu-list">
                      ${category.children.map((child) => `<button class="category-submenu-link" type="button">${child}</button>`).join("")}
                    </div>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function topChrome() {
  return `
    <div class="announcement-bar">
      <div class="announcement-inner">
        <span class="announcement-label">Notice</span>
        <p class="announcement-text">${announcementItems.join("  ·  ")}</p>
        <button class="announcement-link" type="button">KakaoTalk Community</button>
      </div>
    </div>

    <div class="header-main">
      <button class="header-logo-button" type="button" data-home-link="true">
        <img class="header-logo-image" src="./assets/Seoul-Basket-Logo-header-captured.png" alt="Seoul Basket Korean marketplace logo" />
      </button>
      <div class="header-search-shell">
        <input class="header-search-input" type="search" placeholder="Search kimchi, banchan, meal kits, fruit trays..." />
        <button class="header-search-button" type="button">Search</button>
      </div>
      <div class="header-utility">
        ${accountUtilityMarkup()}
        <button class="cart-utility" type="button" data-cart-link="true"><span class="cart-utility-label">Cart</span><strong>${cartItemCount()}</strong></button>
      </div>
    </div>

    <div class="nav-strip-inner">
      <div class="category-nav-shell">
        <button class="category-trigger" type="button"><span class="category-trigger-icon" aria-hidden="true"><span></span><span></span><span></span></span><span>All Categories</span></button>
        ${categoryDropdownMarkup()}
      </div>
      <nav class="market-nav" aria-label="Marketplace sections">
        <a class="market-nav-link is-active" href="#top">Home</a>
        <a class="market-nav-link" href="#quick-categories">Categories</a>
        <a class="market-nav-link" href="#section-new-arrivals">New Arrivals</a>
        <a class="market-nav-link" href="#section-time-deals">Time Deals</a>
        <a class="market-nav-link" href="#section-best-sellers">Best Sellers</a>
        <a class="market-nav-link" href="#section-brand-hall">Brand Hall</a>
      </nav>
    </div>

    <div class="delivery-line-inner">
      <span class="delivery-pill">Delivery Notice</span>
      <p>Calgary / Airdrie / Cochrane delivery available this week · Orders over CA$100 unlock free delivery · Same-day seller updates posted every morning</p>
    </div>
  `;
}


function loginTopChrome() {
  return `
    <div class="login-topbar">
      <button class="header-logo-button" type="button" data-home-link="true">
        <img class="header-logo-image" src="./assets/Seoul-Basket-Logo-header-captured.png" alt="Seoul Basket Korean marketplace logo" />
      </button>
    </div>
  `;
}

function ratingStars(rating) {
  const fullStars = Math.round(Number(rating) || 0);
  return '★'.repeat(Math.max(0, Math.min(5, fullStars))) + '☆'.repeat(Math.max(0, 5 - fullStars));
}

function detailTabContent(product, tab) {
  const profile = productProfile(product);
  if (tab === 'ingredients') {
    return `
      <div class="detail-copy-stack">
        <p>${profile.subtitle}</p>
        <ul class="detail-listing">
          ${profile.ingredients.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  if (tab === 'storage') {
    return `
      <div class="detail-copy-stack">
        <p>${profile.storage}</p>
      </div>
    `;
  }

  return `
    <div class="detail-copy-stack">
      <p>${profile.subtitle}</p>
      <p>${product.description}</p>
      <p>${product.delivery}</p>
    </div>
  `;
}

function relatedProducts(product) {
  return products.filter((item) => item.id !== product.id).slice(0, 5);
}

function cartSummaryItems() {
  return cartLineItems();
}

function availableRedeemPoints() {
  if (!authState.isLoggedIn || authState.points < 2500) return 0;
  return authState.points - (authState.points % 500);
}

function checkoutPointsDiscount() {
  if (!authState.isLoggedIn || !checkoutFormState.redeemEnabled) return 0;
  const allowed = Math.min(checkoutFormState.redeemPoints || 0, availableRedeemPoints());
  return allowed / 500;
}

function checkoutGrandTotal() {
  return Math.max(0, cartSubtotal() + cartDeliveryFee() - checkoutPointsDiscount());
}

function checkoutEstimatedEarnPoints() {
  return Math.max(0, Math.floor(checkoutGrandTotal()));
}

function productCard(product, options = {}) {
  const discount = discountPercent(product);
  return `
    <article class="market-product-card" data-product-id="${product.id}" ${options.forceReload ? 'data-product-reload="true"' : ''} tabindex="0" role="link">
      <div class="market-product-media">
        <div class="market-product-media-top">
          <span class="market-product-discount">${product.badge}</span>
          ${discount ? `<span class="market-product-discount">Save ${discount}%</span>` : ''}
        </div>
        <strong class="market-product-media-title">${product.image}</strong>
        <span class="market-product-media-note">${product.delivery}</span>
      </div>
      <p class="market-product-seller">${product.seller}</p>
      <h3 class="market-product-name">${product.name}</h3>
      <p class="market-product-description">${product.description}</p>
      <div class="market-product-meta">
        <span>${ratingStars(product.rating)}</span>
        <span>${product.reviews} reviews</span>
      </div>
      <div class="market-product-footer">
        <div class="market-product-price-stack">
          <strong class="market-product-price">${money(product.price)}</strong>
          ${product.compareAtPrice ? `<span class="market-product-compare-price">${money(product.compareAtPrice)}</span>` : ''}
        </div>
        <button class="button-secondary market-product-action" type="button" data-product-id="${product.id}" ${options.forceReload ? 'data-product-reload="true"' : ''}>View</button>
      </div>
    </article>
  `;
}

function heroMarkup() {
  const slide = heroSlides[activeSlide];
  return `
    <section class="hero-carousel">
      <div class="hero-banner-shell">
        <img class="hero-banner-image" src="${slide.image}" alt="${slide.alt}" />
        <button class="slider-arrow slider-arrow-prev" type="button" data-slide="prev" aria-label="Previous slide">Prev</button>
        <button class="slider-arrow slider-arrow-next" type="button" data-slide="next" aria-label="Next slide">Next</button>
        <div class="hero-controls-bar">
          <div class="slider-dots">
            ${heroSlides.map((_, index) => `<button class="slider-dot${index === activeSlide ? ' is-active' : ''}" type="button" data-slide-to="${index}" aria-label="Go to slide ${index + 1}"></button>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function quickMenuMarkup() {
  return `
    <section class="home-section quick-menu-section" id="quick-categories">
      <div class="section-header-row">
        <div class="section-header-copy">
          <p class="section-kicker">Quick categories</p>
          <h2 class="section-title">Shop by category</h2>
        </div>
      </div>
      <div class="quick-menu-grid">
        ${quickCategories.map((category) => `
          <button class="quick-category-button is-${category.tone}" type="button">
            <span class="quick-category-thumb">${category.shortLabel}</span>
            <span class="quick-category-label">${category.label}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function sectionMarkup(key, eyebrow, title) {
  return `
    <section class="home-section" id="section-${key === 'featured' ? 'vans-pick' : key === 'best' ? 'best-sellers' : key === 'new' ? 'new-arrivals' : 'time-deals'}">
      <div class="section-header-row">
        <div class="section-header-copy">
          <p class="section-kicker">${eyebrow}</p>
          <h2 class="section-title">${title}</h2>
        </div>
      </div>
      <div class="market-product-grid">
        ${sectionProducts[key].map((id) => productCard(productById(id))).join('')}
      </div>
    </section>
  `;
}

function promoBannerMarkup() {
  return `
    <section class="promo-banner">
      <div class="promo-banner-text">
        <p class="section-kicker">Community perks</p>
        <h2 class="section-title">Join KakaoTalk updates and member rewards</h2>
        <p>Get weekly flyer updates, delivery route notices, and seller-only bonus point events for Calgary shoppers.</p>
        <div class="promo-banner-actions">
          <button class="button-primary" type="button">Join Community</button>
          <button class="button-secondary" type="button">See Rewards</button>
        </div>
      </div>
      <div class="promo-qr-card">
        <div class="qr-placeholder">QR</div>
        <strong>KakaoTalk / Rewards</strong>
        <p>Scan later placeholder for community and point events.</p>
      </div>
    </section>
  `;
}

function brandHallMarkup() {
  return `
    <section class="home-section brand-hall-section" id="section-brand-hall">
      <div class="section-header-row">
        <div class="section-header-copy">
          <p class="section-kicker">Brand hall</p>
          <h2 class="section-title">Trusted Calgary sellers</h2>
        </div>
      </div>
      <div class="brand-hall-grid">
        ${brandHallItems.map((brand) => `
          <article class="brand-hall-card">
            <h3>${brand.name}</h3>
            <p>${brand.focus}</p>
            <span class="brand-hall-eta">${brand.eta}</span>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function footerMarkup() {
  return `
    <footer class="footer-preview">
      <div class="footer-brand">
        <p class="section-kicker">Seoul Basket</p>
        <h3>Korean grocery and lifestyle marketplace for Calgary</h3>
        <p>Order weekly Korean groceries, prepared meals, pantry staples, and trusted local delivery picks in one place.</p>
      </div>
      <div class="footer-columns">
        <div>
          <strong>Shop</strong>
          <a href="#quick-categories">Categories</a>
          <a href="#section-best-sellers">Best Sellers</a>
          <a href="#section-new-arrivals">New Arrivals</a>
        </div>
        <div>
          <strong>Support</strong>
          <a href="#">Delivery notice</a>
          <a href="#">Customer care</a>
          <a href="#">Order help</a>
        </div>
        <div>
          <strong>Follow</strong>
          <a href="#">Instagram</a>
          <a href="#">KakaoTalk</a>
          <a href="#">Community</a>
        </div>
      </div>
    </footer>
  `;
}

function homeMarkup() {
  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${topChrome()}
        <main class="content-shell">
          <div class="home-stack">
            ${heroMarkup()}
            ${quickMenuMarkup()}
            ${sectionMarkup('featured', "Van's Pick", "Van's Pick")}
            ${promoBannerMarkup()}
            ${sectionMarkup('best', 'Best sellers', 'Best Sellers')}
            ${sectionMarkup('new', 'New arrivals', 'New Arrivals')}
            ${sectionMarkup('deals', 'Time deals', 'Time Deals')}
            ${brandHallMarkup()}
            ${footerMarkup()}
          </div>
        </main>
      </div>
    </div>
  `;
}

function validateLoginForm() {
  const errors = {};
  const email = loginFormState.email.trim();
  const password = loginFormState.password;

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!password) {
    errors.password = 'Please enter your password.';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  return errors;
}

function validateRegisterForm() {
  const errors = {};
  const email = registerFormState.email.trim();
  const postalCode = registerFormState.postalCode.trim().toUpperCase();

  if (!registerFormState.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!registerFormState.addressQuery.trim()) {
    errors.addressQuery = 'Please search for your address.';
  }
  if (!registerFormState.selectedAddress) {
    errors.selectedAddress = 'Select an address from the suggestions.';
  }
  if (!postalCode) {
    errors.postalCode = 'Postal Code is required.';
  } else if (!/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/.test(postalCode)) {
    errors.postalCode = 'Enter a valid Canadian postal code.';
  }
  if (!registerFormState.password) {
    errors.password = 'Please enter your password.';
  } else if (registerFormState.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }
  if (!registerFormState.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (registerFormState.password !== registerFormState.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }
  if (!registerFormState.requiredConsent) {
    errors.requiredConsent = 'You must agree to the Terms of Service and Privacy Policy.';
  }
  return errors;
}

function loginMarkup() {
  const errors = loginFormState.errors || {};
  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="login-centered-shell">
            <article class="login-card login-card-single">
              <div class="auth-card-header auth-card-header-center">
                <p class="section-kicker">Seoul Basket account</p>
                <h2>Welcome Back</h2>
                <p class="auth-subcopy">Login to continue shopping</p>
              </div>
              ${loginFormState.banner ? `<p class="auth-banner auth-banner-error">${loginFormState.banner}</p>` : ''}
              <form class="login-form" data-login-form="true" novalidate>
                <div class="auth-field-group">
                  <label class="form-field${errors.email ? ' is-invalid' : ''}">
                    <span>Email</span>
                    <input name="email" type="email" autocomplete="email" placeholder="you@example.com" value="${loginFormState.email}" />
                    ${errors.email ? `<small class="field-error">${errors.email}</small>` : ''}
                  </label>
                  <label class="form-field${errors.password ? ' is-invalid' : ''}">
                    <span>Password</span>
                    <input name="password" type="password" autocomplete="current-password" placeholder="Enter your password" value="${loginFormState.password}" />
                    ${errors.password ? `<small class="field-error">${errors.password}</small>` : ''}
                  </label>
                </div>
                <button class="button-primary auth-submit" type="submit">Login</button>
              </form>
              <div class="login-links login-links-auth">
                <a class="text-link" href="#">Forgot password?</a>
                <button class="text-link text-link-button" type="button" data-register-link="true">Create account</button>
              </div>
              <div class="auth-divider"><span>or</span></div>
              <div class="auth-social-grid">
                <button class="auth-social-button" type="button">Google</button>
                <button class="auth-social-button" type="button">Apple</button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  `;
}

function registerMarkup() {
  const errors = registerFormState.errors || {};
  const suggestions = registerFormState.addressOptions || [];
  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="login-centered-shell">
            <article class="login-card register-card-single">
              <div class="auth-card-header auth-card-header-center">
                <p class="section-kicker">Seoul Basket account</p>
                <h2>Create Account</h2>
                <p class="auth-subcopy">Join Seoul Basket today</p>
              </div>
              ${registerFormState.banner ? `<p class="auth-banner ${Object.keys(errors).length ? 'auth-banner-error' : ''}">${registerFormState.banner}</p>` : ''}
              <form class="login-form" data-register-form="true" novalidate>
                <div class="auth-field-group">
                  <label class="form-field${errors.name ? ' is-invalid' : ''}">
                    <span>Name</span>
                    <input name="name" type="text" autocomplete="name" placeholder="Your full name" value="${registerFormState.name}" />
                    ${errors.name ? `<small class="field-error">${errors.name}</small>` : ''}
                  </label>
                  <label class="form-field${errors.email ? ' is-invalid' : ''}">
                    <span>Email</span>
                    <input name="email" type="email" autocomplete="email" placeholder="you@example.com" value="${registerFormState.email}" />
                    ${errors.email ? `<small class="field-error">${errors.email}</small>` : ''}
                  </label>
                  <label class="form-field form-field-address${errors.addressQuery || errors.selectedAddress || registerFormState.addressApiError ? ' is-invalid' : ''}">
                    <span>Address</span>
                    <input name="addressQuery" type="text" autocomplete="address-line1" placeholder="Enter street number or address" value="${registerFormState.addressQuery}" />
                    <div id="places-service-anchor" class="places-attribution-anchor" aria-hidden="true"></div>
                    ${errors.addressQuery ? `<small class="field-error">${errors.addressQuery}</small>` : ''}
                    ${registerFormState.addressLoading ? `<small class="field-hint">Searching addresses...</small>` : ''}
                    ${suggestions.length ? `
                      <div class="address-results">
                        ${suggestions.map((item) => `<button class="address-option" type="button" data-address-option="${item.placeId}"><strong>${item.mainText}</strong><span>${item.secondaryText}</span></button>`).join('')}
                      </div>
                    ` : registerFormState.addressQuery.trim().length > 0 && !registerFormState.selectedAddress && !registerFormState.addressLoading && !registerFormState.addressApiError ? `<small class="field-hint">No matching address results yet. Try adding more street number or nearby address context.</small>` : ''}
                    ${registerFormState.selectedAddress ? `
                      <div class="selected-address-card">
                        <span class="selected-address-label">Selected Address</span>
                        <strong>${registerFormState.selectedAddress}</strong>
                      </div>
                    ` : ''}
                    ${errors.selectedAddress ? `<small class="field-error">${errors.selectedAddress}</small>` : ''}
                    ${registerFormState.addressApiError ? `<small class="field-error">${registerFormState.addressApiError}</small>` : ''}
                  </label>
                  <label class="form-field">
                    <span>Address2 (Optional)</span>
                    <input name="addressLine2" type="text" autocomplete="address-line2" placeholder="Apt, Unit, or Suite number" value="${registerFormState.addressLine2}" />
                  </label>
                  <label class="form-field${errors.postalCode ? ' is-invalid' : ''}">
                    <span>Postal Code</span>
                    <input name="postalCode" type="text" autocomplete="postal-code" placeholder="T2N 1N4" value="${registerFormState.postalCode}" />
                    ${errors.postalCode ? `<small class="field-error">${errors.postalCode}</small>` : ''}
                  </label>
                  <label class="form-field${errors.password ? ' is-invalid' : ''}">
                    <span>Password</span>
                    <input name="password" type="password" autocomplete="new-password" placeholder="Create a password" value="${registerFormState.password}" />
                    ${errors.password ? `<small class="field-error">${errors.password}</small>` : ''}
                  </label>
                  <label class="form-field${errors.confirmPassword ? ' is-invalid' : ''}">
                    <span>Confirm password</span>
                    <input name="confirmPassword" type="password" autocomplete="new-password" placeholder="Confirm your password" value="${registerFormState.confirmPassword}" />
                    ${errors.confirmPassword ? `<small class="field-error">${errors.confirmPassword}</small>` : ''}
                  </label>
                  <label class="terms-check${errors.requiredConsent ? ' is-invalid' : ''}">
                    <input name="requiredConsent" type="checkbox" ${registerFormState.requiredConsent ? 'checked' : ''} />
                    <span><span class="consent-label consent-label-required">Required</span>I agree to the Terms of Service and Privacy Policy.</span>
                  </label>
                  ${errors.requiredConsent ? `<small class="field-error">${errors.requiredConsent}</small>` : ''}
                  <label class="terms-check">
                    <input name="marketingConsent" type="checkbox" ${registerFormState.marketingConsent ? 'checked' : ''} />
                    <span><span class="consent-label consent-label-optional">Optional</span>I agree to receive marketing emails from Seoul Basket, including promotions, product updates, and special offers. I understand that I can unsubscribe at any time.</span>
                  </label>
                </div>
                <button class="button-primary auth-submit" type="submit">Create Account</button>
              </form>
              <div class="login-links login-links-centered">
                <span>Already have an account?</span>
                <button class="text-link text-link-button" type="button" data-login-link="true">Login</button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  `;
}

function cartItemMarkup(entry) {
  const { product, quantity, lineTotal } = entry;
  return `
    <article class="cart-item-card" data-cart-item="${product.id}">
      <div class="cart-item-media">
        <span class="cart-item-badge">${product.badge}</span>
        <strong>${product.image}</strong>
        <span>${product.delivery}</span>
      </div>
      <div class="cart-item-copy">
        <p class="cart-item-seller">${product.seller}</p>
        <h2 class="cart-item-title">${product.name}</h2>
        <p class="cart-item-description">${product.description}</p>
        <button class="cart-remove-button" type="button" data-cart-remove="${product.id}">Remove</button>
      </div>
      <div class="cart-item-meta">
        <strong class="cart-item-price">${money(product.price)}</strong>
        <div class="quantity-selector cart-quantity-selector" aria-label="Quantity selector">
          <button class="quantity-button" type="button" data-cart-qty="minus" data-cart-product="${product.id}" aria-label="Decrease quantity">-</button>
          <strong class="quantity-value">${quantity}</strong>
          <button class="quantity-button" type="button" data-cart-qty="plus" data-cart-product="${product.id}" aria-label="Increase quantity">+</button>
        </div>
        <strong class="cart-line-total">${money(lineTotal)}</strong>
      </div>
    </article>
  `;
}

function cartMarkup() {
  const items = cartLineItems();
  const subtotal = cartSubtotal();
  const deliveryFee = cartDeliveryFee();
  const total = cartTotal();
  const freeDeliveryGap = Math.max(0, 100 - subtotal);
  const freeDeliveryReached = subtotal >= 100;

  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${topChrome()}
        <main class="content-shell">
          <div class="cart-stack">
            <section class="detail-breadcrumbs">
              <button class="detail-back-link" type="button" data-home-link="true">Home</button>
              <span>/</span>
              <span>Cart</span>
            </section>

            <section class="cart-shell">
              <div class="cart-grid">
                <div class="cart-list-panel">
                  <div class="section-header-row cart-header-row">
                    <div class="section-header-copy">
                      <p class="section-kicker">Your basket</p>
                      <h1 class="section-title">Cart</h1>
                    </div>
                    <span class="cart-count-pill">${cartItemCount()} items</span>
                  </div>
                  ${items.length ? `
                    <div class="cart-items-list">
                      ${items.map((entry) => cartItemMarkup(entry)).join("")}
                    </div>
                  ` : `
                    <div class="cart-empty-state">
                      <strong>Your cart is empty.</strong>
                      <p>Add Korean groceries, meal kits, and weekly essentials to start checkout.</p>
                      <button class="button-secondary" type="button" data-home-link="true">Continue Shopping</button>
                    </div>
                  `}
                </div>

                <aside class="cart-summary-panel">
                  <p class="section-kicker">Order summary</p>
                  <div class="cart-summary-rows">
                    <div class="cart-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
                    <div class="cart-summary-row"><span>Delivery fee</span><strong>${deliveryFee ? money(deliveryFee) : 'Free'}</strong></div>
                    <div class="cart-summary-note${freeDeliveryReached ? ' is-free' : ''}">
                      <strong>Free delivery over $100</strong>
                      <span>${freeDeliveryReached ? 'You unlocked free delivery for this order.' : `${money(freeDeliveryGap)} away from free delivery.`}</span>
                    </div>
                    <div class="cart-summary-row cart-summary-total"><span>Total</span><strong>${money(total)}</strong></div>
                  </div>
                  <div class="cart-summary-actions">
                    <button class="button-secondary cart-secondary-action" type="button" data-home-link="true">Continue Shopping</button>
                    <button class="button-primary cart-primary-action" type="button" data-cart-checkout="true">Proceed to Checkout</button>
                  </div>
                </aside>
              </div>
            </section>

            ${footerMarkup()}
          </div>
        </main>
        <div class="sticky-mobile-cart cart-sticky-checkout">
          <div class="sticky-mobile-cart-copy">
            <strong>${money(total)}</strong>
            <span>${freeDeliveryReached ? 'Free delivery applied' : `${money(freeDeliveryGap)} away from free delivery`}</span>
          </div>
          <button class="button-primary sticky-mobile-cart-button" type="button" data-cart-checkout="true">Checkout</button>
        </div>
      </div>
    </div>
  `;
}

function validateCheckoutForm() {
  const errors = {};
  const name = checkoutFormState.name.trim();
  const phone = checkoutFormState.phone.trim();
  const addressQuery = checkoutFormState.addressQuery.trim();
  const postalCode = checkoutFormState.postalCode.trim().toUpperCase();
  const shippingCity = checkoutFormState.shippingCity.trim();
  const shippingProvince = checkoutFormState.shippingProvince.trim();
  const deliveryDate = checkoutFormState.deliveryDate.trim();
  const cardName = checkoutFormState.cardName.trim();
  const cardNumberDigits = checkoutFormState.cardNumber.replace(/\D+/g, '');
  const expiryDate = checkoutFormState.expiryDate.trim();
  const cvc = checkoutFormState.cvc.trim();

  if (!name) {
    errors.name = "Please enter the recipient name.";
  }

  if (!phone) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+()\-\s]{10,}$/.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!addressQuery) {
    errors.addressQuery = "Please search for your address.";
  }

  if (!checkoutFormState.selectedAddress) {
    errors.selectedAddress = "Select an address from the suggestions.";
  }

  if (!postalCode) {
    errors.postalCode = "Postal Code is required.";
  } else if (!/^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/.test(postalCode)) {
    errors.postalCode = "Enter a valid Canadian postal code.";
  }

  if (!shippingCity) {
    errors.shippingCity = "City is required.";
  }

  if (!shippingProvince) {
    errors.shippingProvince = "Province is required.";
  }

  if (!deliveryDate) {
    errors.deliveryDate = "Please select a delivery date.";
  }

  if (!cardName) {
    errors.cardName = "Please enter the cardholder name.";
  }

  if (cardNumberDigits.length < 16) {
    errors.cardNumber = "Enter a valid card number.";
  }

  if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
    errors.expiryDate = "Enter expiry as MM/YY.";
  }

  if (cvc.length < 3) {
    errors.cvc = "Enter a valid CVC.";
  }

  if (!checkoutFormState.useShippingAsBillingAddress) {
    const billingAddressQuery = checkoutFormState.billingAddressQuery.trim();
    const billingPostalCode = checkoutFormState.billingPostalCode.trim().toUpperCase();
    const billingCity = checkoutFormState.billingCity.trim();
    const billingProvince = checkoutFormState.billingProvince.trim();
    const billingCountry = checkoutFormState.billingCountry.trim();

    if (!billingAddressQuery) {
      errors.billingAddressQuery = "Please search for the billing address.";
    }

    if (!checkoutFormState.billingSelectedAddress) {
      errors.billingSelectedAddress = "Select a billing address from the suggestions.";
    }

    if (!billingPostalCode) {
      errors.billingPostalCode = "Postal Code is required.";
    }

    if (!billingCity) {
      errors.billingCity = "City is required.";
    }

    if (!billingProvince) {
      errors.billingProvince = "Province is required.";
    }

    if (!billingCountry) {
      errors.billingCountry = "Country / Region is required.";
    }
  }

  return errors;
}

function checkoutMarkup() {
  const items = cartSummaryItems();
  const subtotal = cartSubtotal();
  const deliveryFee = cartDeliveryFee(subtotal);
  const pointsDiscount = checkoutPointsDiscount();
  const total = checkoutGrandTotal();
  const estimatedEarnPoints = checkoutEstimatedEarnPoints();
  const redeemablePoints = availableRedeemPoints();
  const suggestions = checkoutFormState.addressOptions || [];
  const billingSuggestions = checkoutFormState.billingAddressOptions || [];
  const errors = checkoutFormState.errors || {};
  const buttonLabel = checkoutFormState.isSubmitting ? "Placing Order..." : "Place Order";
  const redeemOptions = Array.from({ length: Math.max(0, redeemablePoints / 500) }, (_, index) => {
    const value = (index + 1) * 500;
    return `<option value="${value}" ${checkoutFormState.redeemPoints === value ? "selected" : ""}>${value}P (-${money(value / 500)})</option>`;
  }).join("");
  const provinceOptions = canadianProvinces.map((province) => `<option value="${province}" ${checkoutFormState.shippingProvince === province ? "selected" : ""}>${province}</option>`).join("");
  const billingProvinceOptions = canadianProvinces.map((province) => `<option value="${province}" ${checkoutFormState.billingProvince === province ? "selected" : ""}>${province}</option>`).join("");
  const countryOptions = countryRegions.map((country) => `<option value="${country}" ${checkoutFormState.billingCountry === country ? "selected" : ""}>${country}</option>`).join("");
  const addressSearchIcon = `
    <span class="address-search-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="6"></circle>
        <path d="M20 20l-4.2-4.2"></path>
      </svg>
    </span>
  `;

  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="checkout-centered-shell">
            <div class="checkout-card-shell">
              <section class="detail-breadcrumbs">
                <button class="detail-back-link" type="button" data-cart-link="true">Cart</button>
                <span>/</span>
                <span>Checkout</span>
              </section>

              <section class="checkout-shell">
                <div class="checkout-grid">
                  <div class="checkout-form-panel">
                    <div class="section-header-row checkout-header-row">
                      <div class="section-header-copy">
                        <p class="section-kicker">Checkout</p>
                        <h1 class="section-title">Secure delivery and payment</h1>
                      </div>
                    </div>
                    ${checkoutFormState.banner ? `<p class="auth-banner ${checkoutFormState.isSubmitting ? "auth-banner-success" : "auth-banner-error"}">${checkoutFormState.banner}</p>` : ""}
                    <form class="checkout-form" data-checkout-form="true" novalidate>
                      <section class="checkout-section-card">
                        <div class="checkout-section-head">
                          <h2>Shipping information</h2>
                          <p>Enter the delivery details for your Seoul Basket order.</p>
                        </div>
                        <div class="checkout-field-grid">
                          <label class="form-field${errors.name ? " is-invalid" : ""}">
                            <span>Name</span>
                            <input name="name" type="text" autocomplete="shipping name" value="${checkoutFormState.name}" placeholder="Full name" />
                            ${errors.name ? `<small class="field-error">${errors.name}</small>` : ""}
                          </label>
                          <label class="form-field${errors.phone ? " is-invalid" : ""}">
                            <span>Phone</span>
                            <input name="phone" type="tel" autocomplete="tel" value="${checkoutFormState.phone}" placeholder="403 555 0123" />
                            ${errors.phone ? `<small class="field-error">${errors.phone}</small>` : ""}
                          </label>
                          <label class="form-field form-field-address form-field-full${errors.addressQuery || errors.selectedAddress || checkoutFormState.addressApiError ? " is-invalid" : ""}">
                            <span>Address</span>
                            <div class="address-input-shell">
                              <input name="addressQuery" type="text" autocomplete="address-line1" placeholder="Enter your Street Number and address" value="${checkoutFormState.addressQuery}" />
                              ${addressSearchIcon}
                            </div>
                            <div id="places-service-anchor" class="places-attribution-anchor" aria-hidden="true"></div>
                            ${errors.addressQuery ? `<small class="field-error">${errors.addressQuery}</small>` : ""}
                            ${checkoutFormState.addressLoading ? `<small class="field-hint">Searching addresses...</small>` : ""}
                            ${suggestions.length ? `
                              <div class="address-results">
                                ${suggestions.map((item) => `<button class="address-option" type="button" data-checkout-address-option="${item.placeId}"><strong>${item.mainText}</strong><span>${item.secondaryText}</span></button>`).join("")}
                              </div>
                            ` : checkoutFormState.addressQuery.trim().length > 0 && !checkoutFormState.selectedAddress && !checkoutFormState.addressLoading && !checkoutFormState.addressApiError ? `<small class="field-hint">No matching address results yet. Try adding more street number or nearby address context.</small>` : ""}
                            ${checkoutFormState.selectedAddress ? `
                              <div class="selected-address-card">
                                <span class="selected-address-label">Selected Address</span>
                                <strong>${checkoutFormState.selectedAddress}</strong>
                              </div>
                            ` : ""}
                            ${errors.selectedAddress ? `<small class="field-error">${errors.selectedAddress}</small>` : ""}
                            ${checkoutFormState.addressApiError ? `<small class="field-error">${checkoutFormState.addressApiError}</small>` : ""}
                          </label>
                          <label class="form-field">
                            <span>Address 2 (Optional)</span>
                            <input name="addressLine2" type="text" autocomplete="address-line2" placeholder="Apt, Unit, or Suite number" value="${checkoutFormState.addressLine2}" />
                          </label>
                          <label class="form-field${errors.postalCode ? " is-invalid" : ""}">
                            <span>Postal Code</span>
                            <input name="postalCode" type="text" autocomplete="shipping postal-code" value="${checkoutFormState.postalCode}" placeholder="T2N 1N4" />
                            ${errors.postalCode ? `<small class="field-error">${errors.postalCode}</small>` : ""}
                          </label>
                          <label class="form-field${errors.shippingCity ? " is-invalid" : ""}">
                            <span>City</span>
                            <input name="shippingCity" type="text" autocomplete="address-level2" value="${checkoutFormState.shippingCity}" placeholder="Calgary" />
                            ${errors.shippingCity ? `<small class="field-error">${errors.shippingCity}</small>` : ""}
                          </label>
                          <label class="form-field${errors.shippingProvince ? " is-invalid" : ""}">
                            <span>Province</span>
                            <select name="shippingProvince">
                              <option value="">Select province</option>
                              ${provinceOptions}
                            </select>
                            ${errors.shippingProvince ? `<small class="field-error">${errors.shippingProvince}</small>` : ""}
                          </label>
                          <label class="form-field form-field-full${errors.deliveryDate ? " is-invalid" : ""}">
                            <span>Delivery date</span>
                            <select name="deliveryDate">
                              ${checkoutDeliverySlots.map((slot) => `<option value="${slot}" ${checkoutFormState.deliveryDate === slot ? "selected" : ""}>${slot}</option>`).join("")}
                            </select>
                            ${errors.deliveryDate ? `<small class="field-error">${errors.deliveryDate}</small>` : `<small class="field-hint">Available dates are based on the current Calgary route schedule.</small>`}
                          </label>
                        </div>
                      </section>

                      <section class="checkout-section-card">
                        <div class="checkout-section-head">
                          <h2>Secure Payment</h2>
                        </div>
                        <label class="form-field${errors.cardName ? " is-invalid" : ""}">
                          <span>Cardholder name</span>
                          <input name="cardName" type="text" autocomplete="cc-name" value="${checkoutFormState.cardName}" placeholder="Name on card" />
                          ${errors.cardName ? `<small class="field-error">${errors.cardName}</small>` : ""}
                        </label>
                        <div class="checkout-card-fields">
                          <label class="form-field form-field-full${errors.cardNumber ? " is-invalid" : ""}">
                            <span>Card number</span>
                            <input name="cardNumber" type="text" inputmode="numeric" autocomplete="cc-number" value="${checkoutFormState.cardNumber}" placeholder="1234-5678-9012-3456" />
                            ${errors.cardNumber ? `<small class="field-error">${errors.cardNumber}</small>` : ""}
                          </label>
                          <label class="form-field${errors.expiryDate ? " is-invalid" : ""}">
                            <span>Expiry date</span>
                            <input name="expiryDate" type="text" inputmode="numeric" autocomplete="cc-exp" value="${checkoutFormState.expiryDate}" placeholder="MM/YY" />
                            ${errors.expiryDate ? `<small class="field-error">${errors.expiryDate}</small>` : ""}
                          </label>
                          <label class="form-field${errors.cvc ? " is-invalid" : ""}">
                            <span>CVC</span>
                            <input name="cvc" type="text" inputmode="numeric" autocomplete="cc-csc" value="${checkoutFormState.cvc}" placeholder="CVC" />
                            ${errors.cvc ? `<small class="field-error">${errors.cvc}</small>` : ""}
                          </label>
                        </div>
                        <div class="checkout-wallet-row">
                          <button class="checkout-wallet-button" type="button">Apple Pay</button>
                          <button class="checkout-wallet-button" type="button">Google Pay</button>
                        </div>
                        <label class="checkout-toggle-row">
                          <input name="useShippingAsBillingAddress" type="checkbox" ${checkoutFormState.useShippingAsBillingAddress ? "checked" : ""} />
                          <span>Use shipping address as billing address</span>
                        </label>
                        ${checkoutFormState.useShippingAsBillingAddress ? "" : `
                          <div class="checkout-billing-shell">
                            <div class="checkout-section-head">
                              <h2>Billing address</h2>
                              <p>Enter the billing address used for your card payment.</p>
                            </div>
                            <div class="checkout-field-grid">
                              <label class="form-field form-field-address form-field-full${errors.billingAddressQuery || errors.billingSelectedAddress || checkoutFormState.billingAddressApiError ? " is-invalid" : ""}">
                                <span>Billing Address</span>
                                <div class="address-input-shell">
                                  <input name="billingAddressQuery" type="text" autocomplete="billing address-line1" placeholder="Enter your Street Number and address" value="${checkoutFormState.billingAddressQuery}" />
                                  ${addressSearchIcon}
                                </div>
                                <div id="places-service-anchor-billing" class="places-attribution-anchor" aria-hidden="true"></div>
                                ${errors.billingAddressQuery ? `<small class="field-error">${errors.billingAddressQuery}</small>` : ""}
                                ${checkoutFormState.billingAddressLoading ? `<small class="field-hint">Searching addresses...</small>` : ""}
                                ${billingSuggestions.length ? `
                                  <div class="address-results">
                                    ${billingSuggestions.map((item) => `<button class="address-option" type="button" data-billing-address-option="${item.placeId}"><strong>${item.mainText}</strong><span>${item.secondaryText}</span></button>`).join("")}
                                  </div>
                                ` : checkoutFormState.billingAddressQuery.trim().length > 0 && !checkoutFormState.billingSelectedAddress && !checkoutFormState.billingAddressLoading && !checkoutFormState.billingAddressApiError ? `<small class="field-hint">No matching billing address results yet. Try adding more street number or nearby address context.</small>` : ""}
                                ${checkoutFormState.billingSelectedAddress ? `
                                  <div class="selected-address-card">
                                    <span class="selected-address-label">Selected Billing Address</span>
                                    <strong>${checkoutFormState.billingSelectedAddress}</strong>
                                  </div>
                                ` : ""}
                                ${errors.billingSelectedAddress ? `<small class="field-error">${errors.billingSelectedAddress}</small>` : ""}
                                ${checkoutFormState.billingAddressApiError ? `<small class="field-error">${checkoutFormState.billingAddressApiError}</small>` : ""}
                              </label>
                              <label class="form-field">
                                <span>Address 2 (Optional)</span>
                                <input name="billingAddressLine2" type="text" autocomplete="billing address-line2" placeholder="Apt, Unit, or Suite number" value="${checkoutFormState.billingAddressLine2}" />
                              </label>
                              <label class="form-field${errors.billingPostalCode ? " is-invalid" : ""}">
                                <span>Postal Code</span>
                                <input name="billingPostalCode" type="text" autocomplete="billing postal-code" value="${checkoutFormState.billingPostalCode}" placeholder="T2N 1N4" />
                                ${errors.billingPostalCode ? `<small class="field-error">${errors.billingPostalCode}</small>` : ""}
                              </label>
                              <label class="form-field${errors.billingCity ? " is-invalid" : ""}">
                                <span>City</span>
                                <input name="billingCity" type="text" autocomplete="billing address-level2" value="${checkoutFormState.billingCity}" placeholder="Calgary" />
                                ${errors.billingCity ? `<small class="field-error">${errors.billingCity}</small>` : ""}
                              </label>
                              <label class="form-field${errors.billingProvince ? " is-invalid" : ""}">
                                <span>Province</span>
                                <select name="billingProvince">
                                  <option value="">Select province</option>
                                  ${billingProvinceOptions}
                                </select>
                                ${errors.billingProvince ? `<small class="field-error">${errors.billingProvince}</small>` : ""}
                              </label>
                              <label class="form-field form-field-full${errors.billingCountry ? " is-invalid" : ""}">
                                <span>Country / Region</span>
                                <select name="billingCountry">
                                  ${countryOptions}
                                </select>
                                ${errors.billingCountry ? `<small class="field-error">${errors.billingCountry}</small>` : ""}
                              </label>
                            </div>
                          </div>
                        `}
                      </section>
                    </form>
                  </div>

                  <aside class="checkout-summary-panel">
                    <p class="section-kicker">Order summary</p>
                    <div class="checkout-summary-list">
                      ${items.map((entry) => `
                        <div class="checkout-summary-item">
                          <div>
                            <strong>${entry.product.name}</strong>
                            <span>${entry.quantity} x ${money(entry.product.price)}</span>
                          </div>
                          <strong>${money(entry.lineTotal)}</strong>
                        </div>
                      `).join("")}
                    </div>
                    ${authState.isLoggedIn ? `
                      <div class="checkout-points-card">
                        <div class="checkout-points-head">
                          <strong>Seoul Points</strong>
                          <span>${authState.points.toLocaleString()}P available</span>
                        </div>
                        <p class="checkout-points-copy">Estimated after this order: <strong>${estimatedEarnPoints.toLocaleString()}P</strong></p>
                        ${redeemablePoints >= 2500 ? `
                          <label class="checkout-redeem-toggle">
                            <input type="checkbox" name="redeemEnabled" ${checkoutFormState.redeemEnabled ? "checked" : ""} />
                            <span>Redeem points at 500P = $1</span>
                          </label>
                          <label class="form-field${checkoutFormState.redeemEnabled ? "" : " checkout-field-disabled"}">
                            <span>Redeem amount</span>
                            <select name="redeemPoints" ${checkoutFormState.redeemEnabled ? "" : "disabled"}>
                              ${redeemOptions}
                            </select>
                          </label>
                        ` : `<p class="checkout-points-copy">Redeem starts at 2,500P.</p>`}
                      </div>
                    ` : ""}
                    <div class="cart-summary-rows checkout-summary-rows">
                      <div class="cart-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
                      <div class="cart-summary-row"><span>Delivery fee</span><strong>${deliveryFee ? money(deliveryFee) : "Free"}</strong></div>
                      <div class="cart-summary-row"><span>Discount / points</span><strong>${pointsDiscount ? `-${money(pointsDiscount)}` : money(0)}</strong></div>
                      <div class="cart-summary-row cart-summary-total"><span>Total</span><strong>${money(total)}</strong></div>
                    </div>
                    <button class="button-primary cart-primary-action checkout-place-order" type="button" data-place-order="true" ${checkoutFormState.isSubmitting ? "disabled" : ""}>${buttonLabel}</button>
                  </aside>
                </div>
              </section>
            </div>
          </section>
        </main>
        <div class="sticky-mobile-cart checkout-sticky-bar">
          <div class="sticky-mobile-cart-copy">
            <strong>${money(total)}</strong>
            <span>${authState.isLoggedIn ? `${estimatedEarnPoints.toLocaleString()}P after purchase` : "Secure payment and scheduled delivery"}</span>
          </div>
          <button class="sticky-mobile-cart-button" type="button" data-place-order="true" ${checkoutFormState.isSubmitting ? "disabled" : ""}>${buttonLabel}</button>
        </div>
      </div>
    </div>
  `;
}

function productDetailMarkup(product) {
  const profile = productProfile(product);
  const galleries = galleryItems(product);
  const activeGallery = galleries[currentDetailImage] || galleries[0];

  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${topChrome()}
        <main class="content-shell">
          <div class="detail-stack">
            <div class="page-focus-anchor" id="product-page-start" tabindex="-1" aria-hidden="true"></div>
            <section class="detail-breadcrumbs">
              <button class="detail-back-link" type="button" data-home-link="true">Home</button>
              <span>/</span>
              <span>Product</span>
            </section>

            <section class="product-detail-shell">
              <div class="product-detail-grid">
                <div class="detail-gallery-card">
                  <div class="detail-main-visual" style="--detail-start:${activeGallery.start}; --detail-end:${activeGallery.end};">
                    <span class="detail-visual-badge">${product.badge}</span>
                    <strong>${activeGallery.title}</strong>
                    <p>${activeGallery.note}</p>
                  </div>
                  <div class="detail-thumb-row">
                    ${galleries
                      .map(
                        (item, index) => `
                          <button class="detail-thumb${index === currentDetailImage ? " is-active" : ""}" type="button" data-detail-image="${index}" style="--detail-start:${item.start}; --detail-end:${item.end};">
                            <strong>${item.title}</strong>
                            <span>${index === 0 ? "Main" : `View ${index + 1}`}</span>
                          </button>
                        `
                      )
                      .join("")}
                  </div>
                </div>

                <div class="detail-info-card">
                  <div class="detail-badge-row">
                    <p class="section-kicker">${product.seller}</p>
                    ${discountPercent(product) ? `<span class="detail-discount-badge">Save ${discountPercent(product)}%</span>` : ""}
                  </div>
                  <h1 class="detail-product-title">${product.name}</h1>
                  <div class="detail-tag-row">
                    ${tagChips(product)}
                    ${stateChips(product)}
                  </div>
                  <div class="detail-rating-row">
                    <span class="detail-stars">${ratingStars(product.rating)}</span>
                    <span>${product.rating} / 5</span>
                    <span>${product.reviews} reviews</span>
                  </div>
                  <div class="detail-price-row">
                    <div class="detail-price-stack">
                      <strong class="detail-price">${money(product.price)}</strong>
                      ${product.compareAtPrice ? `<span class="detail-compare-price">${money(product.compareAtPrice)}</span>` : ""}
                    </div>
                    <span class="detail-price-note">Tax calculated at checkout</span>
                  </div>
                  <p class="detail-summary">${profile.subtitle}</p>
                  <p class="detail-body-copy">${product.description}</p>
                  <div class="detail-benefits">
                    <span class="detail-benefit-pill">Free delivery over $100</span>
                    <span class="detail-benefit-pill">Trustworthy Calgary seller</span>
                  </div>
                  <div class="detail-purchase-row">
                    <div class="quantity-selector" aria-label="Quantity selector">
                      <button class="quantity-button" type="button" data-qty-action="minus" aria-label="Decrease quantity">-</button>
                      <strong class="quantity-value">${currentDetailQty}</strong>
                      <button class="quantity-button" type="button" data-qty-action="plus" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="button-primary detail-add-cart-button" type="button" data-add-to-cart="true">Add to Cart</button>
                  </div>
                  <p class="detail-delivery-note">Free delivery over $100. Cold-chain handling available for Calgary, Airdrie, and Cochrane routes.</p>
                </div>
              </div>
            </section>

            <section class="product-detail-panel">
              <div class="detail-tabs" role="tablist" aria-label="Product details">
                <button class="detail-tab${currentDetailTab === "description" ? " is-active" : ""}" type="button" data-detail-tab="description">Description</button>
                <button class="detail-tab${currentDetailTab === "ingredients" ? " is-active" : ""}" type="button" data-detail-tab="ingredients">Ingredients</button>
                <button class="detail-tab${currentDetailTab === "storage" ? " is-active" : ""}" type="button" data-detail-tab="storage">Storage instructions</button>
              </div>
              <div class="detail-tab-panel">
                ${detailTabContent(product, currentDetailTab)}
              </div>
            </section>

            <section class="product-detail-panel">
              <div class="section-header-row detail-section-head">
                <div class="section-header-copy">
                  <p class="section-kicker">Delivery information</p>
                  <h2 class="section-title">Local marketplace delivery coverage</h2>
                </div>
              </div>
              <div class="delivery-zone-grid">
                ${deliveryZones
                  .map(
                    (zone) => `
                      <article class="delivery-zone-card">
                        <span class="delivery-zone-icon">${zone.icon}</span>
                        <strong>${zone.title}</strong>
                        <p>${zone.note}</p>
                        <span>${zone.eta}</span>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <section class="product-detail-panel">
              <div class="section-header-row detail-section-head">
                <div class="section-header-copy">
                  <p class="section-kicker">Reviews</p>
                  <h2 class="section-title">What Calgary shoppers are saying</h2>
                </div>
              </div>
              <div class="review-summary-card">
                <div>
                  <strong class="review-score">${product.rating}</strong>
                  <span class="detail-stars">${ratingStars(product.rating)}</span>
                </div>
                <p>Based on ${product.reviews} marketplace reviews for ${product.name}.</p>
              </div>
              <div class="review-list">
                <article class="review-card">
                  <div class="review-card-head">
                    <strong>J. Kim</strong>
                    <span class="detail-stars">★★★★★</span>
                  </div>
                  <p>Fresh delivery and very easy to add into a weekly Korean grocery order.</p>
                </article>
                <article class="review-card">
                  <div class="review-card-head">
                    <strong>S. Park</strong>
                    <span class="detail-stars">★★★★★</span>
                  </div>
                  <p>Packaging was clean and the delivery update was trustworthy. Would order again.</p>
                </article>
              </div>
            </section>

            <section class="home-section detail-related-section">
              <div class="section-header-row">
                <div class="section-header-copy">
                  <p class="section-kicker">Related products</p>
                  <h2 class="section-title">You may also like</h2>
                </div>
              </div>
              <div class="market-product-grid detail-related-grid">
                ${relatedProducts(product).map((item) => productCard(item, { forceReload: true })).join("")}
              </div>
            </section>

            ${footerMarkup()}
          </div>
        </main>
        <div class="sticky-mobile-cart">
          <div class="sticky-mobile-cart-copy">
            <strong>${money(product.price)}</strong>
            <span>${currentDetailQty} item selected</span>
          </div>
          <button class="button-primary sticky-mobile-cart-button" type="button" data-add-to-cart="true">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function renderLogin() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = loginMarkup();
}

function renderRegister() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = registerMarkup();
}

function renderCart() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = cartMarkup();
}

function renderCheckout() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = checkoutMarkup();
}

function rerenderCheckoutView(options = {}) {
  renderCheckout();
  attachSharedControls();
  attachCheckoutControls();

  const fieldName = options.preserveFieldName || (options.preserveAddressFocus ? 'addressQuery' : '');
  if (fieldName) {
    const input = document.querySelector('[data-checkout-form="true"] input[name="' + fieldName + '"]');
    if (input instanceof HTMLInputElement) {
      input.focus();
      const caret = Math.min(options.caretPosition ?? input.value.length, input.value.length);
      input.setSelectionRange(caret, caret);
    }
  }
}

function rerenderRegisterView(options = {}) {
  renderRegister();
  attachSharedControls();
  attachRegisterControls();

  if (options.preserveAddressFocus) {
    const input = document.querySelector('[data-register-form="true"] input[name="addressQuery"]');
    if (input instanceof HTMLInputElement) {
      input.focus();
      const caret = Math.min(options.caretPosition ?? input.value.length, input.value.length);
      input.setSelectionRange(caret, caret);
    }
  }
}

function renderHome() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = homeMarkup();
}

function renderProductDetail(productId) {
  const root = document.getElementById("root");
  const product = productById(productId) || products[0];
  if (!root) return;

  if (currentDetailProductId !== product.id) {
    currentDetailProductId = product.id;
    currentDetailImage = 0;
    currentDetailTab = "description";
    currentDetailQty = 1;
  }

  root.innerHTML = productDetailMarkup(product);
}

function focusProductDetailBlock() {
  window.requestAnimationFrame(() => {
    const target = document.getElementById('product-page-start');
    if (!(target instanceof HTMLElement)) return;
    target.scrollIntoView({ block: 'start', behavior: 'auto' });
    target.focus({ preventScroll: true });
  });
}

function clearSlider() {
  if (slideIntervalId) {
    window.clearInterval(slideIntervalId);
    slideIntervalId = undefined;
  }
}

function restartSlider() {
  clearSlider();
  slideIntervalId = window.setInterval(() => {
    activeSlide = (activeSlide + 1) % heroSlides.length;
    renderApp();
  }, 5500);
}

function attachSharedControls() {
  document.querySelectorAll("[data-home-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      currentDetailProductId = null;
      isAccountMenuOpen = false;
      window.location.hash = "#top";
    };
  });

  document.querySelectorAll("[data-login-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      window.location.hash = "#login";
    };
  });

  document.querySelectorAll("[data-register-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      window.location.hash = "#register";
    };
  });

  document.querySelectorAll("[data-cart-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      window.location.hash = cartRoute();
    };
  });

  document.querySelectorAll('.category-nav-shell').forEach((shell) => {
    const pauseSlider = () => {
      if (getCurrentRoute().page === 'home') {
        clearSlider();
      }
    };
    const resumeSlider = () => {
      if (getCurrentRoute().page === 'home') {
        restartSlider();
      }
    };
    shell.onmouseenter = pauseSlider;
    shell.onmouseleave = resumeSlider;
    shell.onfocusin = pauseSlider;
    shell.onfocusout = (event) => {
      if (!(event.relatedTarget instanceof Node) || !shell.contains(event.relatedTarget)) {
        resumeSlider();
      }
    };
  });

  document.querySelectorAll('.category-dropdown-link, .category-submenu-link').forEach((button) => {
    button.onclick = () => {
      button.blur();
    };
  });

  document.querySelectorAll("[data-account-toggle='true']").forEach((button) => {
    button.onclick = () => {
      isAccountMenuOpen = !isAccountMenuOpen;
      renderApp();
    };
  });

  document.querySelectorAll("[data-account-action]").forEach((button) => {
    button.onclick = () => {
      const action = button.getAttribute('data-account-action');
      isAccountMenuOpen = false;
      if (action === 'logout') {
        authState = { isLoggedIn: false, email: '', name: '', points: 0 };
        currentDetailProductId = null;
        clearSlider();
        window.location.hash = '#top';
        renderApp();
        return;
      }
      renderApp();
    };
  });

  document.querySelectorAll("[data-product-id]").forEach((element) => {
    const openProduct = () => {
      const id = Number(element.getAttribute("data-product-id"));
      if (!id) return;
      clearSlider();
      const route = productRoute(id);
      if (element.getAttribute('data-product-reload') === 'true') {
        window.location.hash = route;
        window.location.reload();
        return;
      }
      window.location.hash = route;
    };

    element.onclick = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest("button") && event.target !== element) {
        return;
      }
      openProduct();
    };

    if (element.matches('.market-product-card')) {
      element.onkeydown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProduct();
        }
      };
    }
  });

  document.querySelectorAll('[data-cart-item]').forEach((element) => {
    const openCartProduct = () => {
      const id = Number(element.getAttribute('data-cart-item'));
      if (!id) return;
      clearSlider();
      window.location.hash = productRoute(id);
    };

    element.onclick = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('button')) {
        return;
      }
      openCartProduct();
    };

    element.tabIndex = 0;
    element.setAttribute('role', 'link');
    element.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCartProduct();
      }
    };
  });
}

function attachHeroControls() {
  document.querySelectorAll("[data-slide='prev']").forEach((button) => {
    button.onclick = () => {
      activeSlide = (activeSlide - 1 + heroSlides.length) % heroSlides.length;
      renderApp();
      restartSlider();
    };
  });

  document.querySelectorAll("[data-slide='next']").forEach((button) => {
    button.onclick = () => {
      activeSlide = (activeSlide + 1) % heroSlides.length;
      renderApp();
      restartSlider();
    };
  });

  document.querySelectorAll("[data-slide-to]").forEach((button) => {
    button.onclick = () => {
      activeSlide = Number(button.getAttribute("data-slide-to")) || 0;
      renderApp();
      restartSlider();
    };
  });
}

function attachLoginControls() {
  const form = document.querySelector('[data-login-form="true"]');
  if (!form) return;

  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
      loginFormState[input.name] = input.value;
      if (loginFormState.errors[input.name]) {
        loginFormState.errors = { ...loginFormState.errors, [input.name]: "" };
      }
      loginFormState.banner = "";
    });
  });

  form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    loginFormState.email = String(formData.get('email') || '').trim();
    loginFormState.password = String(formData.get('password') || '');
    loginFormState.errors = validateLoginForm();

    if (!Object.keys(loginFormState.errors).length) {
      authState = {
        isLoggedIn: true,
        email: loginFormState.email,
        name: accountDisplayName(loginFormState.email),
        points: 2800,
      };
      isAccountMenuOpen = false;
      clearSlider();
      window.location.hash = '#top';
      renderApp();
      return;
    }

    loginFormState.banner = 'Please fix the highlighted fields.';
    renderLogin();
    attachSharedControls();
    attachLoginControls();
  };
}

function attachRegisterControls() {
  const form = document.querySelector('[data-register-form="true"]');
  if (!form) return;

  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.type === 'checkbox') {
        registerFormState[input.name] = input.checked;
      } else {
        registerFormState[input.name] = input.value;
      }
      if (input.name === 'postalCode') {
        registerFormState.postalCode = registerFormState.postalCode.toUpperCase();
      }
      if (input.name === 'addressQuery') {
        registerFormState.addressApiError = '';
        fetchRegisterAddressSuggestions(input.value);
        return;
      }
      if (registerFormState.errors[input.name]) {
        registerFormState.errors = { ...registerFormState.errors, [input.name]: '' };
      }
      registerFormState.banner = '';
    });
  });

  document.querySelectorAll('[data-address-option]').forEach((button) => {
    button.onclick = () => {
      const placeId = button.getAttribute('data-address-option') || '';
      if (placeId) {
        selectRegisterAddress(placeId);
      }
    };
  });

  form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    registerFormState.name = String(formData.get('name') || '').trim();
    registerFormState.email = String(formData.get('email') || '').trim();
    registerFormState.addressQuery = String(formData.get('addressQuery') || '').trim();
    registerFormState.addressLine2 = String(formData.get('addressLine2') || '').trim();
    registerFormState.postalCode = String(formData.get('postalCode') || '').trim().toUpperCase();
    registerFormState.password = String(formData.get('password') || '');
    registerFormState.confirmPassword = String(formData.get('confirmPassword') || '');
    registerFormState.requiredConsent = Boolean(formData.get('requiredConsent'));
    registerFormState.marketingConsent = Boolean(formData.get('marketingConsent'));
    registerFormState.errors = validateRegisterForm();
    registerFormState.banner = Object.keys(registerFormState.errors).length ? 'Please fix the highlighted fields before creating your account.' : 'Register API integration will be connected here later.';
    rerenderRegisterView();
  };
}

function attachProductDetailControls(productId) {
  const product = productById(productId);
  if (!product) return;

  document.querySelectorAll("[data-detail-image]").forEach((button) => {
    button.onclick = () => {
      currentDetailImage = Number(button.getAttribute("data-detail-image")) || 0;
      renderProductDetail(product.id);
      attachSharedControls();
      attachProductDetailControls(product.id);
    };
  });

  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.onclick = () => {
      currentDetailTab = button.getAttribute("data-detail-tab") || "description";
      renderProductDetail(product.id);
      attachSharedControls();
      attachProductDetailControls(product.id);
    };
  });

  document.querySelectorAll("[data-qty-action]").forEach((button) => {
    button.onclick = () => {
      const action = button.getAttribute("data-qty-action");
      currentDetailQty = action === "plus" ? currentDetailQty + 1 : Math.max(1, currentDetailQty - 1);
      renderProductDetail(product.id);
      attachSharedControls();
      attachProductDetailControls(product.id);
    };
  });

  document.querySelectorAll("[data-add-to-cart='true']").forEach((button) => {
    button.onclick = () => {
      addProductToCart(product.id, currentDetailQty);
      renderProductDetail(product.id);
      attachSharedControls();
      attachProductDetailControls(product.id);
      document.querySelectorAll("[data-add-to-cart='true']").forEach((control) => {
        control.textContent = "Added";
        window.setTimeout(() => {
          control.textContent = "Add to Cart";
        }, 1200);
      });
    };
  });
}

function attachCartControls() {
  document.querySelectorAll('[data-cart-qty]').forEach((button) => {
    button.onclick = () => {
      const productId = Number(button.getAttribute('data-cart-product'));
      const action = button.getAttribute('data-cart-qty');
      const line = cartState.find((entry) => entry.productId === productId);
      if (!line) return;
      setCartQuantity(productId, action === 'plus' ? line.quantity + 1 : line.quantity - 1);
      renderCart();
      attachSharedControls();
      attachCartControls();
    };
  });

  document.querySelectorAll('[data-cart-remove]').forEach((button) => {
    button.onclick = () => {
      const productId = Number(button.getAttribute('data-cart-remove'));
      setCartQuantity(productId, 0);
      renderCart();
      attachSharedControls();
      attachCartControls();
    };
  });

  document.querySelectorAll('[data-cart-checkout="true"]').forEach((button) => {
    button.onclick = () => {
      if (!cartState.length) return;
      clearSlider();
      window.location.hash = checkoutRoute();
    };
  });
}

function attachCheckoutControls() {
  const form = document.querySelector('[data-checkout-form="true"]');
  if (!form) return;

  form.querySelectorAll('input, select').forEach((input) => {
    const syncField = () => {
      if (input instanceof HTMLInputElement && input.type === 'checkbox') {
        checkoutFormState[input.name] = input.checked;
      } else if (input.name === 'redeemPoints') {
        checkoutFormState.redeemPoints = Number(input.value || 0);
      } else {
        checkoutFormState[input.name] = input.value;
      }

      if (input.name === 'postalCode') {
        checkoutFormState.postalCode = checkoutFormState.postalCode.toUpperCase();
      }
      if (input.name === 'billingPostalCode') {
        checkoutFormState.billingPostalCode = checkoutFormState.billingPostalCode.toUpperCase();
      }
      if (input.name === 'cardNumber') {
        checkoutFormState.cardNumber = formatCardNumber(checkoutFormState.cardNumber);
        input.value = checkoutFormState.cardNumber;
      }
      if (input.name === 'expiryDate') {
        checkoutFormState.expiryDate = formatExpiryDate(checkoutFormState.expiryDate);
        input.value = checkoutFormState.expiryDate;
      }
      if (input.name === 'cvc') {
        checkoutFormState.cvc = formatCvc(checkoutFormState.cvc);
        input.value = checkoutFormState.cvc;
      }
      if (input.name === 'addressQuery') {
        checkoutFormState.addressApiError = '';
        fetchCheckoutAddressSuggestions(input.value);
        return;
      }
      if (input.name === 'billingAddressQuery') {
        checkoutFormState.billingAddressApiError = '';
        fetchCheckoutBillingAddressSuggestions(input.value);
        return;
      }
      if (input.name === 'useShippingAsBillingAddress') {
        checkoutFormState.useShippingAsBillingAddress = input.checked;
        if (checkoutFormState.useShippingAsBillingAddress) {
          syncBillingAddressFromShipping();
        } else {
          checkoutFormState.billingAddressQuery = '';
          checkoutFormState.billingSelectedAddress = '';
          checkoutFormState.billingAddressLine2 = '';
          checkoutFormState.billingPostalCode = '';
          checkoutFormState.billingCity = '';
          checkoutFormState.billingProvince = '';
          checkoutFormState.billingCountry = 'Canada';
          checkoutFormState.billingAddressOptions = [];
          checkoutFormState.billingAddressLoading = false;
          checkoutFormState.billingAddressApiError = '';
        }
        checkoutFormState.errors = {
          ...checkoutFormState.errors,
          billingAddressQuery: '',
          billingSelectedAddress: '',
          billingPostalCode: '',
          billingCity: '',
          billingProvince: '',
          billingCountry: '',
        };
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
        return;
      }

      if (checkoutFormState.useShippingAsBillingAddress && ['addressLine2', 'postalCode', 'shippingCity', 'shippingProvince'].includes(input.name)) {
        syncBillingAddressFromShipping();
      }

      if (checkoutFormState.errors[input.name]) {
        checkoutFormState.errors = { ...checkoutFormState.errors, [input.name]: '' };
      }
      checkoutFormState.banner = '';
      if (input.name === 'redeemEnabled' || input.name === 'redeemPoints') {
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
      }
    };

    input.addEventListener('input', syncField);
    input.addEventListener('change', syncField);
  });

  document.querySelectorAll('[data-checkout-address-option]').forEach((button) => {
    button.onclick = () => {
      const placeId = button.getAttribute('data-checkout-address-option') || '';
      if (placeId) {
        selectCheckoutAddress(placeId);
      }
    };
  });

  document.querySelectorAll('[data-billing-address-option]').forEach((button) => {
    button.onclick = () => {
      const placeId = button.getAttribute('data-billing-address-option') || '';
      if (placeId) {
        selectCheckoutBillingAddress(placeId);
      }
    };
  });

  document.querySelectorAll('[data-place-order="true"]').forEach((button) => {
    button.onclick = () => {
      checkoutFormState.addressQuery = String(form.querySelector('[name="addressQuery"]')?.value || '').trim();
      checkoutFormState.addressLine2 = String(form.querySelector('[name="addressLine2"]')?.value || '').trim();
      checkoutFormState.shippingCity = String(form.querySelector('[name="shippingCity"]')?.value || '').trim();
      checkoutFormState.shippingProvince = String(form.querySelector('[name="shippingProvince"]')?.value || '').trim();
      checkoutFormState.postalCode = String(form.querySelector('[name="postalCode"]')?.value || '').trim().toUpperCase();
      checkoutFormState.cardName = String(form.querySelector('[name="cardName"]')?.value || '').trim();
      checkoutFormState.cardNumber = formatCardNumber(String(form.querySelector('[name="cardNumber"]')?.value || '').trim());
      checkoutFormState.expiryDate = formatExpiryDate(String(form.querySelector('[name="expiryDate"]')?.value || '').trim());
      checkoutFormState.cvc = formatCvc(String(form.querySelector('[name="cvc"]')?.value || '').trim());
      if (!checkoutFormState.useShippingAsBillingAddress) {
        checkoutFormState.billingAddressQuery = String(form.querySelector('[name="billingAddressQuery"]')?.value || '').trim();
        checkoutFormState.billingAddressLine2 = String(form.querySelector('[name="billingAddressLine2"]')?.value || '').trim();
        checkoutFormState.billingPostalCode = String(form.querySelector('[name="billingPostalCode"]')?.value || '').trim().toUpperCase();
        checkoutFormState.billingCity = String(form.querySelector('[name="billingCity"]')?.value || '').trim();
        checkoutFormState.billingProvince = String(form.querySelector('[name="billingProvince"]')?.value || '').trim();
        checkoutFormState.billingCountry = String(form.querySelector('[name="billingCountry"]')?.value || '').trim();
      } else {
        syncBillingAddressFromShipping();
      }
      checkoutFormState.errors = validateCheckoutForm();
      if (Object.keys(checkoutFormState.errors).length) {
        checkoutFormState.banner = 'Please fix the highlighted checkout fields.';
        checkoutFormState.isSubmitting = false;
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
        return;
      }

      checkoutFormState.isSubmitting = true;
      checkoutFormState.banner = 'Preparing secure payment...';
      renderCheckout();
      attachSharedControls();
      attachCheckoutControls();
      window.setTimeout(() => {
        checkoutFormState.isSubmitting = false;
        checkoutFormState.banner = 'Stripe integration point is ready. Backend payment logic is not connected yet.';
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
      }, 1100);
    };
  });
}

function renderApp() {
  const route = getCurrentRoute();
  if (route.page === "login") {
    clearSlider();
    resetLoginFormState();
    renderLogin();
    document.title = "Seoul Basket Login";
    attachSharedControls();
    attachLoginControls();
    return;
  }

  if (route.page === "register") {
    clearSlider();
    resetRegisterFormState();
    renderRegister();
    document.title = "Seoul Basket Register";
    attachSharedControls();
    attachRegisterControls();
    return;
  }

  if (route.page === "product") {
    clearSlider();
    renderProductDetail(route.id);
    document.title = "Seoul Basket Product Details";
    attachSharedControls();
    attachProductDetailControls(route.id);
    focusProductDetailBlock();
    return;
  }

  if (route.page === "cart") {
    clearSlider();
    renderCart();
    document.title = "Seoul Basket Cart";
    attachSharedControls();
    attachCartControls();
    return;
  }

  if (route.page === "checkout") {
    clearSlider();
    resetCheckoutFormState();
    renderCheckout();
    document.title = "Seoul Basket Checkout";
    attachSharedControls();
    attachCheckoutControls();
    return;
  }

  renderHome();
  document.title = "Seoul Basket Calgary Marketplace";
  attachSharedControls();
  attachHeroControls();
  restartSlider();
}

window.addEventListener("hashchange", renderApp);
window.addEventListener("pageshow", () => {
  const route = getCurrentRoute();
  if (route.page === "login") {
    resetLoginFormState();
  }
  if (route.page === "register") {
    resetRegisterFormState();
  }
  if (route.page === "checkout") {
    resetCheckoutFormState();
  }
  renderApp();
});
renderApp();
