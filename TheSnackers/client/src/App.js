
import React, { Component } from 'react';
import NavigationTabs from "./components/NavigationTabs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import Snacks from "./components/Nav/Snacks";
import Cart from "./components/Nav/Cart";
import ProductList from "./components/ProductList";
import  Login from "./Login/Login.js";
import  Signup from "./Login/Signup.js";

import Delivery from "./Checkout/Delivery.js";
import Billing from "./Checkout/Billing.js";


// class App extends Component {
//   render() {
//     return (

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome to Snacks-2-Go</h1>
                </div>
            </div>
            <div><Login /> </div>
            <div><Signup /> </div>

            <div><Billing /></div>
            <div><Delivery /></div> */}
            {/* <div className="row"> */}
                {/* <div className="col-md-8">
                    <ProductList />
                </div> */}
                {/* <div className="col-md-4">
                    <Cart />
                </div> */}
            {/* </div> */}

            {/* <footer>
                <small>
                &copy; The Snackers 2018
                </small>
            </footer> */}






        {/* <ConditionalRenderer /> */}

{/* <Router>
<div>
  <NavigationTabs/>
      <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} /> 
      <Route exact path="/snacks" component={Snacks} />
      <Route exact path="/cart" component={Cart} />
      </switch >
</div>


  </Router> */}

   
          {/* <h1 className="App-title">Snacks-2-Go</h1>  
        </header>
        <p className="App-intro"> */}
        

        {/* </p> */}
      </div>
    );
  }


export default App;
