import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { rootElement, getDataAttr } from './util' ;

const basename = getDataAttr(rootElement, 'base-url') || '';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={basename}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>Welcome to Argelpargel!</h1>
                    </div>
                    <nav className="App-navigation">
                        <ul>
                            <li><Link to="/seo-sandbox/">Home</Link></li>
                            <li><Link to="/seo-sandbox/about/">About</Link></li>
                            <li><Link to="/seo-sandbox/topics/">Topics</Link></li>
                        </ul>
                    </nav>
                    <Route exact path="/seo-sandbox/" component={Home} />
                    <Route path="/seo-sandbox/about/" component={About} />
                    <Route path="/seo-sandbox/topics/" component={Topics} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
