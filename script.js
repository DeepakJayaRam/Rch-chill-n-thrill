// Menu data for a college demo. Only the first three prices are reference prices.
// Each photo is a real Pexels food photograph, not a photo from RCH.
var menuItems = [
  {id: 1, name: "Poori", price: 35, photo: 31150256, type: "veg", categories: ["veg", "tiffins"], description: "Soft and puffy fried bread."},
  {id: 2, name: "Chapati", price: 35, photo: 5434693, type: "veg", categories: ["veg", "roti"], description: "Warm and wholesome Indian roti."},
  {id: 3, name: "Veg Biryani", price: 45, photo: 7593230, type: "veg", categories: ["veg", "main"], description: "Flavorful rice with vegetables."},
  {id: 4, name: "Masala Dosa", price: 50, photo: 20422129, type: "veg", categories: ["veg", "tiffins"], description: "Crispy dosa with potato masala."},
  {id: 5, name: "Idli", price: 30, photo: 31199041, type: "veg", categories: ["veg", "tiffins"], description: "Soft idlis with chutney and sambar."},
  {id: 6, name: "Onion Dosa", price: 55, photo: 20422123, type: "veg", categories: ["veg", "tiffins"], description: "A delicious dosa with onion topping."},
  {id: 7, name: "Veg Fried Rice", price: 65, photo: 32489477, type: "veg", categories: ["veg", "main"], description: "Rice tossed with fresh vegetables."},
  {id: 8, name: "Egg Fried Rice", price: 80, photo: 32845321, type: "nonveg", categories: ["nonveg", "main"], description: "Fried rice with egg and vegetables."},
  {id: 9, name: "Chicken Fried Rice", price: 110, photo: 34668501, type: "nonveg", categories: ["nonveg", "main"], description: "A hearty plate of chicken fried rice."},
  {id: 10, name: "Chicken Biryani", price: 140, photo: 12737817, type: "nonveg", categories: ["nonveg", "main"], description: "Aromatic chicken and spiced rice."},
  {id: 11, name: "Veg Manchurian", price: 85, photo: 28674530, type: "veg", categories: ["veg", "starters"], description: "Crispy vegetable balls with sauce."},
  {id: 12, name: "Chicken 65", price: 120, photo: 27497768, type: "nonveg", categories: ["nonveg", "starters"], description: "Spicy, crispy chicken bites."},
  {id: 13, name: "Paneer Curry", price: 100, photo: 9609838, type: "veg", categories: ["veg", "roti", "main"], description: "Tender paneer in a rich curry."},
  {id: 14, name: "Egg Curry", price: 80, photo: 29145821, type: "nonveg", categories: ["nonveg", "roti", "main"], description: "Boiled eggs in savory gravy."},
  {id: 15, name: "French Fries", price: 60, photo: 8272619, type: "veg", categories: ["veg", "sides"], description: "Golden, crispy potato fries."},
  {id: 16, name: "Gobi 65", price: 70, photo: 35071828, type: "veg", categories: ["veg", "starters", "sides"], description: "Spicy, crunchy cauliflower bites."},
  {id: 17, name: "Lemon Soda", price: 30, photo: 9996446, type: "veg", categories: ["veg", "drinks"], description: "A cool and fizzy citrus drink."},
  {id: 18, name: "Masala Tea", price: 20, photo: 29650995, type: "veg", categories: ["veg", "drinks"], description: "A warm cup of spiced Indian chai."}
];

var cart = JSON.parse(localStorage.getItem("rchCart") || "[]");
var selectedRating = 0;
var currentCategory = "all";
var toastTimer;

// Get a link to a real food photograph from Pexels.
function photoUrl(photoId) {
  return "https://images.pexels.com/photos/" + photoId + "/pexels-photo-" + photoId + ".jpeg?auto=compress&cs=tinysrgb&w=900";
}

// Bottom message. Unlike alert(), this never freezes the website.
function showToast(message, emoji) {
  var toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = (emoji || "✅") + "  " + message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2800);
}

function findFood(id) {
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].id === id) return menuItems[i];
  }
  return null;
}

function totalItems() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) count += cart[i].quantity;
  return count;
}

function saveCart() {
  localStorage.setItem("rchCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  var label = document.getElementById("cartCount");
  if (label) label.textContent = totalItems();
}

function logout() {
  localStorage.removeItem("rchLoggedIn");
  window.location.href = "login.html";
}

// This is only a demo login. There is no real password checking.
var loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var message = document.getElementById("loginMessage");
    if (username === "" || password === "") {
      message.textContent = "Please enter your username and password.";
      return;
    }
    message.textContent = "Login Successful! Welcome to RCH Chill 'n' Thrill.";
    localStorage.setItem("rchLoggedIn", "yes");
    showToast("Welcome to RCH Chill 'n' Thrill!", "🎉");
    setTimeout(function () { window.location.href = "home.html"; }, 900);
  });
}

// Make one food card. Used by both Home and Menu pages.
function foodCard(food) {
  var typeText = food.type === "veg" ? "🟢 Veg" : "🔴 Non-Veg";
  var html = '<article class="food-card">';
  html += '<img loading="lazy" src="' + photoUrl(food.photo) + '" alt="Stock food photo representing ' + food.name + '">';
  html += '<div class="food-card-content">';
  html += '<div class="food-card-title"><h3>' + food.name + '</h3><span class="food-type ' + food.type + '">' + typeText + '</span></div>';
  html += '<p>' + food.description + '</p>';
  html += '<div class="food-card-bottom"><span class="price">₹' + food.price + '</span>';
  html += '<button type="button" class="button" onclick="addToCart(' + food.id + ')">+ Add to Cart</button></div>';
  html += '</div></article>';
  return html;
}

