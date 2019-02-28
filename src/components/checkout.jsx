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
