import React, { Component } from "react"

class Header extends Component {
    render() {
        return (
            <header class="header">
                <div class="hero">
                    <h2 class="heading">HEAVY Merch Shop</h2>
                    <p class="sub-heading">Hoodie & T-Shirt</p>
                </div>
                <div class="features feature-1">
                    <h4 class="price">IDR 250K</h4>
                    <span><a href="#" class="item">Hoodie</a></span>
                </div>
                <div class="features feature-2">
                    <h4 class="price">IDR 150K</h4>
                    <span><a href="#" class="item">T-Shirt</a></span>
                </div>
            </header>
        )
    }
}

export default Header