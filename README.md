# RCH Chill 'n' Thrill — Updated Beginner Website

A simple five-page restaurant demo made with **HTML, CSS and vanilla JavaScript**.

## What's upgraded?

- **No blocking alerts.** Clicking **Add to Cart** displays a small emoji notification at the **bottom of the page** that disappears automatically after about 3 seconds.
- **Demo Checkout**, **Clear Cart**, **Remove**, and the **Feedback form** now use the same bottom notifications.
- **Real food photography** replaces the old AI/cartoon illustrations. The pictures come from **Pexels**, are provided as online CDN image links, and are **not photos of RCH or its actual food**.
- A refreshed orange/cream design, attractive food cards, neat buttons, clearer pricing and responsive layout.
- A simple **menu search box** works alongside all nine food category filters.
- Your existing **localStorage cart** still works across the pages, even after refresh.

## How to run

1. Extract the ZIP into a new folder (don't mix it with the old project's cartoon `images` files).
2. Open the `RCH-Restaurant-Website-Updated` folder using VS Code.
3. Install the **Live Server** extension if you don't already have it.
4. Right-click `index.html` or `login.html` and choose **Open with Live Server**.
5. For the demo login, enter any non-empty username and password (do not use actual credentials).
6. Click Menu, choose a filter, search for a dish, then click **+ Add to Cart**. Watch the small message appear at the bottom while you can continue clicking.
7. Open Cart to change quantities and see the total, then click **Demo Checkout** to see the non-blocking notice.

**Internet needed for photos:** Food photographs load from `https://images.pexels.com` in your browser. The HTML, CSS, JavaScript and cart functionality run locally, but photos will not appear when you are offline. You can replace those online photo URLs with your own local restaurant photos later.

## How the bottom popup works

In `script.js`, the beginner-friendly function `showToast(message, emoji)`:

1. Creates a small message box if it doesn't exist.
2. Sets its text to the emoji plus the message.
3. Makes it visible using the `.show` CSS class.
4. Calls `setTimeout()` to hide it after 2,800 milliseconds.

The CSS `.toast` class uses `position: fixed`, `bottom: 24px`, and `left: 50%`, keeping the message at the bottom of the screen. Unlike the built-in JavaScript `alert()`, this message does **not pause the website**.

Example use:

```javascript
showToast("Poori added to cart!", "🛒");
```

## Key files

- `index.html` — opens `login.html`.
- `login.html` — simple demonstration login.
- `home.html` — welcome section, popular foods and labeled demo offers.
- `menu.html` — photo cards, nine category filters and name search.
- `cart.html` — items, quantity buttons, total calculation, non-blocking checkout message.
- `contact.html` — restaurant details and front-end-only feedback form.
- `style.css` — shared styling and mobile-friendly layouts.
- `script.js` — menu data, storage, filters, cart, toast and feedback logic.
- `IMAGE_SOURCES.txt` — Pexels source links for the stock photos used.

## Example manual checks

- [ ] Empty login fields display an inline error.
- [ ] Filled login fields open the Home page.
- [ ] All four main navigation tabs open their separate pages.
- [ ] Searching `biryani` shows two dishes.
- [ ] Selecting Vegetarian shows 13 sample dishes; Non-Vegetarian shows 5.
- [ ] Adding Poori twice produces Cart count 2 and total ₹70.
- [ ] Clicking + once in the Cart increases Poori total to ₹105.
- [ ] Clicking Demo Checkout shows an emoji message at the bottom, without an OK button.
- [ ] Clear Cart immediately removes food and displays a bottom message.
- [ ] Feedback form displays a bottom success message and resets.
- [ ] No JavaScript `alert()` or `confirm()` popup interrupts the site.

## Demo data and image notes

Only the supplied reference prices **Poori ₹35, Chapati ₹35 and Veg Biryani ₹45** have been treated as supplied restaurant menu information. Other prices, menu entries, promotions and events are project examples. All photos are **third-party stock photographs**; some depict a close visual match rather than the exact dish (for example, Chicken 65, Onion Dosa and Gobi 65). They should not be described as verified restaurant menu photography.

The photos come from Pexels and are covered by the Pexels free photo license: https://www.pexels.com/license/ . See `IMAGE_SOURCES.txt`.
