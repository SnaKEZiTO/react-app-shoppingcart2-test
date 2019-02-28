import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar";
import Products from "./components/products";
import ProductForm from "./components/productForm";
import Checkout from "./components/checkout";

import { getProducts, getProductById } from "./services/productService";

import "./App.css";

class App extends Component {
    state = {
        products: [],
        cart: []
    };

    componentDidMount() {
        this.setState({ products: getProducts() });
    }

    handleCartAdd = (productId, quantity) => {
        quantity = parseInt(quantity);
        const cart = [...this.state.cart];
        let alreadyInTheCart = false;

        cart.forEach(c => {
            if (c.id === productId) {
                alreadyInTheCart = true;
                c.quantity += quantity;
            }
        });

        if (!alreadyInTheCart) {
            // new product being added to the cart
            const newProduct = { id: productId, quantity };
            cart.push(newProduct);
        }

        this.setState({ cart });
    };

    handleCartDelete = product => {
        const originalCart = [...this.state.cart];
        const cart = originalCart.filter(p => p.id !== product.id);

        this.setState({ cart });
    };

    getProductsInCart = () => {
        const originalCart = [...this.state.cart];
        let newCart = [];

        originalCart.forEach(product => {
            const newProduct = getProductById(product.id);
            newCart.push({
                id: newProduct.id,
                name: newProduct.name,
                price: newProduct.price,
                image: newProduct.image,
                stock: newProduct.stock,
                quantity: product.quantity
            });
        });

        return newCart;
    };

    render() {
        const { cart, products } = this.state;
        return (
            <React.Fragment>
                <Navbar items={this.getProductsInCart()} onDelete={this.handleCartDelete} onQuantity={this.handleCartAdd} />
                <ToastContainer />
                <main id="test" className="container mt-3">
                    <Switch>
                        <Route path="/products/:id" component={ProductForm} />
                        <Route
                            path="/products"
                            render={props => <Products {...props} products={products} cart={cart} onAdd={this.handleCartAdd} />}
                        />
                        <Route
                            path="/checkout"
                            render={props => <Checkout {...props} cart={this.getProductsInCart()} onDelete={this.handleCartDelete} />}
                        />
                        <Redirect from="/" exact to="/products" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
