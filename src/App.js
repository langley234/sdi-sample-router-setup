import './App.css';
import Home from './Components/home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavBar from './Components/navbar';
import Products from './Components/products';
import SingleProduct from './Components/singleProduct';
import Cart from './Components/cart';
import Checkout from './Components/checkout';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    }

    this.cartItems = [];

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(item) {
    this.cartItems.push(item);
    this.setState({
      cartItems: this.cartItems
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products/:productId">
            <SingleProduct addToCartCallback={this.handleAddToCart}/>
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/checkout">
            <Checkout items={this.state.cartItems}/>
          </Route>
          <Route path="/cart">
            <Cart items={this.state.cartItems}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    );
  }

}

function RouteProduct() {
  let { productId } = useParams();

  return (
    <SingleProduct productId={productId}/>
  );
}

export default App;
