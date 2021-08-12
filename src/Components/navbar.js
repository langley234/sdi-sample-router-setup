import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbarElement"><Link to="/">Home</Link></div>
                <div className="navbarElement"><Link to="/products">Products</Link></div>
                <div className="navbarElement"><Link to="/cart">View Cart</Link></div>
                <div className="navbarElement"><Link to="/checkout">Checkout</Link></div>
            </div>
        );
    }
}

export default NavBar;