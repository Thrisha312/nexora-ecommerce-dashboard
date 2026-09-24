export const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
};

export const calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};