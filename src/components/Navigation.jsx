import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">

            <div className="nav-section-title">
                STORE MANAGEMENT
            </div>

            <div className="nav-links">

                <NavLink to="/" end>
                    🏠 Dashboard
                </NavLink>

                <NavLink to="/products">
                    📦 Products
                </NavLink>

                <NavLink to="/cart">
                    🛒 Cart
                </NavLink>

                <NavLink to="/checkout">
                    💳 Checkout
                </NavLink>

            </div>

        </nav>
    );
}

export default Navigation;