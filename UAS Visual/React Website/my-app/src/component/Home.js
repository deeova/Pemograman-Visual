import React, { Component } from "react"
import Navbar from "./appointment/NavBar"
import Header from "./appointment/Header"
import Services from "./appointment/Services"
import Products from "./appointment/Product"
import Gallery from "./appointment/Gallery"


class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Navbar />
                <Services />
                <Products />
                <Gallery />
            </div>
        )
    }
}

export default Home