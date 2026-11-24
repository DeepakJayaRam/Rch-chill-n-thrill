# RCH Chill 'n' Thrill

A simple five-page restaurant website built with **HTML, CSS, and vanilla JavaScript**.

## What's new

- **Smooth bottom notifications.** Adding items to the cart, checking out, clearing the cart, removing items, or submitting feedback shows a small message with an emoji at the bottom of the screen that fades out after about 3 seconds—no blocking browser popups.
- **Food photos from Pexels.** Replaced the old illustrations with real food photos loaded via Pexels links (keep in mind these are stock photos rather than actual photos from RCH).
- **Refreshed look.** Orange and cream styling, cleaner cards, clearer pricing, and mobile-friendly layouts.
- **Search and filters.** Search dishes by name or filter across nine food categories.
- **Persistent cart.** Uses `localStorage` so your cart stays saved across pages and refreshes.

## How to run

1. Extract the files into a new folder (keep them separate from any older project files).
2. Open the project folder in VS Code.
3. Install the **Live Server** extension if you haven't already.
4. Right-click `index.html` or `login.html` and pick **Open with Live Server**.
5. Type any non-empty username and password on the login screen (no real login is needed).
6. Go to the Menu, try a category filter or search, and click **+ Add to Cart** to watch the bottom notification appear without interrupting you.
7. Open the Cart to adjust quantities, check the total, and test the checkout flow.

**Note on internet access:** The photos load from `https://images.pexels.com`, so you'll need an internet connection to see them. Everything else runs locally, and you can swap in your own local images whenever you want.

## How the bottom popup works

`script.js` includes a `showToast(message, emoji)` helper:

1. Creates a toast element if one isn't on the page yet.
2. Adds the emoji and message text.
3. Shows it using the `.show` class.
4. Hides it automatically after 2,800 ms using `setTimeout()`.

In CSS, `.toast` is fixed near the bottom center (`position: fixed`, `bottom: 24px`, `left: 50%`), so it never freezes the page like `alert()`.

```javascript
showToast("Poori added to cart!", "🛒");