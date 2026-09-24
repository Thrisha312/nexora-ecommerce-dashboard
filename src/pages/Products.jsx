import React, { useState } from "react";
import ProductList from "../components/ProductList";

function Products({
    products,
    setProducts,
    addToCart
}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [name, setName] = useState("");
    const [productCategory, setProductCategory] =
        useState("Electronics");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    // =========================
    // CATEGORIES
    // =========================

    const categories = [
        "All",
        ...new Set(
            products.map(
                (product) => product.category
            )
        )
    ];


    // =========================
    // FILTER PRODUCTS
    // =========================

    const filteredProducts = products.filter(
        (product) => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesCategory =
                category === "All" ||
                product.category === category;

            return (
                matchesSearch &&
                matchesCategory
            );
        }
    );


    // =========================
    // RESET FORM
    // =========================

    const resetForm = () => {

        setName("");
        setProductCategory("Electronics");
        setPrice("");
        setImage("");

        setEditingProduct(null);
        setShowForm(false);
    };


    // =========================
    // ADD / UPDATE PRODUCT
    // =========================

    const handleSubmit = (e) => {

        e.preventDefault();

        const productData = {
            name: name,
            category: productCategory,
            price: Number(price),
            image:
                image ||
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
        };


        // UPDATE PRODUCT

        if (editingProduct) {

            setProducts(
                products.map((product) =>
                    product.id === editingProduct.id
                        ? {
                              ...product,
                              ...productData
                          }
                        : product
                )
            );

        }

        // ADD NEW PRODUCT

        else {

            const newProduct = {
                id: Date.now(),
                ...productData
            };

            setProducts([
                ...products,
                newProduct
            ]);
        }


        resetForm();
    };


    // =========================
    // EDIT PRODUCT
    // =========================

    const handleEdit = (product) => {

        setEditingProduct(product);

        setName(product.name);
        setProductCategory(product.category);
        setPrice(product.price);
        setImage(product.image);

        setShowForm(true);
    };


    // =========================
    // DELETE PRODUCT
    // =========================

    const handleDelete = (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this product?"
            );

        if (!confirmDelete) {
            return;
        }

        setProducts(
            products.filter(
                (product) =>
                    product.id !== id
            )
        );
    };


    // =========================
    // OPEN ADD FORM
    // =========================

    const openAddForm = () => {

        setEditingProduct(null);

        setName("");
        setProductCategory("Electronics");
        setPrice("");
        setImage("");

        setShowForm(true);
    };


    return (
        <div className="products-page">


            {/* =========================
                HEADER
            ========================== */}

            <div className="products-header">

                <div>

                    <h1>
                        Product Management
                    </h1>

                    <p>
                        Manage your store products
                        and inventory
                    </p>

                </div>


                <button
                    className="primary-btn"
                    onClick={openAddForm}
                >
                    + Add Product
                </button>

            </div>


            {/* =========================
                SEARCH + FILTER
            ========================== */}

            <div className="product-toolbar">

                <div className="product-search">

                    🔍

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                </div>


                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(
                            e.target.value
                        )
                    }
                >

                    {categories.map(
                        (item) => (

                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>

                        )
                    )}

                </select>

            </div>


            {/* =========================
                PRODUCT COUNT
            ========================== */}

            <div className="product-count">

                Showing{" "}

                <strong>
                    {filteredProducts.length}
                </strong>

                {" "}of{" "}

                <strong>
                    {products.length}
                </strong>

                {" "}products

            </div>


            {/* =========================
                PRODUCT LIST
            ========================== */}

            <ProductList
                products={filteredProducts}
                addToCart={addToCart}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />


            {/* =========================
                ADD / EDIT MODAL
            ========================== */}

            {showForm && (

                <div className="product-modal-overlay">

                    <div className="product-modal">


                        {/* MODAL HEADER */}

                        <div className="product-modal-header">

                            <div>

                                <h2>
                                    {editingProduct
                                        ? "Edit Product"
                                        : "Add New Product"}
                                </h2>

                                <p>
                                    {editingProduct
                                        ? "Update product information"
                                        : "Add a new product to your store"}
                                </p>

                            </div>


                            <button
                                className="modal-close"
                                type="button"
                                onClick={resetForm}
                            >
                                ×
                            </button>

                        </div>


                        {/* FORM */}

                        <form
                            className="product-form"
                            onSubmit={handleSubmit}
                        >


                            {/* PRODUCT NAME */}

                            <div className="form-group">

                                <label>
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter product name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                            </div>


                            {/* CATEGORY */}

                            <div className="form-group">

                                <label>
                                    Category
                                </label>

                                <select
                                    value={productCategory}
                                    onChange={(e) =>
                                        setProductCategory(
                                            e.target.value
                                        )
                                    }
                                >

                                    <option value="Electronics">
                                        Electronics
                                    </option>

                                    <option value="Fashion">
                                        Fashion
                                    </option>

                                    <option value="Accessories">
                                        Accessories
                                    </option>

                                    <option value="Fitness">
                                        Fitness
                                    </option>

                                    <option value="Home">
                                        Home
                                    </option>

                                </select>

                            </div>


                            {/* PRICE */}

                            <div className="form-group">

                                <label>
                                    Price (₹)
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter price"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(
                                            e.target.value
                                        )
                                    }
                                    min="1"
                                    required
                                />

                            </div>


                            {/* IMAGE */}

                            <div className="form-group">

                                <label>
                                    Product Image URL
                                </label>

                                <input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    value={image}
                                    onChange={(e) =>
                                        setImage(
                                            e.target.value
                                        )
                                    }
                                />

                                <small>
                                    Leave empty to use a default image.
                                </small>

                            </div>


                            {/* BUTTONS */}

                            <div className="product-form-actions">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={resetForm}
                                >
                                    Cancel
                                </button>


                                <button
                                    type="submit"
                                    className="primary-btn"
                                >
                                    {editingProduct
                                        ? "Update Product"
                                        : "Add Product"}
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Products;