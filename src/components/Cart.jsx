import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { calculateTotal, formatPrice } from "../utils/helpers";

function Cart({ cart, removeFromCart }) {
    const subtotal = calculateTotal(cart);

    const shipping = subtotal >= 2000 ? 0 : 99;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    // Empty cart
    if (cart.length === 0) {
        return (
            <div className="empty-cart">

                <div className="empty-cart-icon">
                    🛒
                </div>

                <h1>Your Cart is Empty</h1>

                <p>
                    Looks like you haven't added anything to your cart yet.
                </p>

                <Link to="/products" className="primary-btn">
                    Continue Shopping
                </Link>

            </div>
        );
    }

    return (
        <div className="cart-page">

            {/* Page Header */}

            <div className="cart-page-header">
                <div>
                    <h1>Shopping Cart</h1>
                    <p>
                        {cart.length} product{cart.length > 1 ? "s" : ""} in your cart
                    </p>
                </div>

                <Link to="/products" className="continue-shopping">
                    ← Continue Shopping
                </Link>
            </div>


            {/* Cart Layout */}

            <div className="cart-layout">

                {/* LEFT SIDE */}

                <div className="cart-products">

                    <div className="cart-section-header">
                        <h2>Your Products</h2>
                        <span>{cart.length} Items</span>
                    </div>

                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={removeFromCart}
                        />
                    ))}

                </div>


                {/* RIGHT SIDE */}

                <div className="order-summary">

                    <h2>Order Summary</h2>

                    <div className="summary-line">
                        <span>Subtotal</span>
                        <strong>{formatPrice(subtotal)}</strong>
                    </div>

                    <div className="summary-line">
                        <span>Shipping</span>

                        <strong className="free-shipping">
                            {shipping === 0
                                ? "FREE"
                                : formatPrice(shipping)}
                        </strong>
                    </div>

                    <div className="summary-line">
                        <span>Estimated Tax</span>
                        <strong>{formatPrice(tax)}</strong>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-total">
                        <span>Total</span>
                        <strong>{formatPrice(total)}</strong>
                    </div>

                    <Link
                        to="/checkout"
                        className="checkout-btn"
                    >
                        Proceed to Checkout →
                    </Link>

                    <div className="secure-checkout">
                        🔒 Secure Checkout
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Cart;