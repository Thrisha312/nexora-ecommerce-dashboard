import React, { useState } from "react";
import { calculateTotal, formatPrice } from "../utils/helpers";

function CheckoutForm({ cart }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [payment, setPayment] = useState("UPI");

    const subtotal = calculateTotal(cart);

    const shipping = subtotal >= 2000 ? 0 : 99;

    const tax = subtotal * 0.05;

    const total = subtotal + shipping + tax;

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            "Order placed successfully! 🎉\nThank you for shopping with Nexora."
        );
    };

    return (
        <form
            className="professional-checkout"
            onSubmit={handleSubmit}
        >

            {/* LEFT SIDE */}

            <div className="checkout-form-section">

                {/* CONTACT */}

                <div className="checkout-card">

                    <div className="section-title">
                        <span>01</span>

                        <div>
                            <h2>Contact Information</h2>
                            <p>Enter your contact details</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-group full">
                            <label>Full Name</label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>

                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }
                                required
                            />
                        </div>

                    </div>

                </div>


                {/* DELIVERY */}

                <div className="checkout-card">

                    <div className="section-title">
                        <span>02</span>

                        <div>
                            <h2>Delivery Address</h2>
                            <p>Where should we deliver your order?</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-group full">
                            <label>Address</label>

                            <textarea
                                placeholder="House number, street, area"
                                value={address}
                                onChange={(e) =>
                                    setAddress(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>City</label>

                            <input
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) =>
                                    setCity(e.target.value)
                                }
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>PIN Code</label>

                            <input
                                type="text"
                                placeholder="Enter PIN code"
                                value={pincode}
                                onChange={(e) =>
                                    setPincode(e.target.value)
                                }
                                required
                            />
                        </div>

                    </div>

                </div>


                {/* PAYMENT */}

                <div className="checkout-card">

                    <div className="section-title">
                        <span>03</span>

                        <div>
                            <h2>Payment Method</h2>
                            <p>Select your preferred payment option</p>
                        </div>
                    </div>

                    <div className="payment-options">

                        <label
                            className={
                                payment === "UPI"
                                    ? "payment-option selected"
                                    : "payment-option"
                            }
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="UPI"
                                checked={payment === "UPI"}
                                onChange={(e) =>
                                    setPayment(e.target.value)
                                }
                            />

                            <span>📱</span>

                            <div>
                                <strong>UPI</strong>
                                <small>
                                    Google Pay, PhonePe, Paytm
                                </small>
                            </div>
                        </label>


                        <label
                            className={
                                payment === "Card"
                                    ? "payment-option selected"
                                    : "payment-option"
                            }
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="Card"
                                checked={payment === "Card"}
                                onChange={(e) =>
                                    setPayment(e.target.value)
                                }
                            />

                            <span>💳</span>

                            <div>
                                <strong>Credit / Debit Card</strong>
                                <small>
                                    Visa, Mastercard, RuPay
                                </small>
                            </div>
                        </label>


                        <label
                            className={
                                payment === "COD"
                                    ? "payment-option selected"
                                    : "payment-option"
                            }
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="COD"
                                checked={payment === "COD"}
                                onChange={(e) =>
                                    setPayment(e.target.value)
                                }
                            />

                            <span>💵</span>

                            <div>
                                <strong>Cash on Delivery</strong>
                                <small>
                                    Pay when your order arrives
                                </small>
                            </div>
                        </label>

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE - DYNAMIC ORDER SUMMARY */}

            <div className="checkout-summary">

                <div className="checkout-summary-card">

                    <h2>Order Summary</h2>

                    <div className="checkout-items">

                        {cart.map((item) => (

                            <div
                                className="checkout-product"
                                key={item.id}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="checkout-product-info">

                                    <strong>
                                        {item.name}
                                    </strong>

                                    <span>
                                        Qty: {item.quantity}
                                    </span>

                                </div>

                                <strong>
                                    {formatPrice(
                                        item.price * item.quantity
                                    )}
                                </strong>

                            </div>

                        ))}

                    </div>


                    <div className="checkout-divider"></div>


                    <div className="checkout-summary-line">
                        <span>Subtotal</span>
                        <span>
                            {formatPrice(subtotal)}
                        </span>
                    </div>

                    <div className="checkout-summary-line">
                        <span>Shipping</span>

                        <span className="free-text">
                            {shipping === 0
                                ? "FREE"
                                : formatPrice(shipping)}
                        </span>
                    </div>

                    <div className="checkout-summary-line">
                        <span>Estimated Tax</span>

                        <span>
                            {formatPrice(tax)}
                        </span>
                    </div>


                    <div className="checkout-total">
                        <span>Total</span>

                        <strong>
                            {formatPrice(total)}
                        </strong>
                    </div>


                    <button
                        type="submit"
                        className="place-order-btn"
                    >
                        Place Order →
                    </button>

                    <p className="checkout-note">
                        🔒 Your information is securely protected.
                    </p>

                </div>

            </div>

        </form>
    );
}

export default CheckoutForm;