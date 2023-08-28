function calculateTotal(cart) {
    let total = 0;
    for (const product of cart) {
        total += product.price;
    }
    return total;
}
const product1 = { id: 1, name: "Shirt", price: 50, category: "Clothing" };
const product2 = { id: 2, name: "Shoes", price: 60, category: "Footwear" };
const cart = [product1, product2];
const customer = { id: 1, name: "yaseen", email: "yaseenraja340@gmail.com" };
const order = { customer, cart };
const totalPrice = calculateTotal(order.cart);
console.log(`Total price: $${totalPrice}`);
export {};
