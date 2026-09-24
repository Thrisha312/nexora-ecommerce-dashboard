import React from "react";

function Home() {
    return (
        <div className="dashboard">

            <div className="dashboard-header">
                <div>
                    <h1>Dashboard Overview</h1>
                    <p>Welcome back, Admin. Here's what's happening today.</p>
                </div>

                <button className="primary-btn">
                    + Add Product
                </button>
            </div>

            {/* KPI Cards */}
            <div className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon">💰</div>
                    <div>
                        <p>Total Revenue</p>
                        <h2>₹2,48,560</h2>
                        <span className="positive">↑ 12.5%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">📦</div>
                    <div>
                        <p>Total Orders</p>
                        <h2>1,248</h2>
                        <span className="positive">↑ 8.2%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div>
                        <p>Total Customers</p>
                        <h2>3,842</h2>
                        <span className="positive">↑ 5.7%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">🛒</div>
                    <div>
                        <p>Pending Orders</p>
                        <h2>36</h2>
                        <span className="warning">Needs Attention</span>
                    </div>
                </div>

            </div>

            {/* Main Dashboard */}
            <div className="dashboard-grid">

                {/* Sales Overview */}
                <div className="dashboard-card sales-card">

                    <div className="card-header">
                        <div>
                            <h2>Sales Overview</h2>
                            <p>Monthly revenue performance</p>
                        </div>

                        <select>
                            <option>Last 6 Months</option>
                            <option>Last 12 Months</option>
                        </select>
                    </div>

                    <div className="chart">

                        <div className="bar" style={{ height: "45%" }}>
                            <span>Jan</span>
                        </div>

                        <div className="bar" style={{ height: "65%" }}>
                            <span>Feb</span>
                        </div>

                        <div className="bar" style={{ height: "50%" }}>
                            <span>Mar</span>
                        </div>

                        <div className="bar" style={{ height: "80%" }}>
                            <span>Apr</span>
                        </div>

                        <div className="bar" style={{ height: "70%" }}>
                            <span>May</span>
                        </div>

                        <div className="bar active" style={{ height: "92%" }}>
                            <span>Jun</span>
                        </div>

                    </div>

                </div>

                {/* Quick Summary */}
                <div className="dashboard-card">

                    <div className="card-header">
                        <div>
                            <h2>Store Summary</h2>
                            <p>Current store status</p>
                        </div>
                    </div>

                    <div className="summary-item">
                        <span>Products</span>
                        <strong>10</strong>
                    </div>

                    <div className="summary-item">
                        <span>In Stock</span>
                        <strong className="green">9</strong>
                    </div>

                    <div className="summary-item">
                        <span>Low Stock</span>
                        <strong className="orange">1</strong>
                    </div>

                    <div className="summary-item">
                        <span>Out of Stock</span>
                        <strong className="red">0</strong>
                    </div>

                </div>

            </div>

            {/* Recent Orders */}
            <div className="dashboard-card orders-card">

                <div className="card-header">
                    <div>
                        <h2>Recent Orders</h2>
                        <p>Latest customer orders</p>
                    </div>

                    <button className="secondary-btn">
                        View All
                    </button>
                </div>

                <div className="orders-table">

                    <div className="order-row heading">
                        <span>Order ID</span>
                        <span>Customer</span>
                        <span>Amount</span>
                        <span>Status</span>
                    </div>

                    <div className="order-row">
                        <span>#ORD-1024</span>
                        <span>Rahul Sharma</span>
                        <span>₹4,599</span>
                        <span className="status delivered">Delivered</span>
                    </div>

                    <div className="order-row">
                        <span>#ORD-1023</span>
                        <span>Priya Nair</span>
                        <span>₹2,999</span>
                        <span className="status pending">Pending</span>
                    </div>

                    <div className="order-row">
                        <span>#ORD-1022</span>
                        <span>Arjun Kumar</span>
                        <span>₹7,450</span>
                        <span className="status processing">Processing</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;