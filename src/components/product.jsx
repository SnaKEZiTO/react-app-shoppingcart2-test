import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

import Form from "./common/form";

import "react-toastify/dist/ReactToastify.css";
// import $ from "jquery";
// window.$ = $;

class Product extends Form {
    state = {
        data: {
            quantity: 0
        },
        errors: {}
    };

    schema = {
        quantity: Joi.number()
            .required()
            .min(1)
            .max(100)
            .label("Quantity")
    };

    addProduct = (product, quantity) => {
        if (product.stock === 0) {
            toast.warning("We are out of that one, sorry!");
            return;
        }

        //TODO: changle the logic here
        // if (quantity > product.stock || (product.quantity && quantity + product.quantity > product.stock)) {
        //     toast.warning("You are trying to add more than the stock!");
        //     return;
        // }
        console.log("quantityInCart ", this.props.quantityInCart);
        if (quantity > product.stock || quantity + this.props.quantityInCart > product.stock) {
            toast.warning("You are trying to add more than the stock!");
            return;
        }

        this.props.onAdd(product.id, quantity);
        this.setState({ data: { quantity: 0 } });

        toast.success("Added to the Cart!", { position: "top-center" });
    };

    doSubmit() {
        this.addProduct(this.props.product, parseInt(this.state.data.quantity));
    }

    render() {
        const { product } = this.props;

        return (
            <div className="col col-sm col-md-6 col-lg-6 col-xl-4 mb-4">
                <div className="card" style={{ width: "22rem" }}>
                    <img className="img-thumbnail card-img-top card-header product-image" src={product.image} alt="product" />
                    <div className="card-body">
                        {/* <h5 className="card-title">{product.name}</h5> */}
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        <p className="card-text">${product.price + " " + typeof product.price}</p>
                        <h5 className="card-text">Number in Stock: {product.stock}</h5>

                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("quantity", "Quantity:", "number")}
                            {this.renderButton("Add to Cart", "btn btn-info")}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
