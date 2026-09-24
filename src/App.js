import React, { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import DebugPanel from "./components/DebugPanel";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

import productsData from "./utils/mockData";


function AppContent() {

    const location = useLocation();

    // Product state
    const [products, setProducts] = useState(productsData);

    // Cart state
    const [cart, setCart] = useState([]);


    // =========================
    // ADD TO CART
    // =========================

    const addToCart = (product) => {

        const existingItem = cart.find(
            (item) => item.id === product.id
        );

        if (existingItem) {

            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1
                          }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);

        }
    };


    // =========================
    // REMOVE FROM CART
    // =========================

    const removeFromCart = (id) => {

        setCart(
            cart.filter(
                (item) => item.id !== id
            )
        );

    };


    // =========================
    // LOGIN PAGE CHECK
    // =========================

    const isLoginPage =
        location.pathname === "/login";


    return (
        <ErrorBoundary>

            {/* HEADER + NAVIGATION */}

            {!isLoginPage && (
                <>
                    <Header />
                    <Navigation />
                </>
            )}


            {/* MAIN CONTENT */}

            <main
                className={
                    isLoginPage
                        ? ""
                        : "container"
                }
            >

                <Routes>

                    {/* =====================
                        LOGIN
                    ====================== */}

                    <Route
                        path="/login"
                        element={<Login />}
                    />


                    {/* =====================
                        DASHBOARD
                    ====================== */}

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />


                    {/* =====================
                        PRODUCTS
                    ====================== */}

                    <Route
                        path="/products"
                        element={
                            <ProtectedRoute>
                                <Products
                                    products={products}
                                    setProducts={setProducts}
                                    addToCart={addToCart}
                                />
                            </ProtectedRoute>
                        }
                    />


                    {/* =====================
                        CART
                    ====================== */}

                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart
                                    cart={cart}
                                    removeFromCart={
                                        removeFromCart
                                    }
                                />
                            </ProtectedRoute>
                        }
                    />


                    {/* =====================
                        CHECKOUT
                    ====================== */}

                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute>
                                <Checkout
                                    cart={cart}
                                />
                            </ProtectedRoute>
                        }
                    />

                </Routes>


                {/* DEBUG PANEL */}

                {!isLoginPage && (
                    <DebugPanel
                        cart={cart}
                    />
                )}

            </main>

        </ErrorBoundary>
    );
}


function App() {

    return (
        <BrowserRouter basename="/nexora-ecommerce-dashboard">
    <AppContent />
</BrowserRouter>
    );
}


export default App;