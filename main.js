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
  {
    id: 11,
    name: "Tax Check Pantry Combo",
    seller: "Seoul Basket Test Kitchen",
    price: 12.8,
    compareAtPrice: null,
    badge: "Tax",
    tags: ["Hot"],
    states: ["ready"],
    rating: 4.7,
    reviews: 22,
    delivery: "Useful for checkout tax verification",
    description: "A compact pantry bundle priced to make province-based tax changes easy to verify.",
    image: "Tax combo",
  },
  {
    id: 12,
    name: "Ontario Snack Cart Pack",
    seller: "Hanok Treats",
    price: 26.4,
    compareAtPrice: null,
    badge: "Tax",
    tags: ["Best Seller"],
    states: ["ready"],
    rating: 4.8,
    reviews: 17,
    delivery: "Good for subtotal and tax testing",
    description: "A snack bundle with a subtotal that shows province tax differences clearly.",
    image: "Snack pack",
  },
  {
    id: 13,
    name: "Premium Home Care Set",
    seller: "Glow Seoul Living",
    price: 41.25,
    compareAtPrice: 46.5,
    badge: "Tax",
    tags: [],
    states: [],
    rating: 4.6,
    reviews: 11,
    delivery: "Lifestyle item for tax scenario checks",
    description: "A higher-price lifestyle bundle added so tax and points calculations are easier to inspect.",
    image: "Home care",
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
const quickCategoryProducts = {
  'vans-pick': [1, 8, 3, 5, 7],
  'soups-side-dishes': [8, 2, 1, 7],
  kimchi: [3, 1, 8, 11],
  'meal-kits': [2, 7, 8, 11],
  'fruits-vegetables': [4, 10, 1, 11],
  meat: [5, 8, 2, 1],
  seafood: [6, 8, 10, 2],
  'snacks-desserts': [7, 12, 11, 10],
  'home-beauty': [9, 13, 10, 11],
};

const quickCategoryFilterMeta = Object.fromEntries(
  quickCategories.map((category) => [category.id, { eyebrow: 'Quick categories', title: category.label }])
);

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

const orderStatusStageMeta = [
  {
    key: "confirmed",
    label: "Order confirmed",
    helper: "Payment approved and order sheet created.",
  },
  {
    key: "packed",
    label: "Packed by seller",
    helper: "Fresh and frozen items are being staged by temperature.",
  },
  {
    key: "dispatched",
    label: "Out for delivery",
    helper: "Driver has your order on the local route.",
  },
  {
    key: "delivered",
    label: "Delivered",
    helper: "Order delivered to the selected address.",
  },
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

const languageOptions = {
  en: { code: 'EN', name: 'English' },
  ko: { code: 'KO', name: '한국어' },
};

const categoryLabels = {
  en: {
    'vans-pick': "Van's Pick",
    'soups-side-dishes': 'Soups / Side Dishes',
    kimchi: 'Kimchi',
    'meal-kits': 'Meal Kits',
    'fruits-vegetables': 'Fruits / Vegetables',
    meat: 'Meat',
    seafood: 'Seafood',
    'snacks-desserts': 'Snacks / Desserts',
    'home-beauty': 'Home / Beauty',
  },
  ko: {
    'vans-pick': '반찬 추천',
    'soups-side-dishes': '국 / 반찬',
    kimchi: '김치',
    'meal-kits': '밀키트',
    'fruits-vegetables': '과일 / 채소',
    meat: '정육',
    seafood: '수산',
    'snacks-desserts': '간식 / 디저트',
    'home-beauty': '생활 / 뷰티',
  },
};

const uiMessages = {
  en: {
    login: 'Login', sign_in: 'Sign in', my_account: 'My Account', member: 'Member',
    my_orders: 'My Orders', my_points: 'My Points', profile: 'Profile', logout: 'Logout',
    search_placeholder: 'What are you looking for?', search_aria: 'Search', cart: 'Cart', change_language: 'Change language',
    menu: 'Menu', notice: 'Notice', categories_menu: 'Categories', menu_back: 'Back', menu_close: 'Close', shop_all_in: 'Shop all in',
    notice_text: 'Weekly flyer updates every Tuesday for Calgary shoppers · Free delivery over CA$100 · Calgary / Airdrie / Cochrane route notices posted every morning',
    nav_home: 'Home', nav_categories: 'Categories', nav_new_arrivals: 'New Arrivals', nav_time_deals: 'Time Deals', nav_best_sellers: 'Best Sellers', nav_brand_hall: 'Brand Hall',
    quick_categories: 'Quick categories', shop_by_category: 'Shop by category', view_all_product: 'View all Product', show_all_sections: 'Show all sections', view_as: 'View as', list_view: 'List view', grid_view: 'Grid view',
    featured_eyebrow: "Van's Pick", featured_title: "Van's Pick", best_eyebrow: 'Best sellers', best_title: 'Best Sellers', new_eyebrow: 'New arrivals', new_title: 'New Arrivals', deals_eyebrow: 'Time deals', deals_title: 'Time Deals',
    quick_category_eyebrow: 'Quick categories', filtered_products_suffix: 'Products', brand_hall: 'Brand hall', trusted_sellers: 'Trusted Calgary sellers', back_to_top: 'Back to Top',
    community_perks: 'Community perks', join_rewards_title: 'Join KakaoTalk updates and member rewards', join_rewards_copy: 'Get weekly flyer updates, delivery route notices, and seller-only bonus point events for Calgary shoppers.', join_community: 'Join Community', see_rewards: 'See Rewards',
    footer_brand_title: 'Korean grocery and lifestyle marketplace for Calgary', footer_brand_copy: 'Order weekly Korean groceries, prepared meals, pantry staples, and trusted local delivery picks in one place.', footer_shop: 'Shop', footer_support: 'Support', footer_follow: 'Follow', footer_delivery_notice: 'Delivery notice', footer_customer_care: 'Customer care', footer_order_help: 'Order help', footer_community: 'Community',
    site_map: 'Site Map', sitemap_marketplace: 'Marketplace', sitemap_help: 'Shopping Help', sitemap_customer: 'Customer Care', delivery_info: 'Delivery Info', faq: 'FAQ', contact_us: 'Contact Us',
    title_login: 'Seoul Basket Login', title_register: 'Seoul Basket Register', title_product: 'Seoul Basket Product Details', title_cart: 'Seoul Basket Cart', title_checkout: 'Seoul Basket Checkout', title_account: 'Seoul Basket My Account', title_order_status: 'Seoul Basket Order Status', title_home: 'Seoul Basket Calgary Marketplace'
  },
  ko: {
    login: '로그인', sign_in: '로그인', my_account: '내 계정', member: '회원',
    my_orders: '주문내역', my_points: '포인트', profile: '프로필', logout: '로그아웃',
    search_placeholder: '무엇을 찾고 계신가요?', search_aria: '검색', cart: '장바구니', change_language: '언어 변경',
    menu: '메뉴', notice: '공지', categories_menu: '카테고리', menu_back: '뒤로', menu_close: '닫기', shop_all_in: '전체 보기',
    notice_text: '캘거리 고객을 위한 주간 전단은 매주 화요일 업데이트 · CA$100 이상 무료 배송 · 캘거리 / 에어드리 / 코크레인 배송 공지는 매일 오전 안내',
    nav_home: '홈', nav_categories: '카테고리', nav_new_arrivals: '신상품', nav_time_deals: '타임딜', nav_best_sellers: '베스트셀러', nav_brand_hall: '브랜드홀',
    quick_categories: '퀵 카테고리', shop_by_category: '카테고리별 쇼핑', view_all_product: '전체 상품 보기', show_all_sections: '전체 섹션 보기', view_as: '보기 방식', list_view: '리스트 보기', grid_view: '그리드 보기',
    featured_eyebrow: '반찬 추천', featured_title: '반찬 추천', best_eyebrow: '베스트셀러', best_title: '베스트셀러', new_eyebrow: '신상품', new_title: '신상품', deals_eyebrow: '타임딜', deals_title: '타임딜',
    quick_category_eyebrow: '퀵 카테고리', filtered_products_suffix: '상품', brand_hall: '브랜드홀', trusted_sellers: '캘거리 인기 판매자', back_to_top: '맨 위로',
    community_perks: '커뮤니티 혜택', join_rewards_title: '카카오톡 업데이트와 멤버 리워드를 받아보세요', join_rewards_copy: '주간 전단, 배송 노선 공지, 판매자 전용 포인트 이벤트를 캘거리 고객에게 안내합니다.', join_community: '커뮤니티 참여', see_rewards: '리워드 보기',
    footer_brand_title: '캘거리 한인 식료품 및 라이프스타일 마켓플레이스', footer_brand_copy: '주간 장보기, 반찬, 밀키트, 팬트리 상품과 현지 배송 상품을 한 곳에서 주문하세요.', footer_shop: '쇼핑', footer_support: '고객지원', footer_follow: '팔로우', footer_delivery_notice: '배송 공지', footer_customer_care: '고객센터', footer_order_help: '주문 도움', footer_community: '커뮤니티',
    site_map: '사이트맵', sitemap_marketplace: '마켓플레이스', sitemap_help: '쇼핑 안내', sitemap_customer: '고객센터', delivery_info: '배송 안내', faq: '자주 묻는 질문', contact_us: '문의하기',
    title_login: '서울바스켓 로그인', title_register: '서울바스켓 회원가입', title_product: '서울바스켓 상품 상세', title_cart: '서울바스켓 장바구니', title_checkout: '서울바스켓 체크아웃', title_account: '서울바스켓 내 계정', title_order_status: '서울바스켓 주문조회', title_home: '서울바스켓 캘거리 마켓플레이스'
  },
};

function languageFlagDataUrl(language) {
  const svg = language === 'ko'
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><rect width="20" height="18" rx="4" fill="#fff"/><g fill="#111"><rect x="3" y="4.1" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 3 4.1)"/><rect x="3.55" y="5.3" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 3.55 5.3)"/><rect x="4.1" y="6.5" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 4.1 6.5)"/><rect x="13.9" y="11.5" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 13.9 11.5)"/><rect x="14.45" y="12.7" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 14.45 12.7)"/><rect x="15" y="13.9" width="3.4" height="0.75" rx="0.2" transform="rotate(-28 15 13.9)"/><rect x="14.1" y="4.1" width="3.4" height="0.75" rx="0.2" transform="rotate(28 14.1 4.1)"/><rect x="14.65" y="5.3" width="1.45" height="0.75" rx="0.2" transform="rotate(28 14.65 5.3)"/><rect x="16.6" y="6.34" width="1.45" height="0.75" rx="0.2" transform="rotate(28 16.6 6.34)"/><rect x="14.1" y="6.5" width="3.4" height="0.75" rx="0.2" transform="rotate(28 14.1 6.5)"/><rect x="3.1" y="11.4" width="1.45" height="0.75" rx="0.2" transform="rotate(28 3.1 11.4)"/><rect x="5.03" y="12.47" width="1.45" height="0.75" rx="0.2" transform="rotate(28 5.03 12.47)"/><rect x="3.65" y="12.6" width="3.4" height="0.75" rx="0.2" transform="rotate(28 3.65 12.6)"/><rect x="4.2" y="13.8" width="3.4" height="0.75" rx="0.2" transform="rotate(28 4.2 13.8)"/></g><g transform="translate(10 9) rotate(-32)"><path d="M0-3.1a3.1 3.1 0 0 1 0 6.2A3.1 3.1 0 0 1 0-3.1Z" fill="#cd2e3a"/><path d="M0 3.1a3.1 3.1 0 0 1 0-6.2A3.1 3.1 0 0 1 0 3.1Z" fill="#0047a0"/><path d="M0-3.1a1.55 1.55 0 0 0 0 3.1 1.55 1.55 0 0 1 0 3.1A3.1 3.1 0 0 1 0-3.1Z" fill="#0047a0"/><path d="M0 3.1a1.55 1.55 0 0 0 0-3.1 1.55 1.55 0 0 1 0-3.1A3.1 3.1 0 0 1 0 3.1Z" fill="#cd2e3a"/></g></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><rect width="20" height="18" rx="4" fill="#fff"/><rect width="4" height="18" fill="#d52b1e"/><rect x="16" width="4" height="18" fill="#d52b1e"/><path d="M10 5.2 11 7h1.8l-1.45 1.1.56 1.8L10 8.95 8.1 9.9l.56-1.8L7.2 7H9z" fill="#d52b1e"/></svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem('seoul-basket-language');
    return stored === 'ko' || stored === 'en' ? stored : 'en';
  } catch (error) {
    return 'en';
  }
}

function persistLanguage(language) {
  try { window.localStorage.setItem('seoul-basket-language', language); } catch (error) {}
}

function t(key) {
  return uiMessages[currentLanguage]?.[key] || uiMessages.en[key] || key;
}

function translatedCategoryLabel(categoryId, fallback) {
  return categoryLabels[currentLanguage]?.[categoryId] || fallback;
}

