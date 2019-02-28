import React, { Component } from "react";
import Table from "./common/table";

import _ from "lodash";

class Checkout extends Component {
    state = {
        cart: [],
        sortColumn: { path: "title", order: "asc" }
    };

    columns = [
        {
            key: "image",
            content: product => <img src={product.image} className="img-thumbnail border border-danger" style={{ height: "40px" }} alt="" />
        },
        { path: "name", label: "Title" },
        { path: "price", label: "Price" },
        { path: "quantity", label: "Quantity" },
        {
            key: "total",
            content: product => (product.price * product.quantity).toFixed(2)
        },
        {
            key: "delete",
            content: product => (
                <button className="btn btn-danger" onClick={() => this.props.onDelete(product)}>
                    Remove Item
                </button>
            )
        }
    ];

    componentDidMount() {
        const dev = true;
        if (!dev) {
            this.setState({ cart: this.props.cart });
            return;
        }
        if (dev)
            this.setState({
                cart: [
                    {
                        id: "2",
                        name: "Third Product",
                        price: "9.50",
                        image: "https://www.coffee-mate.com/sites/default/files/styles/medium_rectangle/public/files/products/product-1810737.png",
                        stock: 6,
                        quantity: 2
                    },
                    {
                        id: "3",
                        name: "Fourth Product",
                        price: "19.4",
                        image: "https://www.ocado.com/productImages/345/345231011_0_640x640.jpg?identifier=642f00374a44b40d3f09893705502728",
                        stock: 3,
                        quantity: 3
                    },
                    {
                        id: "4",
                        name: "Fifth Product",
                        price: "10.00",
                        image:
                            "https://cdn.shopify.com/s/files/1/2603/1874/products/US_48oz_ColdBrew_Black_White_420185_Render_V1_6b7bee07-c785-4867-9f36-3de29ee4c1ed_1400x1400.jpg?v=1520388925",
                        stock: 7,
                        quantity: 21
                    }
                ]
            });
    }

    handleSort = sortColumn => {
        const sorted = _.orderBy(this.state.cart, [sortColumn.path], [sortColumn.order]);
        this.setState({ sortColumn, cart: sorted });
    };
    render() {
        return (
            <React.Fragment>
                <h1>CHECKOUT</h1>

                {/* <Table columns={this.columns} data={this.state.cart} sortColumn={this.state.sortColumn} onSort={this.handleSort} /> */}
                <Table columns={this.columns} data={this.props.cart} sortColumn={this.state.sortColumn} onSort={this.handleSort} />
            </React.Fragment>
        );
    }
}

export default Checkout;
