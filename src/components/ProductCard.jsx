import React from "react";
import { formatPrice } from "../utils/helpers";

function ProductCard({ product, addToCart }) {

    return (
        <div className="professional-product-card">

            <div className="product-image-container">

                <img
                    src={product.image}
                    alt={product.name}
                />

                <span className="stock-badge">
                    In Stock
                </span>

            </div>

            <div className="product-info">

                <span className="product-category">
                    {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="rating">
                    ⭐⭐⭐⭐⭐
                    <span>(4.8)</span>
                </div>

                <div className="product-bottom">

                    <div>
                        <p className="product-price">
                            {formatPrice(product.price)}
                        </p>

                        <span className="free-delivery">
                            ✓ Free Delivery
                        </span>
                    </div>

                    <button
                        className="add-cart-btn"
                        onClick={() => addToCart(product)}
                    >
                        🛒 Add
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;