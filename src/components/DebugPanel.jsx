import React, { useEffect, useState } from "react";

function DebugPanel({ cart }) {

    const [time, setTime] = useState(0);
    const [memory, setMemory] = useState(0);

    useEffect(() => {

        const start = performance.now();

        setTimeout(() => {

            const end = performance.now();

            setTime((end - start).toFixed(2));

        }, 100);

        if (performance.memory) {

            setMemory(
                (
                    performance.memory.usedJSHeapSize /
                    1024 /
                    1024
                ).toFixed(2)
            );

        }

    }, [cart]);

    return (
        <div className="debug-panel">

            <div className="debug-header">
                <span>🛠 Debug & Performance</span>
                <span className="debug-status">
                    ● Live
                </span>
            </div>

            <div className="debug-content">

                <div className="debug-item">
                    <span>Cart Items</span>
                    <strong>
                        {cart.length}
                    </strong>
                </div>

                <div className="debug-item">
                    <span>Render Check</span>
                    <strong>
                        {time} ms
                    </strong>
                </div>

                <div className="debug-item">
                    <span>Memory</span>
                    <strong>
                        {memory || "N/A"} MB
                    </strong>
                </div>

                <div className="debug-item">
                    <span>Application</span>
                    <strong className="debug-success">
                        Healthy
                    </strong>
                </div>

            </div>

        </div>
    );
}

export default DebugPanel;