let currentLanguage = typeof window !== 'undefined' ? getStoredLanguage() : 'en';
let isLanguageMenuOpen = false;
let activeSlide = 0;
let activeHomeSectionFilter = null;
let activeHomeProductLayout = "grid";
let activeMobileCategoryId = null;
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
  address: "",
  addressLine2: "",
  postalCode: "",
  marketingConsent: false,
  requiredConsent: false,
  passwordResetNotice: "",
};
let latestOrderState = null;
let accountProfileState = {
  isEditing: false,
  notice: "",
  errors: {},
  draft: {
    name: "",
    email: "",
    address: "",
    addressQuery: "",
    selectedAddress: "",
    addressLine2: "",
    postalCode: "",
    marketingConsent: false,
    addressOptions: [],
    addressLoading: false,
    addressApiError: "",
  },
};
let isAccountMenuOpen = false;
let isMobileCategoryMenuOpen = false;
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
    redeemPoints: authState.points >= 2500 ? 2500 : 0,
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
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
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

function orderStatusRoute(orderId = "") {
  return orderId ? `#order-${orderId}` : "#order-status";
}

function accountRoute(tab = "orders") {
  if (!tab || tab === "orders") return "#account";
  return `#account-${tab}`;
}

function navigateToRoute(route) {
  isMobileCategoryMenuOpen = false;
  if (route !== '#top') {
    activeHomeSectionFilter = null;
    activeHomeProductLayout = 'grid';
  }
  if (window.location.hash === route) {
    renderApp();
    return;
  }
  window.location.hash = route;
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
  if (hash === "#account") {
    return { page: "account", tab: "orders" };
  }
  const accountMatch = hash.match(/^#account-(orders|points|profile)$/);
  if (accountMatch) {
    return { page: "account", tab: accountMatch[1] };
  }
  if (hash === "#order-status") {
    return { page: "order-status" };
  }
  const policyMatch = hash.match(/^#policy-(shipping|returns|privacy|terms|faq|contact)$/);
  if (policyMatch) {
    return { page: "policy", policy: policyMatch[1] };
  }
  const orderMatch = hash.match(/^#order-(.+)$/);
  if (orderMatch) {
    return { page: "order-status", id: orderMatch[1] };
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

const provinceTaxProfiles = {
  Alberta: { rate: 0.05, label: 'GST' },
  "British Columbia": { rate: 0.12, label: 'GST/PST' },
  Manitoba: { rate: 0.12, label: 'GST/PST' },
  "New Brunswick": { rate: 0.15, label: 'HST' },
  "Newfoundland and Labrador": { rate: 0.15, label: 'HST' },
  "Northwest Territories": { rate: 0.05, label: 'GST' },
  "Nova Scotia": { rate: 0.14, label: 'HST' },
  Nunavut: { rate: 0.05, label: 'GST' },
  Ontario: { rate: 0.13, label: 'HST' },
  "Prince Edward Island": { rate: 0.15, label: 'HST' },
  Quebec: { rate: 0.14975, label: 'GST/QST' },
  Saskatchewan: { rate: 0.11, label: 'GST/PST' },
  Yukon: { rate: 0.05, label: 'GST' },
};

function currencyRound(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function shippingProvinceTaxProfile(province = "") {
  return provinceTaxProfiles[province] || { rate: 0, label: 'Tax' };
}

function shippingProvinceTaxRate(province = "") {
  return shippingProvinceTaxProfile(province).rate;
}

function shippingProvinceTaxLabel(province = "") {
  const profile = shippingProvinceTaxProfile(province);
  return `${profile.label} (${formatTaxRate(profile.rate)}%)`;
}

function checkoutTaxAmount() {
  const taxableSubtotal = Math.max(0, cartSubtotal() - checkoutPointsDiscount());
  return currencyRound(taxableSubtotal * shippingProvinceTaxRate(checkoutFormState.shippingProvince));
}

function formatTaxRate(rate = 0) {
  const percentage = rate * 100;
  return Number.isInteger(percentage) ? String(percentage) : percentage.toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
}

function formatOrderTimestamp(date) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(date).replace(",", " ·");
}

function conciseOrderPlacedAt(value = "") {
  const [datePartRaw = "", timePartRaw = ""] = value.split("·");
  const datePart = datePartRaw.trim().replace(/\s+\d{4}$/, "");
  const timePart = timePartRaw.trim();
  return [datePart, timePart].filter(Boolean).join(" · ") || value;
}

function conciseDeliverySlotDate(value = "") {
  const [datePartRaw = ""] = value.split("·");
  return datePartRaw.trim().replace(/^[A-Za-z]{3},\s*/, "") || value;
}

function conciseDeliverySlotRoute(value = "") {
  const [, routePartRaw = ""] = value.split("·");
  return routePartRaw.trim() || "";
}

function composeAddressLine(address, addressLine2, city, province, postalCode, country = "Canada") {
  return [
    address,
    addressLine2,
    [city, province].filter(Boolean).join(", "),
    postalCode,
    country,
  ].filter(Boolean).join(" · ");
}

function buildOrderTimeline(currentStage, deliveryDate) {
  const activeIndex = Math.max(0, orderStatusStageMeta.findIndex((stage) => stage.key === currentStage));
  return orderStatusStageMeta.map((stage, index) => {
    if (index < activeIndex) {
      return {
        ...stage,
        state: "complete",
        detail: index === 1 ? "Seller finished item packing and cold-chain prep." : stage.helper,
      };
    }
    if (index === activeIndex) {
      return {
        ...stage,
        state: "current",
        detail: stage.key === "packed"
          ? "Seller is packing your order now. Dispatch is scheduled for " + deliveryDate + "."
          : stage.helper,
      };
    }
    return {
      ...stage,
      state: "upcoming",
      detail: stage.key === "dispatched"
        ? "Route handoff starts on " + deliveryDate + "."
        : stage.helper,
    };
  });
}

function createOrderStatusRecord() {
  const first = productById(1);
  const third = productById(3);
  return {
    id: "SB-260414-1842",
    placedAt: "Apr 14 2026 · 6:42 PM",
    headline: "Preparing for dispatch",
    summary: "Seller is packing your order and checking cold-chain items before route handoff.",
    currentStage: "packed",
    paymentStatus: "Paid",
    fulfillmentStatus: "Packing in progress",
    paymentMethod: "Visa ending in 3456",
    deliveryDate: checkoutDeliverySlots[0],
    customerName: "Guest shopper",
    phone: "+1 403 555 0123",
    shippingAddress: "123 4 Ave SW · Calgary, Alberta · T2P 1J9 · Canada",
    billingAddress: "123 4 Ave SW · Calgary, Alberta · T2P 1J9 · Canada",
    supportNote: "Need help before dispatch? Customer care replies within one business day.",
    items: [
      { ...first, quantity: 1, lineTotal: first.price },
      { ...third, quantity: 2, lineTotal: third.price * 2 },
    ],
    subtotal: 63,
    deliveryFee: 9,
    tax: 3.6,
    taxLabel: 'GST (5%)',
    pointsDiscount: 0,
    total: 75.6,
    earnedPoints: 315,
    timeline: buildOrderTimeline("packed", checkoutDeliverySlots[0]),
  };
}

function buildOrderFromCheckout() {
  const orderDate = new Date();
  const orderId = "SB-" + [
    orderDate.getUTCFullYear().toString().slice(-2),
    String(orderDate.getUTCMonth() + 1).padStart(2, "0"),
    String(orderDate.getUTCDate()).padStart(2, "0"),
  ].join("") + "-" + String(orderDate.getUTCHours()).padStart(2, "0") + String(orderDate.getUTCMinutes()).padStart(2, "0");
  const items = cartSummaryItems().map((entry) => ({ ...entry.product, quantity: entry.quantity, lineTotal: entry.lineTotal }));
  const subtotal = cartSubtotal();
  const deliveryFee = cartDeliveryFee();
  const pointsDiscount = checkoutPointsDiscount();
  const tax = checkoutTaxAmount();
  const taxLabel = checkoutFormState.shippingProvince ? shippingProvinceTaxLabel(checkoutFormState.shippingProvince) : 'Tax';
  const total = checkoutGrandTotal();
  const earnedPoints = checkoutEstimatedEarnPoints();
  const shippingAddress = composeAddressLine(
    checkoutFormState.selectedAddress || checkoutFormState.addressQuery,
    checkoutFormState.addressLine2,
    checkoutFormState.shippingCity,
    checkoutFormState.shippingProvince,
    checkoutFormState.postalCode,
    "Canada"
  );
  const billingAddress = composeAddressLine(
    checkoutFormState.billingSelectedAddress || checkoutFormState.billingAddressQuery,
    checkoutFormState.billingAddressLine2,
    checkoutFormState.billingCity,
    checkoutFormState.billingProvince,
    checkoutFormState.billingPostalCode,
    checkoutFormState.billingCountry
  );

  return {
    id: orderId,
    placedAt: formatOrderTimestamp(orderDate),
    headline: "Preparing for dispatch",
    summary: "Payment was approved and your order is now being packed for the selected delivery route.",
    currentStage: "packed",
    paymentStatus: "Paid",
    fulfillmentStatus: "Packing in progress",
    paymentMethod: "Card ending in " + checkoutFormState.cardNumber.replace(/\D+/g, "").slice(-4),
    deliveryDate: checkoutFormState.deliveryDate,
    customerName: checkoutFormState.name,
    phone: checkoutFormState.phone,
    shippingAddress,
    billingAddress,
    supportNote: "Route updates will appear here until the order is delivered.",
    items,
    subtotal,
    deliveryFee,
    tax,
    taxLabel,
    pointsDiscount,
    total,
    earnedPoints,
    timeline: buildOrderTimeline("packed", checkoutFormState.deliveryDate),
  };
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

function searchIconMarkup() {
  return '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="4.75"></circle><path d="M12.2 12.2 16.4 16.4"></path></svg>';
}

function cartIconMarkup() {
  return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.1 4.2h1.8l1.3 7.1h7.5l1.7-5.3H6.1"></path><circle cx="8.1" cy="14.8" r="1.1"></circle><circle cx="13.7" cy="14.8" r="1.1"></circle></svg>';
}

function listLayoutIconMarkup() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><g transform="translate(3 5.727)"><path d="M4.364 1.091h13.091"></path><circle cx="1.091" cy="1.091" r="1.091" fill="currentColor"></circle></g><g transform="translate(3 10.91)"><path d="M4.364 1.091h13.091"></path><circle cx="1.091" cy="1.091" r="1.091" fill="currentColor"></circle></g><g transform="translate(3 16.09)"><path d="M4.364 1.091h13.091"></path><circle cx="1.091" cy="1.091" r="1.091" fill="currentColor"></circle></g></svg>';
}

function gridLayoutIconMarkup() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"></path></svg>';
}

function languageSwitcherMarkup(mode = 'desktop') {
  const option = languageOptions[currentLanguage] || languageOptions.en;
  return `
    <div class="language-switcher-shell language-switcher-shell-${mode}${isLanguageMenuOpen ? ' is-open' : ''}">
      <button class="header-language-pill header-language-pill-${mode}" type="button" data-language-toggle="true" aria-expanded="${isLanguageMenuOpen ? 'true' : 'false'}" aria-label="${t('change_language')}">
        <div class="tl-select">
          <img class="tl-flag" loading="lazy" width="20" height="18" alt="Language switcher country flag for ${option.name}" src="${languageFlagDataUrl(currentLanguage)}">
          <span class="tl-label tl-name">${option.name}</span>
        </div>
      </button>
      ${isLanguageMenuOpen ? `<div class="language-switcher-menu">${Object.entries(languageOptions).map(([language, meta]) => `<button class="language-option${language === currentLanguage ? ' is-active' : ''}" type="button" data-language-option="${language}"><div class="tl-select"><img class="tl-flag" loading="lazy" width="20" height="18" alt="Language switcher country flag for ${meta.name}" src="${languageFlagDataUrl(language)}"><span class="tl-label tl-name">${meta.name}</span></div></button>`).join('')}</div>` : ''}
    </div>
  `;
}
function accountUtilityMarkup() {
  if (!authState.isLoggedIn) {
    return `
      <button class="header-utility-button header-account-button" type="button" data-login-link="true">
        <span class="header-account-icon">${userIconMarkup()}</span>
        <span class="header-account-copy">
          <strong>${t('login')}</strong>
          <span>${t('sign_in')}</span>
        </span>
      </button>
    `;
  }

  return `
    <div class="account-menu-shell${isAccountMenuOpen ? ' is-open' : ''}">
      <button class="header-utility-button header-account-button is-account" type="button" data-account-toggle="true" aria-expanded="${isAccountMenuOpen ? 'true' : 'false'}">
        <span class="header-account-icon">${userIconMarkup()}</span>
        <span class="header-account-copy">
          <strong>${t('my_account')}</strong>
          <span>${authState.name || t('member')}</span>
        </span>
      </button>
      ${isAccountMenuOpen ? `
        <div class="account-dropdown">
          <button class="account-dropdown-link" type="button" data-account-action="orders">${t('my_orders')}</button>
          <button class="account-dropdown-link" type="button" data-account-action="points">${t('my_points')}</button>
          <button class="account-dropdown-link" type="button" data-account-action="profile">${t('profile')}</button>
          <button class="account-dropdown-link is-logout" type="button" data-account-action="logout">${t('logout')}</button>
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
                    <strong>${translatedCategoryLabel(category.id, category.label)}</strong>
                    <span class="category-dropdown-arrow">›</span>
                  </button>
                  <div class="category-submenu">
                    <p class="category-submenu-title">${translatedCategoryLabel(category.id, category.label)}</p>
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

function activeMobileCategory() {
  return marketplaceCategories.find((category) => category.id === activeMobileCategoryId) || null;
}

function mobileCategoryDrawerMarkup() {
  const category = activeMobileCategory();
  const title = category ? translatedCategoryLabel(category.id, category.label) : t('categories_menu');
  const body = category
    ? `
        <div class="mobile-category-drawer-list">
          <button class="mobile-category-drawer-shopall" type="button" data-home-filter="${category.id}">
            <span>${t('shop_all_in')}</span>
            <strong>${translatedCategoryLabel(category.id, category.label)}</strong>
          </button>
          ${category.children.map((child) => `
            <button class="mobile-category-drawer-link is-leaf" type="button" data-home-filter="${category.id}">
              <span>${child}</span>
            </button>
          `).join('')}
        </div>
      `
    : `
        <div class="mobile-category-drawer-list">
          ${marketplaceCategories.map((item) => `
            <button class="mobile-category-drawer-link" type="button" data-mobile-category-open="${item.id}">
              <span class="mobile-category-drawer-copy">
                <strong>${translatedCategoryLabel(item.id, item.label)}</strong>
              </span>
              <span class="mobile-category-drawer-arrow" aria-hidden="true">›</span>
            </button>
          `).join('')}
        </div>
      `;

  return `
    <div class="mobile-category-drawer${isMobileCategoryMenuOpen ? ' is-open' : ''}" aria-hidden="${isMobileCategoryMenuOpen ? 'false' : 'true'}">
      <button class="mobile-category-drawer-scrim" type="button" data-mobile-category-close="true" aria-label="${t('menu_close')}"></button>
      <aside class="mobile-category-drawer-panel" aria-label="${t('categories_menu')}">
        <div class="mobile-category-drawer-header">
          ${category
            ? `<button class="mobile-category-drawer-back" type="button" data-mobile-category-back="true">${t('menu_back')}</button>`
            : `<span class="mobile-category-drawer-spacer" aria-hidden="true"></span>`}
          <strong>${title}</strong>
          <button class="mobile-category-drawer-close" type="button" data-mobile-category-close="true" aria-label="${t('menu_close')}">×</button>
        </div>
        ${body}
      </aside>
    </div>
  `;
}

function topChrome() {
  const showAnnouncementBar = !activeHomeSectionFilter;
  return `
    <div class="header-main header-main-marketlike">
      <div class="header-desktop-row">
        <button class="header-logo-button header-logo-button-centered" type="button" data-home-link="true">
          <img class="header-logo-image" src="./assets/Seoul-Basket-Logo-header-captured.png" alt="Seoul Basket Korean marketplace logo" />
        </button>
        <div class="header-search-shell header-search-shell-marketlike">
          <input class="header-search-input" type="search" placeholder="${t('search_placeholder')}" />
          <button class="header-search-button" type="button" aria-label="${t('search_aria')}"><span class="header-search-icon">${searchIconMarkup()}</span></button>
        </div>
        <div class="header-desktop-actions">
          ${accountUtilityMarkup()}
          <button class="cart-utility cart-utility-desktop" type="button" data-cart-link="true"><span class="cart-utility-icon">${cartIconMarkup()}</span><span class="cart-utility-label">${t('cart')}</span><strong>${cartItemCount()}</strong></button>
          ${languageSwitcherMarkup('desktop')}
        </div>
      </div>
      <div class="header-mobile-row">
        <button class="category-trigger header-menu-trigger" type="button" data-category-toggle="true" aria-expanded="${isMobileCategoryMenuOpen ? 'true' : 'false'}"><span class="category-trigger-icon" aria-hidden="true"><span></span><span></span><span></span></span><span class="header-menu-text">${t('menu')}</span></button>
        <button class="header-logo-button header-logo-button-centered" type="button" data-home-link="true">
          <img class="header-logo-image" src="./assets/Seoul-Basket-Logo-header-captured.png" alt="Seoul Basket Korean marketplace logo" />
        </button>
        <div class="header-mobile-actions">
          ${accountUtilityMarkup()}
          <button class="cart-utility" type="button" data-cart-link="true"><span class="cart-utility-icon">${cartIconMarkup()}</span><span class="cart-utility-label">${t('cart')}</span><strong>${cartItemCount()}</strong></button>
          ${languageSwitcherMarkup('mobile')}
        </div>
      </div>
      <div class="header-search-shell header-search-shell-marketlike header-search-shell-mobile">
        <input class="header-search-input" type="search" placeholder="${t('search_placeholder')}" />
        <button class="header-search-button" type="button" aria-label="${t('search_aria')}"><span class="header-search-icon">${searchIconMarkup()}</span></button>
      </div>
    </div>
    ${mobileCategoryDrawerMarkup()}

    ${showAnnouncementBar ? `
      <div class="announcement-bar">
        <div class="announcement-inner announcement-inner-compact">
          <span class="announcement-label">${t('notice')}</span>
          <div class="announcement-ticker" aria-label="${t('notice')}">
            <div class="announcement-track">
              <span class="announcement-text">${t('notice_text')}</span>
              <span class="announcement-text" aria-hidden="true">${t('notice_text')}</span>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    <div class="nav-strip-inner nav-strip-compact">
      <div class="category-nav-shell${isMobileCategoryMenuOpen ? ' is-open' : ''}">
        ${categoryDropdownMarkup()}
      </div>
      <nav class="market-nav" aria-label="Marketplace sections">
        <a class="market-nav-link is-active" href="#top" data-home-nav-link="true">${t('nav_home')}</a>
        <a class="market-nav-link" href="#quick-categories">${t('nav_categories')}</a>
        <a class="market-nav-link" href="#section-new-arrivals">${t('nav_new_arrivals')}</a>
        <a class="market-nav-link" href="#section-time-deals">${t('nav_time_deals')}</a>
        <a class="market-nav-link" href="#section-best-sellers">${t('nav_best_sellers')}</a>
        <a class="market-nav-link" href="#section-brand-hall">${t('nav_brand_hall')}</a>
      </nav>
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
  return authState.points;
}

function pointsCashValue(points = 0) {
  return points / 500;
}

function pointsRemainingToRedeem(points = authState.points || 0) {
  return Math.max(0, 2500 - points);
}

function maxCheckoutRedeemPoints() {
  if (!authState.isLoggedIn) return 0;
  const byBalance = availableRedeemPoints();
  const byOrder = Math.floor(cartSubtotal() * 500);
  const capped = Math.min(byBalance, byOrder);
  return capped >= 2500 ? capped : 0;
}

function normalizeRedeemPoints(value) {
  const max = maxCheckoutRedeemPoints();
  if (!max) return 0;
  const numeric = Math.floor(Number(value || 0));
  const stepped = Math.floor(numeric / 5) * 5;
  const clamped = Math.min(Math.max(stepped, 2500), max);
  return clamped >= 2500 ? clamped : 0;
}

function checkoutPointsDiscount() {
  if (!authState.isLoggedIn || !checkoutFormState.redeemEnabled) return 0;
  return pointsCashValue(normalizeRedeemPoints(checkoutFormState.redeemPoints));
}

function checkoutGrandTotal() {
  return Math.max(0, cartSubtotal() + cartDeliveryFee() + checkoutTaxAmount() - checkoutPointsDiscount());
}

function checkoutEstimatedEarnPoints() {
  const redeemDiscount = checkoutFormState.redeemEnabled ? checkoutPointsDiscount() : 0;
  return Math.max(0, Math.floor((cartSubtotal() - redeemDiscount) * 5));
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
      <h3 class="market-product-name">${product.name}</h3>
      <div class="market-product-footer market-product-footer-compact">
        <div class="market-product-price-row${product.compareAtPrice ? "" : " is-single"}">
          ${product.compareAtPrice ? `<span class="market-product-original-price">${money(product.compareAtPrice)}</span>` : `<span class="market-product-original-price is-current">${money(product.price)}</span>`}
          ${product.compareAtPrice ? `<strong class="market-product-sale-price">${money(product.price)}</strong>` : ''}
        </div>
        <button class="button-primary market-product-action market-product-action-mobile-add" type="button" data-card-add-to-cart="${product.id}">Add to cart</button>
        <button class="button-secondary market-product-action market-product-action-single" type="button" data-product-id="${product.id}" ${options.forceReload ? 'data-product-reload="true"' : ''}>View</button>
        <div class="market-product-actions-dual">
          <button class="button-primary market-product-action market-product-action-add" type="button" data-card-add-to-cart="${product.id}">Add to cart</button>
          <button class="button-secondary market-product-action market-product-action-detail" type="button" data-product-id="${product.id}" ${options.forceReload ? 'data-product-reload="true"' : ''}>View details</button>
        </div>
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
          <p class="section-kicker">${t('quick_categories')}</p>
          <h2 class="section-title">${t('shop_by_category')}</h2>
        </div>
      </div>
      <div class="quick-menu-grid quick-menu-rail">
        ${quickCategories.slice(0, 8).map((category) => `
          <button class="quick-category-button is-${category.tone}" type="button" data-home-filter="${category.id}">
            <span class="quick-category-thumb">${translatedCategoryLabel(category.id, category.shortLabel)}</span>
            <span class="quick-category-label">${translatedCategoryLabel(category.id, category.label)}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function homeFilterProducts(key) {
  if (sectionProducts[key]) return sectionProducts[key];
  return quickCategoryProducts[key] || [];
}

function homeFilterMeta(key) {
  const sectionMeta = {
    featured: { eyebrow: t('featured_eyebrow'), title: t('featured_title') },
    best: { eyebrow: t('best_eyebrow'), title: t('best_title') },
    new: { eyebrow: t('new_eyebrow'), title: t('new_title') },
    deals: { eyebrow: t('deals_eyebrow'), title: t('deals_title') },
  };
  if (sectionMeta[key]) return sectionMeta[key];
  if (quickCategoryProducts[key]) {
    return {
      eyebrow: t('quick_category_eyebrow'),
      title: translatedCategoryLabel(key, quickCategoryFilterMeta[key]?.title || key),
    };
  }
  return { eyebrow: t('quick_category_eyebrow'), title: t('filtered_products_suffix') };
}

function sectionSlugForKey(key) {
  if (key === 'featured') return 'vans-pick';
  if (key === 'best') return 'best-sellers';
  if (key === 'new') return 'new-arrivals';
  return 'time-deals';
}

function sectionMarkup(key, eyebrow, title) {
  return `
    <section class="home-section home-product-section" id="section-${sectionSlugForKey(key)}">
      <div class="section-header-row section-header-row-actionable">
        <div class="section-header-copy">
          <p class="section-kicker">${eyebrow}</p>
          <h2 class="section-title">${title}</h2>
        </div>
        <button class="button-secondary section-view-all-button" type="button" data-home-filter="${key}">${t('view_all_product')}</button>
      </div>
      <div class="market-product-grid market-product-rail product-card-rail">
        ${homeFilterProducts(key).map((id) => productCard(productById(id))).join('')}
      </div>
    </section>
  `;
}

function filteredSectionMarkup(key) {
  const layout = activeHomeProductLayout === 'list' ? 'list' : 'grid';
  const section = homeFilterMeta(key);
  return `
    <section class="home-section home-product-section home-product-section-filtered" id="section-filtered-products">
      <div class="section-header-row section-header-row-actionable section-header-row-filtered">
        <div class="section-header-copy">
          <p class="section-kicker">${section.eyebrow}</p>
          <h2 class="section-title">${section.title} ${t('filtered_products_suffix')}</h2>
        </div>
        <button class="button-secondary section-view-all-button section-view-all-button-clear" type="button" data-home-filter-clear="true">${t('show_all_sections')}</button>
      </div>
      <div class="products-toolbar products-toolbar-filtered" id="products-toolbar">
        <div class="products-toolbar__layout" role="group" aria-label="View as">
          <span class="products-toolbar__label">${t('view_as')}</span>
          <button class="products-layout-toggle${layout === 'list' ? ' is-active' : ''}" type="button" data-home-layout="list" aria-pressed="${layout === 'list' ? 'true' : 'false'}" aria-label="${t('list_view')}">${listLayoutIconMarkup()}</button>
          <button class="products-layout-toggle${layout === 'grid' ? ' is-active' : ''}" type="button" data-home-layout="grid" aria-pressed="${layout === 'grid' ? 'true' : 'false'}" aria-label="${t('grid_view')}">${gridLayoutIconMarkup()}</button>
        </div>
      </div>
      <div class="market-product-grid market-product-grid-filtered is-${layout}">
        ${homeFilterProducts(key).map((id) => productCard(productById(id))).join('')}
      </div>
    </section>
  `;
}

function promoBannerMarkup() {
  return `
    <section class="promo-banner">
      <div class="promo-banner-text">
        <p class="section-kicker">${t('community_perks')}</p>
        <h2 class="section-title">${t('join_rewards_title')}</h2>
        <p>${t('join_rewards_copy')}</p>
        <div class="promo-banner-actions">
          <button class="button-primary" type="button">${t('join_community')}</button>
          <button class="button-secondary" type="button">${t('see_rewards')}</button>
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
          <p class="section-kicker">${t('brand_hall')}</p>
          <h2 class="section-title">${t('trusted_sellers')}</h2>
        </div>
      </div>
      <div class="brand-hall-grid">
        ${brandHallItems.map((brand) => `
          <article class="brand-hall-card">
            <h3>${brand.name}</h3>
            <p>${brand.focus}</p>
            <span class="brand-hall-eta">${brand.eta}</span>
          </article>
        `).join("")}
      </div>
      <div class="brand-hall-footer">
        <button class="button-secondary back-to-top-button" type="button" data-home-link="true">${t('back_to_top')}</button>
      </div>
    </section>
  `;
}

function footerContent() {
  if (currentLanguage === 'ko') {
    return {
      brand_title: 'Seoul Basket',
      brand_copy: 'Alberta 지역을 위한 한국 식품 마켓',
      service_area_label: '서비스 지역',
      service_area_value: 'Calgary / Airdrie / Cochrane',
      currency_note: '모든 가격은 별도 표기 없는 한 CAD 기준입니다.',
      support: '고객지원',
      company: '연락처 정보',
      community: '커뮤니티',
      shipping: '배송안내',
      returns: '교환 / 환불 / 취소 정책',
      privacy: '개인정보 처리방침',
      terms: '이용약관',
      faq: '자주 묻는 질문',
      contact: '문의하기',
      contact_hours: '문의 가능 시간: Mon - Fri : 8AM - 5PM',
      legal_name: '법인명',
      operating_as: '운영 상호명',
      address: '주소',
      phone: '전화',
      email: '이메일',
      hours: '운영시간',
      privacy_contact: '개인정보 문의',
      coming_soon: '추후 공개',
      kakao: '카카오톡 채널',
      instagram: '인스타그램',
      language: '언어',
      shipping_title: '배송안내',
      shipping_body: 'Seoul Basket는 Alberta 지역 일부 구역을 대상으로 배송 서비스를 제공합니다.',
      shipping_zone_title: '배송 가능 지역',
      shipping_zone_body: 'Calgary / Airdrie / Cochrane',
      shipping_cutoff_title: '주문 마감',
      shipping_cutoff_body: '주문 마감 시간은 상품 준비 상황 및 배송 일정에 따라 달라질 수 있으며, 상세 일정은 주문 시 안내됩니다.',
      shipping_fee_title: '배송비',
      shipping_fee_body: '배송비는 주문 금액, 배송지, 프로모션 적용 여부에 따라 달라질 수 있습니다. 최종 배송비는 결제 전 단계에서 확인할 수 있습니다.',
      shipping_eta_title: '예상 배송일',
      shipping_eta_body: '예상 배송일은 주문 시점, 상품 재고, 배송 지역에 따라 달라질 수 있습니다. 예상 배송일 또는 배송 가능 일정은 결제 전 안내됩니다.',
      shipping_note_title: '유의사항',
      shipping_note_body: '신선식품 및 냉장/냉동 상품은 배송 지역 및 운영 일정에 따라 주문이 제한될 수 있습니다.',
      returns_title: '교환 / 환불 / 취소 정책',
      returns_cancel_title: '주문 취소',
      returns_cancel_body: '주문 취소는 상품 준비 또는 배송 시작 전까지만 가능할 수 있습니다. 취소 가능 여부는 주문 상태에 따라 달라집니다.',
      returns_refund_title: '교환 및 환불',
      returns_refund_body: '상품 이상, 오배송, 누락 등의 문제가 있는 경우 고객센터로 문의해 주세요. 확인 후 환불 또는 적절한 조치를 안내드립니다.',
      returns_fresh_title: '신선식품 특성',
      returns_fresh_body: '신선식품, 냉장/냉동 상품 등은 상품 특성상 단순 변심에 의한 교환 또는 환불이 제한될 수 있습니다.',
      returns_contact_title: '문의',
      returns_contact_body: '환불 및 교환 문의: info@seoulbasket.ca',
      privacy_title: '개인정보 처리방침',
      privacy_body: 'Seoul Basket는 주문 처리, 고객 응대, 배송 안내, 서비스 운영을 위해 필요한 범위 내에서 개인정보를 수집 및 이용합니다.',
      privacy_collect_title: '수집 항목',
      privacy_collect_body: '이름, 연락처, 이메일 주소, 배송지 주소, 주문 정보, 결제 관련 정보(필요 시)',
      privacy_use_title: '이용 목적',
      privacy_use_body: '주문 처리, 배송 안내, 고객지원, 서비스 개선, 법적 의무 이행',
      privacy_store_title: '보관 및 보호',
      privacy_store_body: '회사는 관련 법령 및 내부 정책에 따라 개인정보를 보호합니다.',
      privacy_contact_body: 'Privacy Contact: privacy@seoulbasket.ca',
      terms_title: '이용약관',
      terms_body: '본 사이트를 이용함으로써 이용자는 Seoul Basket의 서비스 이용 조건에 동의한 것으로 간주됩니다.',
      terms_points_title: '주요 내용',
      terms_points_body: '상품 정보 및 가격은 변경될 수 있습니다. 주문 접수 후 재고 또는 운영 사정에 따라 주문이 조정될 수 있습니다. 배송 가능 지역 및 일정은 회사 운영 정책에 따릅니다. 환불 및 취소는 별도 정책에 따릅니다.',
      terms_currency_title: '통화',
      terms_currency_body: '별도 고지 없는 한 모든 가격은 CAD 기준입니다.',
      faq_title: '자주 묻는 질문',
      faq_q1: 'Q. 어디까지 배송되나요?',
      faq_a1: 'A. 현재 Calgary / Airdrie / Cochrane 지역을 중심으로 운영합니다.',
      faq_q2: 'Q. 배송비는 얼마인가요?',
      faq_a2: 'A. 배송비는 주문 금액 및 배송 지역에 따라 달라지며 결제 전 확인 가능합니다.',
      faq_q3: 'Q. 환불은 어떻게 요청하나요?',
      faq_a3: 'A. 상품 이상 또는 주문 문제가 있는 경우 고객센터로 문의해 주세요.',
      faq_q4: 'Q. 운영시간은 어떻게 되나요?',
      faq_a4: 'A. Mon-Fri 9:00 AM - 6:00 PM MST 입니다.',
      contact_title: '문의하기',
      customer_support: '고객지원',
      copyright: '© 2026 Seoul Basket. All rights reserved.',
    };
  }

  return {
    brand_title: 'Seoul Basket',
    brand_copy: 'Korean grocery market for Alberta shoppers.',
    service_area_label: 'Service Area',
    service_area_value: 'Calgary / Airdrie / Cochrane',
    currency_note: 'All prices are shown in CAD unless otherwise stated.',
    support: 'Support',
    company: 'Contact Information',
    community: 'Community',
    shipping: 'Shipping Policy',
    returns: 'Returns & Refunds',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    faq: 'FAQ',
    contact: 'Contact',
    contact_hours: 'Support hours: Mon - Fri : 8AM - 5PM',
    legal_name: 'Legal Business Name',
    operating_as: 'Operating As',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Customer Service Hours',
    privacy_contact: 'Privacy Contact',
    coming_soon: 'Coming Soon',
    kakao: 'KakaoTalk Channel',
    instagram: 'Instagram',
    language: 'Language',
    shipping_title: 'Shipping Policy',
    shipping_body: 'Seoul Basket provides delivery service to selected Alberta delivery zones.',
    shipping_zone_title: 'Delivery Zones',
    shipping_zone_body: 'Calgary / Airdrie / Cochrane',
    shipping_cutoff_title: 'Order Cutoff',
    shipping_cutoff_body: 'Order cutoff times may vary depending on product preparation and route scheduling. Details are shown during checkout.',
    shipping_fee_title: 'Delivery Fees',
    shipping_fee_body: 'Delivery fees may vary based on order value, address, and active promotions. The final fee is shown before payment.',
    shipping_eta_title: 'Estimated Delivery',
    shipping_eta_body: 'Estimated delivery dates depend on order timing, stock status, and route availability. Delivery timing is shown before checkout is completed.',
    shipping_note_title: 'Important Notes',
    shipping_note_body: 'Fresh, refrigerated, and frozen items may have route-based ordering limits.',
    returns_title: 'Returns & Refunds',
    returns_cancel_title: 'Order Cancellation',
    returns_cancel_body: 'Order cancellation may be available only before packing or dispatch begins. Availability depends on order status.',
    returns_refund_title: 'Returns and Refunds',
    returns_refund_body: 'If there is a product issue, wrong item, or missing item, please contact customer support. We will review and advise on refund or resolution options.',
    returns_fresh_title: 'Perishable Items',
    returns_fresh_body: 'Fresh, chilled, and frozen products may not be eligible for returns or refunds due to change of mind.',
    returns_contact_title: 'Support Contact',
    returns_contact_body: 'Returns and refund inquiries: info@seoulbasket.ca',
    privacy_title: 'Privacy Policy',
    privacy_body: 'Seoul Basket collects and uses personal information only as needed to process orders, provide support, arrange delivery, and operate the service.',
    privacy_collect_title: 'Information We Collect',
    privacy_collect_body: 'Name, contact details, email address, delivery address, order details, and payment-related information where required.',
    privacy_use_title: 'How We Use It',
    privacy_use_body: 'Order processing, delivery updates, customer support, service improvement, and legal compliance.',
    privacy_store_title: 'Protection and Retention',
    privacy_store_body: 'We protect personal information in accordance with applicable laws and internal policies.',
    privacy_contact_body: 'Privacy Contact: privacy@seoulbasket.ca',
    terms_title: 'Terms of Service',
    terms_body: 'By using this site, you agree to the service conditions of Seoul Basket.',
    terms_points_title: 'Key Terms',
    terms_points_body: 'Product details and prices may change. Orders may be adjusted due to stock or operational constraints. Delivery areas and schedules follow our operating policies. Refunds and cancellations are governed by our posted policies.',
    terms_currency_title: 'Currency',
    terms_currency_body: 'Unless otherwise stated, all prices are in CAD.',
    faq_title: 'FAQ',
    faq_q1: 'Q. Where do you deliver?',
    faq_a1: 'A. We currently serve Calgary, Airdrie, Cochrane, and selected nearby Alberta delivery zones.',
    faq_q2: 'Q. How much is delivery?',
    faq_a2: 'A. Delivery fees vary by order value and delivery area, and are shown before checkout.',
    faq_q3: 'Q. How do I request a refund?',
    faq_a3: 'A. Please contact customer support if there is a problem with your order or item.',
    faq_q4: 'Q. What are your support hours?',
    faq_a4: 'A. Mon-Fri 9:00 AM - 6:00 PM MST.',
    contact_title: 'Contact',
    customer_support: 'Customer Support',
    copyright: '© 2026 Seoul Basket. All rights reserved.',
  };
}

function policyRoute(policy) {
  return `#policy-${policy}`;
}

function policyPageContent(policy) {
  const copy = footerContent();
  const map = {
    shipping: {
      kicker: copy.support,
      title: copy.shipping_title,
      intro: copy.shipping_body,
      sections: [
        { title: copy.shipping_zone_title, body: copy.shipping_zone_body },
        { title: copy.shipping_cutoff_title, body: copy.shipping_cutoff_body },
        { title: copy.shipping_fee_title, body: copy.shipping_fee_body },
        { title: copy.shipping_eta_title, body: copy.shipping_eta_body },
        { title: copy.shipping_note_title, body: copy.shipping_note_body },
      ],
    },
    returns: {
      kicker: copy.support,
      title: copy.returns_title,
      intro: '',
      sections: [
        { title: copy.returns_cancel_title, body: copy.returns_cancel_body },
        { title: copy.returns_refund_title, body: copy.returns_refund_body },
        { title: copy.returns_fresh_title, body: copy.returns_fresh_body },
        { title: copy.returns_contact_title, body: copy.returns_contact_body },
      ],
    },
    privacy: {
      kicker: copy.support,
      title: copy.privacy_title,
      intro: copy.privacy_body,
      sections: [
        { title: copy.privacy_collect_title, body: copy.privacy_collect_body },
        { title: copy.privacy_use_title, body: copy.privacy_use_body },
        { title: copy.privacy_store_title, body: copy.privacy_store_body },
        { title: copy.privacy_contact, body: copy.privacy_contact_body },
      ],
    },
    terms: {
      kicker: copy.support,
      title: copy.terms_title,
      intro: copy.terms_body,
      sections: [
        { title: copy.terms_points_title, body: copy.terms_points_body },
        { title: copy.terms_currency_title, body: copy.terms_currency_body },
      ],
    },
    faq: {
      kicker: copy.support,
      title: copy.faq_title,
      intro: '',
      sections: [
        { title: copy.faq_q1, body: copy.faq_a1 },
        { title: copy.faq_q2, body: copy.faq_a2 },
        { title: copy.faq_q3, body: copy.faq_a3 },
        { title: copy.faq_q4, body: copy.faq_a4 },
      ],
    },
    contact: {
      kicker: copy.community,
      title: copy.contact_title,
      intro: '',
      sections: [
        { title: copy.customer_support, body: 'Email: info@seoulbasket.ca\nPhone: 1-800-0000-0000\nHours: Mon-Fri 9:00 AM - 6:00 PM MST' },
        { title: copy.privacy_contact, body: 'Email: privacy@seoulbasket.ca' },
        { title: copy.kakao, body: copy.coming_soon },
        { title: copy.instagram, body: copy.coming_soon },
      ],
    },
  };
  return map[policy] || map.shipping;
}

function footerMarkup() {
  const copy = footerContent();
  return `
    <footer class="footer-preview">
      <div class="footer-brand footer-brand-final">
        <h3>${copy.brand_title}</h3>
        <p>${copy.brand_copy}</p>
        <div class="footer-brand-meta">
          <span>${copy.service_area_value}</span>
          <span>${copy.currency_note}</span>
        </div>
      </div>
      <div class="footer-columns footer-columns-final">
        <div>
          <strong>${copy.support}</strong>
          <a href="${policyRoute('shipping')}">${copy.shipping}</a>
          <a href="${policyRoute('returns')}">${copy.returns}</a>
          <a href="${policyRoute('privacy')}">${copy.privacy}</a>
          <a href="${policyRoute('contact')}">${copy.contact}</a>
        </div>
        <div>
          <strong>${copy.company}</strong>
          <span>17 Auburn Meadows Link SE, Calgary AB, T3M 2E6, Canada</span>
          <span>T. 1-800-0000-0000</span>
          <span>info@seoulbasket.ca</span>
          <span>${copy.contact_hours}</span>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <span>${copy.copyright}</span>
      </div>
    </footer>
  `;
}

function policyPageMarkup(policy) {
  const copy = footerContent();
  const page = policyPageContent(policy);
  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="login-centered-shell policy-centered-shell">
            <article class="login-card policy-card-shell">
              <div class="auth-card-header auth-card-header-center">
                <p class="section-kicker">${page.kicker}</p>
                <h2>${page.title}</h2>
                ${page.intro ? `<p class="auth-subcopy">${page.intro}</p>` : ''}
              </div>
              <div class="policy-section-list">
                ${page.sections.map((section) => `
                  <section class="policy-section-block">
                    <strong>${section.title}</strong>
                    ${String(section.body).split('\n').map((line) => `<p>${line}</p>`).join('')}
                  </section>
                `).join('')}
              </div>
              <div class="policy-page-backlinks">
                <button class="button-secondary" type="button" data-home-link="true">${currentLanguage === 'ko' ? '홈으로' : 'Back Home'}</button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  `;
}

function homeMarkup() {
  const isFilteredHomeView = Boolean(activeHomeSectionFilter);
  const filteredSection = isFilteredHomeView
    ? filteredSectionMarkup(activeHomeSectionFilter)
    : [
        sectionMarkup('featured', t('featured_eyebrow'), t('featured_title')),
        sectionMarkup('best', t('best_eyebrow'), t('best_title')),
        sectionMarkup('new', t('new_eyebrow'), t('new_title')),
        sectionMarkup('deals', t('deals_eyebrow'), t('deals_title')),
      ].join('');

  const homePrimaryContent = isFilteredHomeView
    ? filteredSection
    : [
        heroMarkup(),
        quickMenuMarkup(),
        filteredSection,
        brandHallMarkup(),
        promoBannerMarkup(),
      ].join('');

  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${topChrome()}
        <main class="content-shell">
          <div class="home-stack${isFilteredHomeView ? ' is-filtered-view' : ''}">
            ${homePrimaryContent}
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
                <button class="auth-social-button" type="button">
                  <span class="auth-social-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path fill="#EA4335" d="M12.24 10.285v3.955h5.496c-.242 1.272-.967 2.35-2.058 3.073l3.327 2.582c1.94-1.787 3.056-4.418 3.056-7.555 0-.723-.065-1.418-.185-2.055H12.24z"/>
                      <path fill="#34A853" d="M12 22c2.7 0 4.964-.895 6.618-2.423l-3.327-2.582c-.924.619-2.108.985-3.29.985-2.53 0-4.673-1.708-5.437-4.004H3.126v2.517A9.997 9.997 0 0 0 12 22z"/>
                      <path fill="#4A90E2" d="M6.563 13.976A5.996 5.996 0 0 1 6.259 12c0-.686.118-1.351.304-1.976V7.507H3.126A9.997 9.997 0 0 0 2 12c0 1.61.386 3.13 1.126 4.493l3.437-2.517z"/>
                      <path fill="#FBBC05" d="M12 6.02c1.468 0 2.786.505 3.823 1.498l2.868-2.868C16.959 3.04 14.696 2 12 2 8.126 2 4.777 4.22 3.126 7.507l3.437 2.517C7.327 7.728 9.47 6.02 12 6.02z"/>
                    </svg>
                  </span>
                  <span>Google</span>
                </button>
                <button class="auth-social-button" type="button">
                  <span class="auth-social-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path fill="currentColor" d="M16.365 12.063c-.028-2.969 2.424-4.398 2.535-4.467-1.387-2.028-3.543-2.307-4.299-2.338-1.83-.191-3.571 1.077-4.5 1.077-.93 0-2.361-1.05-3.883-1.021-1.998.029-3.84 1.164-4.869 2.957-2.078 3.6-.53 8.926 1.494 11.85.989 1.429 2.168 3.033 3.716 2.976 1.492-.059 2.054-.964 3.858-.964 1.804 0 2.309.964 3.886.93 1.606-.028 2.621-1.457 3.603-2.89 1.136-1.659 1.603-3.264 1.63-3.347-.035-.011-3.125-1.199-3.171-4.763zm-2.962-7.992c.823-.997 1.38-2.38 1.228-3.761-1.186.048-2.622.789-3.473 1.786-.764.886-1.433 2.293-1.253 3.645 1.322.102 2.674-.674 3.498-1.67z"/>
                    </svg>
                  </span>
                  <span>Apple</span>
                </button>
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
  const tax = checkoutTaxAmount();
  const total = checkoutGrandTotal();
  const estimatedEarnPoints = checkoutEstimatedEarnPoints();
  const redeemablePoints = availableRedeemPoints();
  const suggestions = checkoutFormState.addressOptions || [];
  const billingSuggestions = checkoutFormState.billingAddressOptions || [];
  const errors = checkoutFormState.errors || {};
  const buttonLabel = checkoutFormState.isSubmitting ? "Placing Order..." : "Place Order";
  const maxRedeemPoints = maxCheckoutRedeemPoints();
  const activeRedeemPoints = checkoutFormState.redeemEnabled ? normalizeRedeemPoints(checkoutFormState.redeemPoints || 2500) : 0;
  const projectedBalance = Math.max(0, authState.points - activeRedeemPoints + estimatedEarnPoints);
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
                    <p class="checkout-points-guest-note">${authState.isLoggedIn ? 'You are signed in. Use points now and keep earning reward points on this order.' : 'Log in before you check out to start earning reward points right away on this purchase.'}</p>
                    <div class="cart-summary-rows checkout-summary-rows">
                      ${authState.isLoggedIn ? `
                        <div class="checkout-points-card" data-checkout-points-card="true">
                          <div class="checkout-points-head">
                            <strong>Reward points</strong>
                            <span>${authState.points.toLocaleString()}P available</span>
                          </div>
                          <p class="checkout-points-copy">Earn <strong>${estimatedEarnPoints.toLocaleString()}P</strong> on this order based on the subtotal after any redeemed points. Every 500P gives you ${money(1)} off.</p>
                          <div class="checkout-points-summary-row">
                            <article class="checkout-points-stat">
                              <span>Current points</span>
                              <strong>${authState.points.toLocaleString()}P</strong>
                            </article>
                            <article class="checkout-points-stat">
                              <span>Redeemable amount</span>
                              <strong>${money(pointsCashValue(authState.points))}</strong>
                            </article>
                            <article class="checkout-points-stat">
                              <span>After this order</span>
                              <strong>${projectedBalance.toLocaleString()}P</strong>
                            </article>
                          </div>
                          ${maxRedeemPoints >= 2500 ? `
                            <label class="checkout-redeem-toggle">
                              <input type="checkbox" name="redeemEnabled" ${checkoutFormState.redeemEnabled ? "checked" : ""} />
                              <span>Redeem points at 500P = $1</span>
                            </label>
                            <div class="checkout-points-control-shell">
                              <label class="form-field checkout-points-input-field">
                                <span>Redeem amount</span>
                                <input name="redeemPoints" type="number" min="2500" max="${maxRedeemPoints}" step="5" value="${checkoutFormState.redeemPoints ? normalizeRedeemPoints(checkoutFormState.redeemPoints) : 2500}" ${checkoutFormState.redeemEnabled ? '' : 'disabled'} />
                              </label>
                              <button class="button-secondary checkout-points-max-button" type="button" data-redeem-max="true" ${checkoutFormState.redeemEnabled ? '' : 'disabled'}>
                                <span class="checkout-points-max-icon" aria-hidden="true">+</span>
                                <span>Use full available points</span>
                              </button>
                              <label class="checkout-points-slider-label">
                                <span>Adjust with slider</span>
                                <input class="checkout-points-slider" name="redeemPointsRange" type="range" min="2500" max="${maxRedeemPoints}" step="5" value="${checkoutFormState.redeemPoints ? normalizeRedeemPoints(checkoutFormState.redeemPoints) : 2500}" ${checkoutFormState.redeemEnabled ? '' : 'disabled'} />
                              </label>
                              <div class="checkout-points-applied-card">
                                <span>Discount applied</span>
                                <strong>${checkoutFormState.redeemEnabled ? '-' + money(pointsCashValue(activeRedeemPoints)) : money(0)}</strong>
                                <p>${checkoutFormState.redeemEnabled ? `${activeRedeemPoints.toLocaleString()}P will be redeemed on this order.` : 'Choose an amount, then check the box to apply it to this order.'}</p>
                              </div>
                            </div>
                          ` : `<p class="checkout-points-copy">${authState.points < 2500 ? `You need ${pointsRemainingToRedeem().toLocaleString()}P more before points can be used at checkout.` : 'Add more items to this order to apply at least 2,500P.'}</p>`}
                        </div>
                      ` : ""}
                      <div class="cart-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
                      <div class="cart-summary-row"><span>Discount / points</span><strong>${pointsDiscount ? `-${money(pointsDiscount)}` : money(0)}</strong></div>
                      <div class="cart-summary-row cart-summary-row-tax"><span>${checkoutFormState.shippingProvince ? shippingProvinceTaxLabel(checkoutFormState.shippingProvince) : 'Tax'}</span><strong>${money(tax)}</strong></div>
                      <div class="cart-summary-row cart-summary-row-delivery"><span>Delivery fee</span><strong>${deliveryFee ? money(deliveryFee) : "Free"}</strong></div>
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

function accountOrderHistory() {
  const recent = latestOrderState || createOrderStatusRecord();
  const archived = {
    ...createOrderStatusRecord(),
    id: "SB-260410-1031",
    placedAt: "Apr 10 2026 · 10:31 AM",
    headline: "Delivered",
    summary: "This order was delivered successfully to the saved Calgary address.",
    currentStage: "delivered",
    fulfillmentStatus: "Delivered",
    deliveryDate: "Fri, Apr 10 · Calgary route",
    customerName: authState.name || "Guest shopper",
    phone: "+1 403 555 0148",
    shippingAddress: recent.shippingAddress,
    items: [
      { ...productById(8), quantity: 1, lineTotal: productById(8).price },
      { ...productById(7), quantity: 2, lineTotal: productById(7).price * 2 },
    ],
    subtotal: 40,
    deliveryFee: 9,
    tax: 2.45,
    taxLabel: 'GST (5%)',
    pointsDiscount: 0,
    total: 51.45,
    earnedPoints: 200,
    supportNote: "Delivered orders remain available here for repeat purchase reference.",
    timeline: buildOrderTimeline("delivered", "Fri, Apr 10 · Calgary route"),
  };

  return recent.id === archived.id ? [recent] : [recent, archived];
}

function orderById(orderId = "") {
  const orders = accountOrderHistory();
  return orders.find((order) => order.id === orderId) || orders[0];
}

function profileAddressText() {
  return authState.address || latestOrderState?.shippingAddress || registerFormState.selectedAddress || "No saved address yet.";
}

function profileAddressLine2Text() {
  return authState.addressLine2 || registerFormState.addressLine2 || "Not provided";
}

function profilePostalCodeText() {
  return authState.postalCode || registerFormState.postalCode || "Not provided";
}

function createAccountProfileDraft() {
  const savedAddress = authState.address || "";
  return {
    name: authState.name || "",
    email: authState.email || "",
    address: savedAddress,
    addressQuery: savedAddress,
    selectedAddress: savedAddress,
    addressLine2: authState.addressLine2 || "",
    postalCode: authState.postalCode || "",
    marketingConsent: Boolean(authState.marketingConsent),
    addressOptions: [],
    addressLoading: false,
    addressApiError: "",
  };
}

function validateAccountProfileDraft(draft) {
  const errors = {};
  if (!draft.name.trim()) {
    errors.name = 'Name is required.';
  }
  if (!draft.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!draft.addressQuery.trim()) {
    errors.addressQuery = 'Please search for your address.';
  }
  if (!draft.selectedAddress) {
    errors.selectedAddress = 'Select an address from the suggestions.';
  }
  if (!draft.postalCode.trim()) {
    errors.postalCode = 'Postal code is required.';
  }
  return errors;
}

async function fetchAccountProfileAddressSuggestions(query) {
  const trimmed = query.trim();
  accountProfileState.draft.addressQuery = query;
  accountProfileState.draft.address = query;
  accountProfileState.draft.selectedAddress = '';
  accountProfileState.draft.addressApiError = '';

  if (registerLookupDebounceId) {
    window.clearTimeout(registerLookupDebounceId);
  }

  if (trimmed.length < 3) {
    accountProfileState.draft.addressOptions = [];
    accountProfileState.draft.addressLoading = false;
    rerenderAccountProfileView({ preserveFieldName: 'addressQuery', caretPosition: query.length });
    return;
  }

  accountProfileState.draft.addressLoading = true;
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

      if (requestId != registerLookupRequestId) {
        return;
      }

      const normalizedQuery = normalizeAddressSearch(trimmed);
      accountProfileState.draft.addressOptions = predictions
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
      accountProfileState.draft.addressLoading = false;
      accountProfileState.draft.addressApiError = '';
    } catch (error) {
      if (requestId != registerLookupRequestId) {
        return;
      }
      accountProfileState.draft.addressLoading = false;
      accountProfileState.draft.addressOptions = [];
      accountProfileState.draft.addressApiError = error?.message || 'Google Places could not return address suggestions right now.';
    }

    rerenderAccountProfileView({ preserveFieldName: 'addressQuery', caretPosition: query.length });
  }, 250);
}

async function selectAccountProfileAddress(placeId) {
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
    accountProfileState.draft.selectedAddress = details.formattedAddress;
    accountProfileState.draft.addressQuery = details.formattedAddress;
    accountProfileState.draft.address = details.formattedAddress;
    accountProfileState.draft.postalCode = details.postalCode || accountProfileState.draft.postalCode;
    accountProfileState.draft.addressOptions = [];
    accountProfileState.draft.addressApiError = '';
    accountProfileState.errors = {
      ...accountProfileState.errors,
      addressQuery: '',
      selectedAddress: '',
      postalCode: '',
    };
    registerPlacesSessionToken = new window.google.maps.places.AutocompleteSessionToken();
  } catch (error) {
    accountProfileState.draft.addressApiError = error?.message || 'Google Places could not load the selected address.';
  }

  accountProfileState.draft.addressLoading = false;
  rerenderAccountProfileView({ preserveFieldName: 'addressQuery' });
}

function accountPointsHistory() {
  const history = accountOrderHistory().flatMap((order) => {
    const entries = [
      {
        date: order.placedAt,
        type: 'Earned',
        orderId: order.id,
        detail: `1% back from ${money(Math.max(0, order.subtotal - (order.pointsDiscount || 0)))} subtotal purchase`,
        points: order.earnedPoints,
      },
    ];

    if (order.pointsDiscount) {
      entries.push({
        date: order.placedAt,
        type: 'Used',
        orderId: order.id,
        detail: `Applied ${money(order.pointsDiscount)} at checkout`,
        points: -Math.max(0, Math.round((order.pointsDiscount || 0) * 500)),
      });
    }

    return entries;
  });

  history.push({
    date: 'Apr 1 2026 · 12:00 AM',
    type: 'Expired',
    orderId: 'Policy',
    detail: 'Unused promotional bonus reached its expiry date.',
    points: -300,
  });

  return history;
}

function accountOrdersSectionMarkup() {
  const orders = accountOrderHistory();
  return `
    <section class="account-panel">
      <div class="section-header-copy">
        <p class="section-kicker">Orders</p>
        <h1 class="section-title">Recent orders</h1>
      </div>
      <div class="account-order-list">
        ${orders.map((order) => `
          <article class="account-order-card">
            <div class="account-order-main">
              <div class="account-order-row"><span>Order number</span><strong>${order.id}</strong></div>
              <div class="account-order-row"><span>Date</span><strong>${order.placedAt}</strong></div>
              <div class="account-order-row"><span>Status</span><strong>${order.fulfillmentStatus}</strong></div>
              <div class="account-order-row"><span>Total</span><strong>${money(order.total)}</strong></div>
            </div>
            <button class="button-secondary account-order-action" type="button" data-account-view-order="${order.id}">View details</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function accountPointsSectionMarkup() {
  const available = authState.points || 0;
  const redeemable = availableRedeemPoints();
  const redeemableValue = pointsCashValue(redeemable);
  const nextReward = available >= 2500 ? 'Ready to use at checkout' : `${pointsRemainingToRedeem(available).toLocaleString()}P more needed to start redeeming`;
  const history = accountPointsHistory();
  return `
    <section class="account-panel account-points-panel">
      <div class="section-header-copy">
        <p class="section-kicker">Points</p>
        <h1 class="section-title">Reward Points</h1>
      </div>
      <p class="account-points-intro">Earn 1% back on every purchase, then redeem starting at 2,500 points. Every 500 points gives you ${money(1)} off at checkout.</p>
      <div class="account-points-hero">
        <article class="account-points-balance-card">
          <span class="account-points-card-label">Current points</span>
          <strong>${available.toLocaleString()}P</strong>
          <p>Redeemable amount: <strong>${money(redeemableValue)}</strong></p>
        </article>
        <div class="account-points-summary-grid">
          <article class="account-points-mini-card">
            <span>Ready to redeem</span>
            <strong>${redeemable.toLocaleString()}P</strong>
            <p>${money(pointsCashValue(redeemable))} available now</p>
          </article>
          <article class="account-points-mini-card">
            <span>How earning works</span>
            <strong>1% back</strong>
            <p>Spend more, earn more on each completed order.</p>
          </article>
          <article class="account-points-mini-card">
            <span>Next step</span>
            <strong>${nextReward}</strong>
            <p>Points redeem in 500P steps.</p>
          </article>
        </div>
      </div>
      <div class="account-history-card account-points-rules-card">
        <div class="section-header-copy">
          <p class="section-kicker">How It Works</p>
          <h2 class="section-title">Simple reward rules</h2>
        </div>
        <div class="account-points-rules-grid">
          <div><span>Earn</span><strong>1% of every purchase</strong></div>
          <div><span>Use minimum</span><strong>2,500P</strong></div>
          <div><span>Conversion</span><strong>500P = ${money(1)}</strong></div>
        </div>
      </div>
      <div class="account-history-card">
        <div class="section-header-copy">
          <p class="section-kicker">History</p>
          <h2 class="section-title">Points activity</h2>
        </div>
        <div class="account-points-history-list">
          ${history.map((entry) => `
            <article class="account-points-history-row account-points-history-row-${entry.type.toLowerCase()}">
              <div><span>Date</span><strong>${entry.date}</strong></div>
              <div><span>Type</span><strong>${entry.type}</strong></div>
              <div><span>Reference</span><strong>${entry.orderId}</strong></div>
              <div><span>Details</span><strong>${entry.detail}</strong></div>
              <div><span>Points</span><strong>${entry.points > 0 ? '+' : ''}${entry.points.toLocaleString()}P</strong></div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function accountProfileSectionMarkup() {
  const draft = accountProfileState.isEditing ? accountProfileState.draft : createAccountProfileDraft();
  const errors = accountProfileState.errors || {};
  const suggestions = draft.addressOptions || [];
  return `
    <section class="account-panel">
      <div class="section-header-copy">
        <p class="section-kicker">Profile</p>
        <h1 class="section-title">My Profile</h1>
      </div>
      ${accountProfileState.notice ? `<p class="auth-banner">${accountProfileState.notice}</p>` : ''}
      <form class="account-profile-card account-profile-form" data-account-profile-form="true">
        <label class="account-profile-row${errors.name ? ' is-invalid' : ''}">
          <span>Name <em class="account-required">*</em></span>
          <input name="name" type="text" value="${draft.name}" ${accountProfileState.isEditing ? '' : 'disabled'} />
          ${errors.name ? `<small class="field-error">${errors.name}</small>` : ''}
        </label>
        <label class="account-profile-row${errors.email ? ' is-invalid' : ''}">
          <span>Email <em class="account-required">*</em></span>
          <input name="email" type="email" value="${draft.email}" ${accountProfileState.isEditing ? '' : 'disabled'} />
          ${errors.email ? `<small class="field-error">${errors.email}</small>` : ''}
        </label>
        <label class="account-profile-row form-field-address${errors.addressQuery || errors.selectedAddress || draft.addressApiError ? ' is-invalid' : ''}">
          <span>Address <em class="account-required">*</em></span>
          <div class="address-input-shell">
            <input name="addressQuery" type="text" autocomplete="address-line1" placeholder="Enter street number or address" value="${draft.addressQuery}" ${accountProfileState.isEditing ? '' : 'disabled'} />
            <span class="address-search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="6"></circle>
                <path d="m20 20-3.2-3.2"></path>
              </svg>
            </span>
          </div>
          <div id="places-service-anchor" class="places-attribution-anchor" aria-hidden="true"></div>
          ${errors.addressQuery ? `<small class="field-error">${errors.addressQuery}</small>` : ''}
          ${draft.addressLoading ? `<small class="field-hint">Searching addresses...</small>` : ''}
          ${accountProfileState.isEditing && suggestions.length ? `
            <div class="address-results">
              ${suggestions.map((item) => `<button class="address-option" type="button" data-account-address-option="${item.placeId}"><strong>${item.mainText}</strong><span>${item.secondaryText}</span></button>`).join('')}
            </div>
          ` : accountProfileState.isEditing && draft.addressQuery.trim().length > 0 && !draft.selectedAddress && !draft.addressLoading && !draft.addressApiError ? `<small class="field-hint">No matching address results yet. Try adding more street number or nearby address context.</small>` : ''}
          ${accountProfileState.isEditing && draft.selectedAddress ? `
            <div class="selected-address-card">
              <span class="selected-address-label">Selected Address</span>
              <strong>${draft.selectedAddress}</strong>
            </div>
          ` : ''}
          ${errors.selectedAddress ? `<small class="field-error">${errors.selectedAddress}</small>` : ''}
          ${draft.addressApiError ? `<small class="field-error">${draft.addressApiError}</small>` : ''}
        </label>
        <label class="account-profile-row">
          <span>Address 2</span>
          <input name="addressLine2" type="text" value="${draft.addressLine2}" ${accountProfileState.isEditing ? '' : 'disabled'} />
        </label>
        <label class="account-profile-row${errors.postalCode ? ' is-invalid' : ''}">
          <span>Postal code <em class="account-required">*</em></span>
          <input name="postalCode" type="text" value="${draft.postalCode}" ${accountProfileState.isEditing ? '' : 'disabled'} />
          ${errors.postalCode ? `<small class="field-error">${errors.postalCode}</small>` : ''}
        </label>
        <label class="account-profile-row account-profile-checkbox">
          <span class="account-profile-checkbox-copy">
            <span class="account-profile-checkbox-heading">
              <span>Marketing consent</span>
              <input name="marketingConsent" type="checkbox" ${draft.marketingConsent ? 'checked' : ''} ${accountProfileState.isEditing ? '' : 'disabled'} />
            </span>
            <span class="account-profile-checkbox-description">
              <span class="consent-label consent-label-optional">Optional</span>
              <span class="account-profile-checkbox-text">I agree to receive marketing emails from Seoul Basket, including promotions, product updates, and special offers. I understand that I can unsubscribe at any time.</span>
            </span>
          </span>
        </label>
        <div class="account-profile-actions">
          ${accountProfileState.isEditing ? '<button class="button-secondary" type="button" data-account-profile-cancel="true">Cancel</button><button class="button-primary" type="submit">Save</button>' : '<button class="button-secondary" type="button" data-account-profile-edit="true">Edit</button>'}
        </div>
      </form>
      <div class="account-password-card">
        <div class="section-header-copy">
          <p class="section-kicker">Security</p>
          <h2 class="section-title">Password reset by email</h2>
        </div>
        <p class="account-password-copy">Send a verification email to ${authState.email || 'your saved email'} to start a secure password reset flow.</p>
        ${authState.passwordResetNotice ? `<p class="auth-banner">${authState.passwordResetNotice}</p>` : ''}
        <button class="button-secondary" type="button" data-account-send-reset="true">Send verification email</button>
      </div>
    </section>
  `;
}

function accountMainMarkup(tab) {
  if (tab === "points") return accountPointsSectionMarkup();
  if (tab === "profile") return accountProfileSectionMarkup();
  return accountOrdersSectionMarkup();
}

function accountDashboardMarkup(tab = "orders") {
  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="checkout-centered-shell">
            <div class="checkout-card-shell account-dashboard-card-shell">
              <section class="detail-breadcrumbs">
                <button class="detail-back-link" type="button" data-home-link="true">Home</button>
                <span>/</span>
                <span>My Account</span>
              </section>
              <section class="account-dashboard-shell">
                <aside class="account-sidebar">
                  <button class="account-sidebar-link${tab === "orders" ? " is-active" : ""}" type="button" data-account-nav="orders">My Orders</button>
                  <button class="account-sidebar-link${tab === "points" ? " is-active" : ""}" type="button" data-account-nav="points">My Points</button>
                  <button class="account-sidebar-link${tab === "profile" ? " is-active" : ""}" type="button" data-account-nav="profile">Profile</button>
                  <button class="account-sidebar-link is-logout" type="button" data-account-dashboard-logout="true">Logout</button>
                </aside>
                <div class="account-dashboard-main">
                  ${accountMainMarkup(tab)}
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  `;
}

function orderStatusMarkup(orderId = "") {
  const order = orderById(orderId);
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return `
    <div class="page-shell">
      <div class="market-shell" id="top">
        ${loginTopChrome()}
        <main class="content-shell content-shell-login">
          <section class="checkout-centered-shell">
            <div class="checkout-card-shell">
              <div class="order-status-stack">
                <section class="detail-breadcrumbs">
                  <button class="detail-back-link" type="button" data-home-link="true">Home</button>
                  <span>/</span>
                  <span>Order Status</span>
                </section>

                <section class="order-status-layout">
                  <div class="order-status-left-column">
                    <section class="order-status-hero">
                      <div class="order-status-hero-copy">
                        <p class="section-kicker">Order status</p>
                        <h1 class="section-title">${order.headline}</h1>
                        <p class="order-status-summary">${order.summary}</p>
                        <div class="order-status-pill-row">
                          <span class="order-status-pill is-strong">${order.id}</span>
                          <span class="order-status-pill">${order.paymentStatus}</span>
                          <span class="order-status-pill">${order.fulfillmentStatus}</span>
                        </div>
                      </div>
                      <div class="order-status-meta-card">
                        <div class="order-meta-block">
                          <span>Placed</span>
                          <strong>${conciseOrderPlacedAt(order.placedAt)}</strong>
                        </div>
                        <div class="order-meta-block order-meta-block-delivery">
                          <span>Delivery slot</span>
                          <strong>${conciseDeliverySlotDate(order.deliveryDate)}</strong>
                          <small class="order-meta-subline">${conciseDeliverySlotRoute(order.deliveryDate)}</small>
                        </div>
                      </div>
                    </section>

                    <article class="order-status-section order-status-progress-panel">
                      <div class="section-header-row">
                        <div class="section-header-copy">
                          <p class="section-kicker">Progress</p>
                          <h2 class="section-title">Delivery timeline</h2>
                        </div>
                      </div>
                      <div class="order-timeline">
                        ${order.timeline.map((stage) => `
                          <article class="order-timeline-card is-${stage.state}">
                            <div class="order-timeline-marker">${stage.state === "complete" ? "✓" : stage.state === "current" ? "•" : "○"}</div>
                            <div class="order-timeline-copy">
                              <strong>${stage.label}</strong>
                              <p>${stage.detail}</p>
                            </div>
                            <span class="order-timeline-state">${stage.state === "complete" ? "Done" : stage.state === "current" ? "Now" : "Next"}</span>
                          </article>
                        `).join("")}
                      </div>
                    </article>

                    <article class="order-status-section order-status-items-section">
                      <div class="section-header-row">
                        <div class="section-header-copy">
                          <p class="section-kicker">Items</p>
                          <h2 class="section-title">${itemCount} item${itemCount === 1 ? "" : "s"} in this order</h2>
                        </div>
                      </div>
                      <div class="order-item-list">
                        ${order.items.map((item) => `
                          <article class="order-item-card">
                            <button class="order-item-media" type="button" data-order-product-link="${item.id}">
                              <strong>${item.image}</strong>
                            </button>
                            <div class="order-item-copy">
                              <p class="cart-item-seller">${item.seller}</p>
                              <h3><button class="order-item-name-link" type="button" data-order-product-link="${item.id}">${item.name}</button></h3>
                            </div>
                            <div class="order-item-price">
                              <span>Qty ${item.quantity}</span>
                              <strong>${money(item.lineTotal)}</strong>
                            </div>
                          </article>
                        `).join("")}
                      </div>
                    </article>
                  </div>

                  <aside class="order-status-side">
                    <article class="order-status-card order-status-combined-card">
                      <div class="order-status-combined-block">
                        <p class="section-kicker">Recipient</p>
                        <strong>${order.customerName}</strong>
                        <p>${order.phone}</p>
                      </div>
                      <div class="order-status-combined-block">
                        <p class="section-kicker">Shipping address</p>
                        <strong>${order.shippingAddress}</strong>
                      </div>
                      <div class="order-status-combined-block">
                        <p class="section-kicker">Order summary</p>
                        <div class="cart-summary-rows checkout-summary-rows">
                          <div class="cart-summary-row"><span>Subtotal</span><strong>${money(order.subtotal)}</strong></div>
                          <div class="cart-summary-row"><span>Discount / points</span><strong>${order.pointsDiscount ? `-${money(order.pointsDiscount)}` : money(0)}</strong></div>
                          <div class="cart-summary-row cart-summary-row-tax"><span>${order.taxLabel || 'Tax'}</span><strong>${money(order.tax || 0)}</strong></div>
                          <div class="cart-summary-row cart-summary-row-delivery"><span>Delivery fee</span><strong>${order.deliveryFee ? money(order.deliveryFee) : "Free"}</strong></div>
                          <div class="cart-summary-row cart-summary-total"><span>Total</span><strong>${money(order.total)}</strong></div>
                        </div>
                      </div>
                      <p class="order-status-support">${order.supportNote}</p>
                      <div class="order-status-action-row">
                        <button class="button-secondary" type="button" data-home-link="true">Continue Shopping</button>
                        <button class="button-primary" type="button" data-cart-link="true">View Cart</button>
                      </div>
                    </article>
                  </aside>
                </section>
              </div>
            </div>
          </section>
        </main>
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

function renderOrderStatus(orderId = "") {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = orderStatusMarkup(orderId);
}

function renderAccountDashboard(tab = "orders") {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = accountDashboardMarkup(tab);
}

function renderPolicyPage(policy = "shipping") {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = policyPageMarkup(policy);
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  });
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

function rerenderAccountProfileView(options = {}) {
  renderAccountDashboard('profile');
  attachSharedControls();
  attachAccountDashboardControls();

  const fieldName = options.preserveFieldName || '';
  if (fieldName) {
    const input = document.querySelector('[data-account-profile-form="true"] input[name="' + fieldName + '"]');
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

function scrollHomeToTop() {
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  });
}

function attachSharedControls() {
  document.querySelectorAll("[data-home-link='true']").forEach((button) => {
    button.onclick = () => {
      const route = getCurrentRoute();
      const shouldRefreshHome =
        route.page === 'home' &&
        (
          isAccountMenuOpen ||
          isMobileCategoryMenuOpen ||
          isLanguageMenuOpen ||
          activeHomeSectionFilter !== null ||
          activeHomeProductLayout !== 'grid'
        );

      if (route.page !== 'home') {
        clearSlider();
      }
      currentDetailProductId = null;
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = false;
      activeHomeSectionFilter = null;
      activeHomeProductLayout = 'grid';

      if (route.page === 'home') {
        if (window.location.hash) {
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        }
        if (shouldRefreshHome) {
          renderApp();
        }
        scrollHomeToTop();
        return;
      }
      window.location.hash = "#top";
    };
  });

  document.querySelectorAll("[data-home-nav-link='true']").forEach((link) => {
    link.onclick = (event) => {
      event.preventDefault();

      const route = getCurrentRoute();
      const shouldRefreshHome =
        route.page === 'home' &&
        (
          isAccountMenuOpen ||
          isMobileCategoryMenuOpen ||
          isLanguageMenuOpen ||
          activeHomeSectionFilter !== null ||
          activeHomeProductLayout !== 'grid'
        );

      if (route.page === 'home') {
        isAccountMenuOpen = false;
        isMobileCategoryMenuOpen = false;
        isLanguageMenuOpen = false;
        activeHomeSectionFilter = null;
        activeHomeProductLayout = 'grid';
        if (window.location.hash) {
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        }
        if (shouldRefreshHome) {
          renderApp();
        }
        scrollHomeToTop();
        return;
      }

      clearSlider();
      currentDetailProductId = null;
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = false;
      activeHomeSectionFilter = null;
      activeHomeProductLayout = 'grid';
      window.location.hash = "#top";
    };
  });

  document.querySelectorAll("[data-login-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = false;
      window.location.hash = "#login";
    };
  });

  document.querySelectorAll("[data-register-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = false;
      window.location.hash = "#register";
    };
  });

  document.querySelectorAll("[data-cart-link='true']").forEach((button) => {
    button.onclick = () => {
      clearSlider();
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = false;
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
      isMobileCategoryMenuOpen = false;
      activeMobileCategoryId = null;
      button.blur();
      renderApp();
    };
  });

  document.querySelectorAll("[data-category-toggle='true']").forEach((button) => {
    button.onclick = () => {
      if (!window.matchMedia("(max-width: 760px)").matches) {
        button.blur();
        return;
      }
      isLanguageMenuOpen = false;
      isAccountMenuOpen = false;
      if (isMobileCategoryMenuOpen) {
        isMobileCategoryMenuOpen = false;
        activeMobileCategoryId = null;
      } else {
        isMobileCategoryMenuOpen = true;
        activeMobileCategoryId = null;
      }
      renderApp();
    };
  });

  document.querySelectorAll('[data-mobile-category-open]').forEach((button) => {
    button.onclick = () => {
      const nextId = button.getAttribute('data-mobile-category-open');
      if (!nextId) return;
      activeMobileCategoryId = nextId;
      renderApp();
    };
  });

  document.querySelectorAll('[data-mobile-category-back="true"]').forEach((button) => {
    button.onclick = () => {
      activeMobileCategoryId = null;
      renderApp();
    };
  });

  document.querySelectorAll('[data-mobile-category-close="true"]').forEach((button) => {
    button.onclick = () => {
      isMobileCategoryMenuOpen = false;
      activeMobileCategoryId = null;
      renderApp();
    };
  });

  document.querySelectorAll("[data-account-toggle='true']").forEach((button) => {
    button.onclick = () => {
      isLanguageMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      activeMobileCategoryId = null;
      isAccountMenuOpen = !isAccountMenuOpen;
      renderApp();
    };
  });

  document.querySelectorAll("[data-language-toggle='true']").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      isAccountMenuOpen = false;
      isMobileCategoryMenuOpen = false;
      isLanguageMenuOpen = !isLanguageMenuOpen;
      renderApp();
    };
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const language = button.getAttribute("data-language-option");
      if (language !== "en" && language !== "ko") return;
      currentLanguage = language;
      persistLanguage(language);
      isLanguageMenuOpen = false;
      renderApp();
    };
  });

  document.querySelectorAll('[data-home-filter]').forEach((button) => {
    button.onclick = () => {
      const key = button.getAttribute('data-home-filter');
      if (!key || !homeFilterProducts(key).length) return;
      activeHomeSectionFilter = key;
      activeHomeProductLayout = 'grid';
      isMobileCategoryMenuOpen = false;
      activeMobileCategoryId = null;
      isAccountMenuOpen = false;
      renderApp();
      window.requestAnimationFrame(() => {
        document.getElementById('section-filtered-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
  });

  document.querySelectorAll('.quick-category-button[data-home-filter]').forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const key = button.getAttribute('data-home-filter');
      if (!key || !homeFilterProducts(key).length) return;
      activeHomeSectionFilter = key;
      activeHomeProductLayout = 'grid';
      isMobileCategoryMenuOpen = false;
      activeMobileCategoryId = null;
      isAccountMenuOpen = false;
      renderApp();
      window.requestAnimationFrame(() => {
        document.getElementById('section-filtered-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
  });

  document.querySelectorAll('[data-home-filter-clear="true"]').forEach((button) => {
    button.onclick = () => {
      activeHomeSectionFilter = null;
      activeHomeProductLayout = 'grid';
      activeMobileCategoryId = null;
      renderApp();
      window.requestAnimationFrame(() => {
        document.getElementById('quick-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
  });

  document.querySelectorAll('[data-home-layout]').forEach((button) => {
    button.onclick = () => {
      const layout = button.getAttribute('data-home-layout');
      if (layout !== 'list' && layout !== 'grid') return;
      activeHomeProductLayout = layout;
      renderApp();
      window.requestAnimationFrame(() => {
        document.getElementById('products-toolbar')?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      });
    };
  });

  document.querySelectorAll('[data-card-add-to-cart]').forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const productId = Number(button.getAttribute('data-card-add-to-cart'));
      if (!productId) return;
      addProductToCart(productId, 1);
      renderApp();
      window.requestAnimationFrame(() => {
        document.getElementById('products-toolbar')?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      });
    };
  });

  document.querySelectorAll("[data-account-action]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const action = button.getAttribute('data-account-action');
      isAccountMenuOpen = false;
      if (action === 'logout') {
        authState = { isLoggedIn: false, email: '', name: '', points: 0, address: '', addressLine2: '', postalCode: '', marketingConsent: false, requiredConsent: false, passwordResetNotice: '' };
        currentDetailProductId = null;
        clearSlider();
        navigateToRoute('#top');
        return;
      }
      if (action === 'orders') {
        clearSlider();
        navigateToRoute(accountRoute('orders'));
        return;
      }
      if (action === 'points') {
        clearSlider();
        navigateToRoute(accountRoute('points'));
        return;
      }
      if (action === 'profile') {
        clearSlider();
        navigateToRoute(accountRoute('profile'));
        return;
      }
      renderApp();
    };
  });

  document.querySelectorAll('[data-order-product-link]').forEach((button) => {
    button.onclick = () => {
      const id = Number(button.getAttribute('data-order-product-link'));
      if (!id) return;
      clearSlider();
      window.location.hash = productRoute(id);
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
        name: registerFormState.name || accountDisplayName(loginFormState.email),
        points: 2800,
        address: registerFormState.selectedAddress || registerFormState.addressQuery || "",
        addressLine2: registerFormState.addressLine2 || "",
        postalCode: registerFormState.postalCode || "",
        marketingConsent: Boolean(registerFormState.marketingConsent),
        requiredConsent: Boolean(registerFormState.requiredConsent),
        passwordResetNotice: "",
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

function attachAccountDashboardControls() {
  document.querySelectorAll('[data-account-nav]').forEach((button) => {
    button.onclick = () => {
      const tab = button.getAttribute('data-account-nav') || 'orders';
      clearSlider();
      navigateToRoute(accountRoute(tab));
    };
  });

  document.querySelectorAll('[data-account-view-order]').forEach((button) => {
    button.onclick = () => {
      const orderId = button.getAttribute('data-account-view-order') || '';
      clearSlider();
      navigateToRoute(orderStatusRoute(orderId));
    };
  });

  document.querySelectorAll('[data-account-dashboard-logout="true"]').forEach((button) => {
    button.onclick = () => {
      authState = { isLoggedIn: false, email: '', name: '', points: 0, address: '', addressLine2: '', postalCode: '', marketingConsent: false, requiredConsent: false, passwordResetNotice: '' };
      currentDetailProductId = null;
      isAccountMenuOpen = false;
      clearSlider();
      navigateToRoute('#top');
    };
  });

  document.querySelectorAll('[data-account-send-reset="true"]').forEach((button) => {
    button.onclick = () => {
      authState.passwordResetNotice = authState.email
        ? `Verification email queued for ${authState.email}. Connect a real auth provider to send the live reset link.`
        : 'Save a valid email address first to send a password reset email.';
      renderAccountDashboard('profile');
      attachSharedControls();
      attachAccountDashboardControls();
    };
  });

  document.querySelectorAll('[data-account-profile-edit="true"]').forEach((button) => {
    button.onclick = () => {
      accountProfileState.isEditing = true;
      accountProfileState.notice = '';
      accountProfileState.errors = {};
      accountProfileState.draft = createAccountProfileDraft();
      renderAccountDashboard('profile');
      attachSharedControls();
      attachAccountDashboardControls();
    };
  });

  document.querySelectorAll('[data-account-profile-cancel="true"]').forEach((button) => {
    button.onclick = () => {
      accountProfileState.isEditing = false;
      accountProfileState.notice = '';
      accountProfileState.errors = {};
      accountProfileState.draft = createAccountProfileDraft();
      renderAccountDashboard('profile');
      attachSharedControls();
      attachAccountDashboardControls();
    };
  });

  const profileForm = document.querySelector('[data-account-profile-form="true"]');
  if (profileForm) {
    profileForm.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', () => {
        if (input.type === 'checkbox') {
          accountProfileState.draft[input.name] = input.checked;
        } else {
          accountProfileState.draft[input.name] = input.value;
        }
        if (input.name === 'postalCode') {
          accountProfileState.draft.postalCode = accountProfileState.draft.postalCode.toUpperCase();
          input.value = accountProfileState.draft.postalCode;
        }
        if (input.name === 'addressQuery') {
          accountProfileState.draft.address = input.value;
          accountProfileState.draft.selectedAddress = '';
          accountProfileState.draft.addressApiError = '';
          if (accountProfileState.errors.addressQuery || accountProfileState.errors.selectedAddress) {
            accountProfileState.errors = { ...accountProfileState.errors, addressQuery: '', selectedAddress: '' };
          }
          accountProfileState.notice = '';
          fetchAccountProfileAddressSuggestions(input.value);
          return;
        }
        if (accountProfileState.errors[input.name]) {
          accountProfileState.errors = { ...accountProfileState.errors, [input.name]: '' };
        }
        accountProfileState.notice = '';
      });
    });

    document.querySelectorAll('[data-account-address-option]').forEach((button) => {
      button.onclick = () => {
        const placeId = button.getAttribute('data-account-address-option') || '';
        if (placeId) {
          selectAccountProfileAddress(placeId);
        }
      };
    });

    profileForm.onsubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(profileForm);
      const addressQuery = String(formData.get('addressQuery') || '').trim();
      const draft = {
        ...accountProfileState.draft,
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        addressQuery,
        address: accountProfileState.draft.selectedAddress || addressQuery,
        addressLine2: String(formData.get('addressLine2') || '').trim(),
        postalCode: String(formData.get('postalCode') || '').trim().toUpperCase(),
        marketingConsent: Boolean(formData.get('marketingConsent')),
      };
      const errors = validateAccountProfileDraft(draft);
      if (Object.keys(errors).length) {
        accountProfileState.isEditing = true;
        accountProfileState.notice = '';
        accountProfileState.errors = errors;
        accountProfileState.draft = draft;
        rerenderAccountProfileView();
        return;
      }
      authState.name = draft.name;
      authState.email = draft.email;
      authState.address = draft.address;
      authState.addressLine2 = draft.addressLine2;
      authState.postalCode = draft.postalCode;
      authState.marketingConsent = draft.marketingConsent;
      accountProfileState.isEditing = false;
      accountProfileState.notice = 'Profile details saved.';
      accountProfileState.errors = {};
      accountProfileState.draft = createAccountProfileDraft();
      renderAccountDashboard('profile');
      attachSharedControls();
      attachAccountDashboardControls();
    };
  }
}

function attachCheckoutControls() {
  const form = document.querySelector('[data-checkout-form="true"]');
  if (!form) return;

  form.querySelectorAll('input, select').forEach((input) => {
    const syncField = () => {
      if (input instanceof HTMLInputElement && input.type === 'checkbox') {
        checkoutFormState[input.name] = input.checked;
      } else if (input.name === 'redeemPoints' || input.name === 'redeemPointsRange') {
        checkoutFormState.redeemPoints = normalizeRedeemPoints(input.value || checkoutFormState.redeemPoints || 2500);
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
      if (input.name === 'shippingProvince') {
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
        return;
      }

      if (input.name === 'redeemEnabled') {
        checkoutFormState.redeemEnabled = input.checked;
        checkoutFormState.redeemPoints = normalizeRedeemPoints(checkoutFormState.redeemPoints || 2500);
      }
      if (checkoutFormState.errors[input.name]) {
        checkoutFormState.errors = { ...checkoutFormState.errors, [input.name]: '' };
      }
      checkoutFormState.banner = '';
      if (input.name === 'redeemEnabled' || input.name === 'redeemPoints' || input.name === 'redeemPointsRange') {
        renderCheckout();
        attachSharedControls();
        attachCheckoutControls();
      }
    };

    input.addEventListener('input', syncField);
    input.addEventListener('change', syncField);
  });

  const rerenderCheckoutPoints = () => {
    renderCheckout();
    attachSharedControls();
    attachCheckoutControls();
  };

  const redeemToggle = document.querySelector('[data-checkout-points-card="true"] input[name="redeemEnabled"]');
  if (redeemToggle instanceof HTMLInputElement) {
    const syncRedeemToggle = () => {
      checkoutFormState.redeemEnabled = redeemToggle.checked;
      checkoutFormState.redeemPoints = normalizeRedeemPoints(checkoutFormState.redeemPoints || redeemPointsInput?.value || redeemPointsRange?.value || 2500);
      checkoutFormState.banner = '';
      rerenderCheckoutPoints();
    };
    redeemToggle.onclick = syncRedeemToggle;
    redeemToggle.onchange = syncRedeemToggle;
  }

  const redeemPointsInput = document.querySelector('[data-checkout-points-card="true"] input[name="redeemPoints"]');
  if (redeemPointsInput instanceof HTMLInputElement) {
    const syncRedeemPoints = () => {
      checkoutFormState.redeemPoints = normalizeRedeemPoints(redeemPointsInput.value || checkoutFormState.redeemPoints || 2500);
      checkoutFormState.banner = '';
      if (redeemPointsRange instanceof HTMLInputElement) redeemPointsRange.value = String(checkoutFormState.redeemPoints || 2500);
      if (redeemPointsInput instanceof HTMLInputElement) redeemPointsInput.value = String(checkoutFormState.redeemPoints || 2500);
      rerenderCheckoutPoints();
    };
    redeemPointsInput.oninput = syncRedeemPoints;
    redeemPointsInput.onchange = syncRedeemPoints;
  }

  const redeemPointsRange = document.querySelector('[data-checkout-points-card="true"] input[name="redeemPointsRange"]');
  if (redeemPointsRange instanceof HTMLInputElement) {
    const syncRedeemRange = () => {
      checkoutFormState.redeemPoints = normalizeRedeemPoints(redeemPointsRange.value || checkoutFormState.redeemPoints || 2500);
      checkoutFormState.banner = '';
      if (redeemPointsInput instanceof HTMLInputElement) redeemPointsInput.value = String(checkoutFormState.redeemPoints || 2500);
      if (redeemPointsRange instanceof HTMLInputElement) redeemPointsRange.value = String(checkoutFormState.redeemPoints || 2500);
      rerenderCheckoutPoints();
    };
    redeemPointsRange.oninput = syncRedeemRange;
    redeemPointsRange.onchange = syncRedeemRange;
  }

  const redeemMaxButton = document.querySelector('[data-redeem-max="true"]');
  if (redeemMaxButton instanceof HTMLButtonElement) {
    redeemMaxButton.onclick = () => {
      checkoutFormState.redeemPoints = maxCheckoutRedeemPoints();
      checkoutFormState.banner = '';
      if (redeemPointsInput instanceof HTMLInputElement) redeemPointsInput.value = String(checkoutFormState.redeemPoints || 2500);
      if (redeemPointsRange instanceof HTMLInputElement) redeemPointsRange.value = String(checkoutFormState.redeemPoints || 2500);
      rerenderCheckoutPoints();
    };
  }

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
        latestOrderState = buildOrderFromCheckout();
        if (authState.isLoggedIn) {
          authState.points = Math.max(0, authState.points - (checkoutFormState.redeemEnabled ? normalizeRedeemPoints(checkoutFormState.redeemPoints) : 0)) + latestOrderState.earnedPoints;
        }
        cartState = [];
        resetCheckoutFormState();
        clearSlider();
        navigateToRoute(orderStatusRoute(latestOrderState.id));
      }, 1100);
    };
  });
}

function renderApp() {
  document.documentElement.lang = currentLanguage;
  document.body?.setAttribute('data-language', currentLanguage);

  const route = getCurrentRoute();
  if (route.page !== "home") {
    isMobileCategoryMenuOpen = false;
    activeMobileCategoryId = null;
    activeHomeSectionFilter = null;
    activeHomeProductLayout = 'grid';
  }
  document.body?.classList.toggle(
    'mobile-category-drawer-open',
    isMobileCategoryMenuOpen && typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
  );
  if (route.page === "login") {
    clearSlider();
    resetLoginFormState();
    renderLogin();
    document.title = t('title_login');
    attachSharedControls();
    attachLoginControls();
    return;
  }

  if (route.page === "register") {
    clearSlider();
    resetRegisterFormState();
    renderRegister();
    document.title = t('title_register');
    attachSharedControls();
    attachRegisterControls();
    return;
  }

  if (route.page === "product") {
    clearSlider();
    renderProductDetail(route.id);
    document.title = t('title_product');
    attachSharedControls();
    attachProductDetailControls(route.id);
    focusProductDetailBlock();
    return;
  }

  if (route.page === "cart") {
    clearSlider();
    renderCart();
    document.title = t('title_cart');
    attachSharedControls();
    attachCartControls();
    return;
  }

  if (route.page === "checkout") {
    clearSlider();
    resetCheckoutFormState();
    renderCheckout();
    document.title = t('title_checkout');
    attachSharedControls();
    attachCheckoutControls();
    return;
  }

  if (route.page === "account") {
    clearSlider();
    if (!authState.isLoggedIn) {
      navigateToRoute('#login');
      return;
    }
    renderAccountDashboard(route.tab || 'orders');
    document.title = t('title_account');
    attachSharedControls();
    attachAccountDashboardControls();
    return;
  }

  if (route.page === "order-status") {
    clearSlider();
    renderOrderStatus(route.id || '');
    document.title = t('title_order_status');
    attachSharedControls();
    return;
  }

  if (route.page === "policy") {
    clearSlider();
    renderPolicyPage(route.policy || 'shipping');
    document.title = `Seoul Basket ${policyPageContent(route.policy || 'shipping').title}`;
    attachSharedControls();
    return;
  }

  renderHome();
  document.title = t('title_home');
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
