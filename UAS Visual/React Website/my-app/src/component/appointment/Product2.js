import React, { Component } from "react"
import Navbar from "./NavBar"

class Product2 extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <section id="hoodie" className="products">
                    <h1>Product</h1>
                    <h4>Hoodie</h4>
                    <div className="product hoodie">
                        <h3>1</h3>
                    </div>
                    <div className="product hoodie">
                        <h3>2</h3>
                    </div>
                    <div className="product hoodie">
                        <h3>3</h3>
                    </div>
                    <div className="product hoodie">
                        <h3>4</h3>
                    </div>
                </section>
                <form id="form" className="prices">
                    <h1 className="price">250k</h1>
                    <div className="size">
                        <h3>Size</h3>
                        <input type="radio" id="M" name="size" /><label for="M">M</label>
                        <input type="radio" id="L" name="size" /><label for="L">L</label>
                        <input type="radio" id="X" name="size" /><label for="X">X</label>
                        <input type="radio" id="XL" name="size" /><label for="XL">XL</label>
                    </div>
                    <div className="motif">
                        <h3>Motif</h3>
                        <input type="radio" id="1" name="motif" /><label for="1">1</label>
                        <input type="radio" id="2" name="motif" /><label for="2">2</label>
                        <input type="radio" id="3" name="motif" /><label for="3">3</label>
                        <input type="radio" id="4" name="motif" /><label for="4">4</label>
                    </div>
                    <input type="submit" className="bayar" value="Buy IT Now!" />
                </form>
            </div>
        )
    }
}
export default Product2