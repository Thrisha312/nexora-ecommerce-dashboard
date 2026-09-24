import React from "react";
import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart }) {
    return (
        <div className="checkout-page">

            <div className="checkout-header">

                <div>
                    <h1>Secure Checkout</h1>

                    <p>
                        Complete your order securely with Nexora
                    </p>
                </div>

                <div className="checkout-security">
                    🔒 Secure Checkout
                </div>

            </div>

            <CheckoutForm cart={cart} />

        </div>
    );
}

export default Checkout;