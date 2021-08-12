import React from 'react';
import NavBar from './navbar';
import { Link } from "react-router-dom";

class Products extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <NavBar />
                <ul>
                    <li><Link to="/products/eggs">Eggs</Link></li>
                    <li><Link to="/products/bacon">Bacon</Link></li>
                    <li><Link to="/products/ham">Ham</Link></li>
                    <li><Link to="/products/milk">Milk</Link></li>
                </ul>
            </div>
        );
    }
}

export default Products;