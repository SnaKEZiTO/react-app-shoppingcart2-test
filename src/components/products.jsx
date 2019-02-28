import React from "react";
import { Link } from "react-router-dom";

import Product from "./product";

const Products = ({ products, onAdd, cart }) => {
    return (
        <React.Fragment>
            <div className="mb-4 ">
                <Link to="/products/new" className="btn btn-success">
                    <i className="fa fa-plus align-middle" />
                    &nbsp;New Product
                </Link>
            </div>
            <div className="row">
                {products.map(product => {
                    const itemInCart = cart.find(p => product.id === p.id);
                    let quantityInCart = 0;
                    if (itemInCart) quantityInCart = itemInCart.quantity;
                    return <Product product={product} quantityInCart={quantityInCart} key={product.id} onAdd={onAdd} />;
                })}
            </div>
        </React.Fragment>
    );
};

export default Products;
