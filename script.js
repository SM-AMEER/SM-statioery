// cart.js

let cart = [];

// Add item to cart
function addToCart(item) {
    cart.push(item);
    console.log(`Added ${item.name} to cart.`);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    console.log(`Removed item with id ${itemId} from cart.`);
}

// Update item quantity in cart
function updateCart(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = quantity;
        console.log(`Updated item with id ${itemId} to quantity ${quantity}.`);
    }
}

// Checkout via WhatsApp
function checkout() {
    const items = cart.map(item => `Name: ${item.name}, Quantity: ${item.quantity}`).join('\n');
    const message = encodeURIComponent(`Checkout with the following items:\n${items}`);
    const whatsappURL = `https://wa.me/?text=${message}`;
    window.open(whatsappURL, '_blank');
    console.log('Redirecting to WhatsApp for checkout.');
}

// Example items
// addToCart({ id: 1, name: 'Product 1', quantity: 1 });
// removeFromCart(1);
// updateCart(1, 2);
// checkout();