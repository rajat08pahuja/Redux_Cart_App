import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Provider } from 'react-redux';
import store from './cartPOC/app/store'
// import Ball from './Components/Ball';
// import Bat from './Components/Bat';
// import User from './Components/User';
// import AppBar from './Ecommerce_Components/AppBar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './Ecommerce_Components/Home';
// import Cart from './Ecommerce_Components/Cart';
// import Product from './Ecommerce_Components/Product';
import Ecommerce from './cartPOC/Ecommerce';


function App() {
  return (
    // <Provider store = {store}>
    //   <div className="App">
    //     <Ball></Ball>
    //     <Bat></Bat>
    //     <User></User>
    //   </div>
    // </Provider>
    <Provider store={store}>
      {/* <AppBar></AppBar>
      <Router>
        <Switch>
          <Route path="/product"><Product></Product></Route>
          <Route path="/cart" ><Cart></Cart></Route>
          <Route path="/" ><Home></Home></Route>
        </Switch>
      </Router> */}
      <Ecommerce />
    </Provider>
  );
}

export default App;
