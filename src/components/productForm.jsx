import React from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "./common/form";

import { getProductById, saveProduct } from "../services/productService";

class ProductForm extends Form {
    state = {
        data: {
            // id: 0,
            name: "",
            price: "",
            image: "",
            stock: ""
        },
        errors: {}
    };

    schema = {
        id: Joi.string(),
        name: Joi.string()
            .min(5)
            .required()
            .label("Name"),
        price: Joi.number()
            .min(0.0)
            .required()
            .label("Price"),
        image: Joi.string()
            .label("Image URL")
            .required(),
        stock: Joi.number()
            .min(0)
            .label("Stock")
            .required()
    };

    componentDidMount() {
        const productId = this.props.match.params.id;

        if (productId === "new") return;
        const product = getProductById(productId);
        this.setState({ data: product });
    }

    doSubmit = () => {
        const productId = this.props.match.params.id;

        saveProduct(this.state.data);

        if (productId === "new") toast.success("Product added", { position: "top-center" });
        else toast.success("Product saved", { position: "top-center" });

        this.props.history.push("/products");
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("price", "Price", "number")}
                    {this.renderInput("image", "ImageURL")}
                    {this.renderInput("stock", "Amount in Stock", "number")}
                    {this.renderButton("Save")}
                </form>
            </React.Fragment>
        );
    }
}

export default ProductForm;
