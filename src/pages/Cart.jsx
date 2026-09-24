import React from "react";
import CartComponent from "../components/Cart";

function Cart({ cart, removeFromCart }) {
    return (
        <CartComponent
            cart={cart}
            removeFromCart={removeFromCart}
        />
    );
}

export default Cart;