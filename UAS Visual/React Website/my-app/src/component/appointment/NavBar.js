import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="menu">
                <div className="menu-toggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="brand">
                    <h1>HEAVY Merch</h1>
                </div>
                <ul className="menu-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar