import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            email === "admin@nexora.com" &&
            password === "admin123"
        ) {
            localStorage.setItem("nexoraLoggedIn", "true");
            navigate("/");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f7fb",
                padding: "30px",
                fontFamily: "Segoe UI, Arial, sans-serif"
            }}
        >

            <div
                style={{
                    width: "430px",
                    maxWidth: "100%",
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "35px",
                    boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                    border: "1px solid #e5eaf0"
                }}
            >

                {/* LOGO */}

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "25px"
                    }}
                >

                    <img
                        src="/images/nexora-logo.png"
                        alt="Nexora"
                        style={{
                            width: "170px",
                            height: "65px",
                            objectFit: "contain",
                            display: "inline-block"
                        }}
                    />

                </div>


                {/* HEADING */}

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "28px"
                    }}
                >

                    <h1
                        style={{
                            margin: "0",
                            fontSize: "27px",
                            color: "#111827"
                        }}
                    >
                        Welcome Back 👋
                    </h1>

                    <p
                        style={{
                            margin: "8px 0 0",
                            color: "#718096",
                            fontSize: "14px"
                        }}
                    >
                        Sign in to your Nexora admin account
                    </p>

                </div>


                {/* FORM */}

                <form onSubmit={handleLogin}>

                    {/* EMAIL */}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "7px",
                            marginBottom: "18px"
                        }}
                    >

                        <label
                            style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#374151"
                            }}
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="admin@nexora.com"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                padding: "13px",
                                border: "1px solid #dbe2ea",
                                borderRadius: "9px",
                                fontSize: "14px",
                                boxSizing: "border-box"
                            }}
                        />

                    </div>


                    {/* PASSWORD */}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "7px",
                            marginBottom: "18px"
                        }}
                    >

                        <label
                            style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#374151"
                            }}
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                padding: "13px",
                                border: "1px solid #dbe2ea",
                                borderRadius: "9px",
                                fontSize: "14px",
                                boxSizing: "border-box"
                            }}
                        />

                    </div>


                    {/* ERROR */}

                    {error && (
                        <div
                            style={{
                                background: "#fef2f2",
                                color: "#dc2626",
                                padding: "10px",
                                borderRadius: "8px",
                                fontSize: "13px",
                                marginBottom: "15px"
                            }}
                        >
                            ⚠️ {error}
                        </div>
                    )}


                    {/* LOGIN BUTTON */}

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            border: "none",
                            background: "#2563eb",
                            color: "white",
                            padding: "14px",
                            borderRadius: "9px",
                            fontSize: "14px",
                            fontWeight: "700",
                            cursor: "pointer"
                        }}
                    >
                        Sign In →
                    </button>

                </form>


                {/* DEMO LOGIN */}

                <div
                    style={{
                        marginTop: "22px",
                        padding: "14px",
                        background: "#f8fafc",
                        border: "1px dashed #cbd5e1",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        fontSize: "12px",
                        color: "#64748b"
                    }}
                >

                    <strong
                        style={{
                            color: "#334155",
                            fontSize: "13px"
                        }}
                    >
                        Demo Login
                    </strong>

                    <span>
                        Email: admin@nexora.com
                    </span>

                    <span>
                        Password: admin123
                    </span>

                </div>


                {/* FOOTER */}

                <p
                    style={{
                        textAlign: "center",
                        margin: "22px 0 0",
                        color: "#94a3b8",
                        fontSize: "11px"
                    }}
                >
                    © 2026 Nexora. All rights reserved.
                </p>

            </div>

        </div>
    );
}

export default Login;