// Display food matching category and the optional search text.
function showMenu() {
  var grid = document.getElementById("menuGrid");
  if (!grid) return;
  var searchBox = document.getElementById("menuSearch");
  var searchText = searchBox ? searchBox.value.toLowerCase().trim() : "";
  grid.innerHTML = "";
  var count = 0;
  for (var i = 0; i < menuItems.length; i++) {
    var food = menuItems[i];
    var correctCategory = currentCategory === "all" || food.categories.includes(currentCategory);
    var correctSearch = food.name.toLowerCase().includes(searchText);
    if (correctCategory && correctSearch) {
      grid.innerHTML += foodCard(food);
      count++;
    }
  }
  if (count === 0) grid.innerHTML = '<p class="no-results">😕 No dishes found. Try another search or filter!</p>';
  var countMessage = document.getElementById("menuResultCount");
  if (countMessage) countMessage.textContent = "Showing " + count + " of " + menuItems.length + " dishes";
}

function filterMenu(category, clickedButton) {
  currentCategory = category;
  var buttons = document.querySelectorAll(".filter-button");
  for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("selected");
  clickedButton.classList.add("selected");
  showMenu();
}

function showPopularFoods() {
  var grid = document.getElementById("popularGrid");
  if (!grid) return;
  var popular = [1, 2, 3, 7, 4, 5];
  for (var i = 0; i < popular.length; i++) grid.innerHTML += foodCard(findFood(popular[i]));
}

function addToCart(id) {
  var food = findFood(id);
  if (!food) return;
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }
  if (!found) cart.push({id: id, quantity: 1});
  saveCart();
  showToast(food.name + " added to cart!  •  " + totalItems() + " item(s) in cart", "🛒");
}

// The cart reads the same data saved on other pages.
function showCart() {
  var itemsBox = document.getElementById("cartItems");
  var summary = document.getElementById("cartSummary");
  if (!itemsBox || !summary) return;
  itemsBox.innerHTML = "";
  if (cart.length === 0) {
    itemsBox.innerHTML = '<div class="empty-cart"><p class="empty-icon">🛒</p><h2>Your cart is empty!</h2><p>Explore our menu and add something delicious.</p><a href="menu.html" class="button">Browse Menu →</a></div>';
    summary.innerHTML = "";
    return;
  }
  var count = 0;
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var food = findFood(cart[i].id);
    if (!food) continue;
    var quantity = cart[i].quantity;
    var lineTotal = food.price * quantity;
    count += quantity;
    total += lineTotal;
    itemsBox.innerHTML += '<div class="cart-row">' +
      '<div class="cart-food"><img src="' + photoUrl(food.photo) + '" alt="Stock food photo representing ' + food.name + '"><div><h3>' + food.name + '</h3><p>₹' + food.price + ' each</p></div></div>' +
      '<div class="cart-controls"><button type="button" onclick="changeQuantity(' + food.id + ', -1)" aria-label="Decrease ' + food.name + '">−</button><strong>' + quantity + '</strong><button type="button" onclick="changeQuantity(' + food.id + ', 1)" aria-label="Increase ' + food.name + '">+</button></div>' +
      '<span class="cart-line-price">₹' + lineTotal + '</span>' +
      '<button type="button" class="remove-button" onclick="removeItem(' + food.id + ')">Remove</button></div>';
  }
  summary.innerHTML = '<div class="cart-total"><div><h2>Total Items: ' + count + '</h2><h2 class="grand-total">Total: ₹' + total + '</h2></div>' +
    '<div class="cart-actions"><a href="menu.html" class="button button-outline">+ Add More</a><button type="button" class="button clear-button" onclick="clearCart()">Clear Cart</button>' +
    '<button type="button" class="button" onclick="demoCheckout()">Checkout →</button></div></div>';
}

function changeQuantity(id, change) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity += change;
      if (cart[i].quantity <= 0) cart.splice(i, 1);
      break;
    }
  }
  saveCart();
  showCart();
}

function removeItem(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { cart.splice(i, 1); break; }
  }
  saveCart();
  showCart();
  showToast("Item removed from your cart.", "🗑️");
}

function clearCart() {
  cart = [];
  saveCart();
  showCart();
  showToast("Your cart is now empty.", "🧹");
}

function demoCheckout() {
  showToast("Checked Out!", "🍽️");
}

// Turn chosen feedback stars orange.
function selectRating(rating) {
  selectedRating = rating;
  var stars = document.querySelectorAll(".star");
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) stars[i].classList.add("chosen");
    else stars[i].classList.remove("chosen");
    stars[i].setAttribute("aria-pressed", i + 1 === rating ? "true" : "false");
  }
  var note = document.getElementById("ratingMessage");
  if (note) note.textContent = rating === 0 ? "No rating selected" : rating + " out of 5 stars selected";
}

var feedbackForm = document.getElementById("feedbackForm");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("feedbackName").value.trim();
    var message = document.getElementById("feedbackMessage").value.trim();
    var emailBox = document.getElementById("feedbackEmail");
    if (name === "" || selectedRating === 0 || message === "") {
      showToast("Please add your name, star rating and message.", "⚠️");
      return;
    }
    if (emailBox.value.trim() !== "" && !emailBox.checkValidity()) {
      showToast("Please enter a valid email or leave it blank.", "⚠️");
      return;
    }
    feedbackForm.reset();
    selectRating(0);
    showToast("Thank you for your feedback!", "💛");
  });
}

// Run only the features present on the current HTML page.
updateCartCount();
showMenu();
showPopularFoods();
showCart();
var menuSearch = document.getElementById("menuSearch");
if (menuSearch) menuSearch.addEventListener("input", showMenu);
