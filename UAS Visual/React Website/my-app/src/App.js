import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Product2 from './component/appointment/Product2';
import Gallery2 from './component/appointment/Gallery2';
import About from './component/appointment/About';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" component={Product2} />
                <Route path="/gallery" component={Gallery2} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default App;