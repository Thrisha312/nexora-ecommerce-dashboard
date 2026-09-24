import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error
        };
    }

    componentDidCatch(error, info) {
        console.error("Error:", error);
        console.error("Error Info:", info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-box">
                    <h2>Something went wrong!</h2>
                    <p>{this.state.error?.message}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;