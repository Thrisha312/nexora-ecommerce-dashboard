import React from "react";
import { formatPrice } from "../utils/helpers";

function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">

            <img
                src={item.image}
                alt={item.name}
                className="cart-product-image"
            />

            <div className="cart-item-info">

                <span className="cart-category">
                    {item.category}
                </span>

                <h3>{item.name}</h3>

                <p className="cart-price">
                    {formatPrice(item.price)}
                </p>

                <p className="cart-quantity">
                    Quantity: <strong>{item.quantity}</strong>
                </p>

            </div>

            <div className="cart-item-right">

                <strong>
                    {formatPrice(item.price * item.quantity)}
                </strong>

                <button
                    className="remove-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                >
                    🗑 Remove
                </button>

            </div>

        </div>
    );
}

export default CartItem;