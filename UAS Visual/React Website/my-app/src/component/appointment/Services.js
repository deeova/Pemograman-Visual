import React, { Component } from "react"

class Services extends Component {
    render() {
        return (
            <section class="services">
                <div class="service">
                    <div class="icon">👕</div>
                    <a href="#p1"><h3>Product</h3></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eum corporis ut sequi doloribus!</p>
                </div>
                <div class="service">
                    <div class="icon">👬</div>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eum corporis ut sequi doloribus!</p>
                </div>
                <div class="service">
                    <div class="icon">🖼️</div>
                    <a href="#g1"><h3>Gallery</h3></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eum corporis ut sequi doloribus!</p>
                </div>
            </section>
        )
    }
}

export default Services