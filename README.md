# 🛒 Sprint 2 - E-Commerce

This is a front-end project created as part of ITACADEMY Front-End Bootcamp. The goal is to implement a basic shopping cart experience using vanilla JavaScript. The user can add and remove items, apply discounts, and validate a checkout form. No back-end or API integration is used; all data is hardcoded.

---

## 💻 Technologies Used

- HTML, CSS (Bootstrap for some styles)
- Vanilla JavaScript
- RegEx for form validation

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/KevinLarriega98/S2.2-ITAcademy.git
cd S2.2-ITAcademy
```

---

## ✅ Exercises Overview

### 🧩 Exercise 1: Add Products to Cart

- Implemented the `buy(id)` function to allow users to add products to the cart.
- Retrieved the product from the `products` array using its `id`.
- Checked if the product was already in the cart:
  - If it exists, increased the `quantity` by 1.
  - If not, added it to the cart with an initial `quantity` of 1.
- Called `applyPromotionsCart()` and `printCart()` after each addition to apply discounts and update the UI.
- Updated the cart counter displayed in the navigation using the total quantity of items in the cart.
- Attached event listeners to all `.add-to-cart` buttons to trigger the `buy()` function with the correct product ID.


---

### 🧹 Exercise 2: Clean Cart

- Implemented the `cleanCart()` function to reset the shopping cart.
- Emptied the `cart` array by setting its length to `0`.
- Updated the UI by calling `printCart()` and resetting the product counter and total price to `0`.
- Added an event listener to the `#clean-cart` button to trigger the `cleanCart()` function on click.

---

### 💰 Exercise 3: Calculate Cart Total

- Implemented the `calculateTotal()` function to sum up the total value of the cart.
- Used a `forEach` loop to iterate through the cart and multiply each product’s `price` by its `quantity`.
- Accumulated the result in the `total` variable and returned it.

---

### 🎁 Exercise 4: Apply Promotions

- Implemented the `applyPromotionsCart()` function to dynamically apply promotions based on quantity.
- For each product in the cart:
  - If a product has an `offer` and its `quantity` meets the required threshold, a percentage discount is applied.
  - Calculated the new discounted price and stored the total in a new field called `subtotalWithDiscount`.
  - If the product doesn't meet the promotion conditions, the `subtotalWithDiscount` property is removed.
- Used `toFixed(2)` to round the result to two decimal places and parsed it as a float.

---

### 🛒 Exercise 5: Display the Cart in Modal

- Implemented the `printCart()` function to render the cart inside the modal with ID `cartModal`.
- The product table was made dynamic by:
  - Clearing the table body before rendering (`cartList.innerHTML = ""`).
  - Iterating over each product in the `cart` array and creating a table row (`<tr>`) with:
      - Product image.
      - Product name.
      - Unit price.
      - Quantity with `+` and `−` buttons.
      - Subtotal, considering `subtotalWithDiscount` if available.
  - Appending each row to the cart table.
- The total price is calculated and displayed at the bottom.
- Event listeners were added to the `+` and `−` buttons to allow the user to adjust quantities directly from the modal.

---

### ✅ Exercise 6: Checkout Form Validation

- Implemented form validation logic in `checkout.js` for the checkout page.
- Set up input references and their associated error message elements using `window.onload`.
- Defined regular expressions for:
  - Name/surname (letters only)
  - Phone number (9 digits)
  - Email format
  - Passwords (must include at least one letter and one number)
- Created a generic `validateField()` function to check:
  - Minimum input length (at least 3 characters)
  - Optional regex pattern if provided
- Attached `blur` event listeners to validate fields as users leave each input.
- Final validation is triggered by the `validate()` function on form submission:
  - Displays appropriate error messages.
  - Shows an alert for success or prompts the user to fix the errors.

---

### 📋 Exercise 7: Remove and Increase Item Quantity in Cart

- Implemented the `removeFromCart(id)` function to allow users to decrease the quantity of a product in the cart:
  - Finds the product by its `id`.
  - If the quantity is greater than 1, it decreases it by one.
  - If the quantity is 1, it removes the product entirely from the cart.
  - Recalculates promotions with `applyPromotionsCart()` and re-renders the cart UI with `printCart()`.
  - Updates the total product count displayed in the header.
- Additionally, created an `increaseQuantity(id)` function to let users increment the quantity of a product directly from the modal:
  - Finds the product by its `id` and increases the quantity by one.
  - Reapplies promotions, updates the cart, and refreshes the product count in the header.