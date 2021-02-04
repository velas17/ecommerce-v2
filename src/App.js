import React from 'react';
import Product from './Components/Products/Product'
import './App.css';
import Home from './Components/Home/Home.js';
import { BrowserRouter, Route } from "react-router-dom";
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
      <BrowserRouter> 
        <div>
          <NavBar />
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Product' component={Product}/>
        <Route exact path='/Contact' component={Contact}/>
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
