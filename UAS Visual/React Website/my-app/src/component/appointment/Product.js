import React, { Component } from "react"

class Products extends Component {

    render() {
        return (
            <section id="p1" class="products">
                <h2>Product</h2>
                <h4>Best Seller</h4>
                <div class="product hoodie">
                    <span><a href="#"><h3>Hoodie</h3></a></span>
                </div>
                <div class="product tshirt">
                    <span><a href="#"><h3>T-Shirt</h3></a></span>
                </div>
                <div class="product jeans">
                    <span><a href="#"><h3>Jeans</h3></a></span>
                </div>
                <div class="product pants">
                    <span><a href="#"><h3>Short-Pants</h3></a></span>
                </div>
            </section>
        )
    }
}

export default Products