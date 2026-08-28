# Adeeb Accessories — Premium Storefront

Open `index.html` to run the site.

Included:
- Real product photography via Unsplash image URLs
- Individual product pages (`product.html?id=...`)
- Persistent cart with quantity controls using localStorage
- Search, category filtering and sorting
- Responsive mobile navigation/layout
- Checkout form with generated order ID and local order storage
- Device-local demo login/signup
- Premium editorial-style visual design

Important before a real launch:
1. Replace the WhatsApp link in `index.html` with your actual business number.
2. Replace the support email/phone.
3. A GitHub Pages site is static. The included checkout records orders in the browser only; it does NOT process card payments or securely store customer orders.
4. For real payments/orders/authentication, connect a backend/payment provider such as Stripe/SSLCommerz and a hosted database/auth service. Never store passwords in localStorage in production.
