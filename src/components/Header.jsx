import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("nexoraLoggedIn");

        navigate("/login");
    };

    return (
        <header className="top-header">

            <div className="brand">
                <img
                    src="/images/nexora-logo.png"
                    alt="Nexora"
                    className="nexora-logo"
                />
            </div>

            <div className="header-actions">

                <div className="search-box">
                    🔍
                    <input
                        type="text"
                        placeholder="Search products, orders..."
                    />
                </div>

                <button className="icon-btn">
                    🔔
                </button>

                <div className="admin-profile">

                    <div className="profile-avatar">
                        A
                    </div>

                    <div>
                        <strong>Admin</strong>
                        <span>Administrator</span>
                    </div>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>
    );
}

export default Header;