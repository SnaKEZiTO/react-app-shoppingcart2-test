import React from "react";
import { Link } from "react-router-dom";

import Quantity from "./common/quantity";

const Cart = ({ items, nameProperty, priceProperty, quantityProperty, onDelete, onQuantity }) => {
    const totalPrice = () => {
        let sum = 0;
        items.forEach(item => {
            sum += item[priceProperty] * item[quantityProperty];
        });
        return sum;
    };

    const renderTable = () => {
        return items.length > 0 ? (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <th scope="row" className="align-middle">
                                {items.indexOf(item) + 1}
                            </th>
                            <td className="align-middle">
                                <span>{item[nameProperty]}</span>
                                <img src={item.image} alt="cart product" className="cart-image" />
                            </td>
                            {/* <td className="align-middle">{item[quantityProperty]}</td> */}
                            <td>
                                <Quantity onQuantity={onQuantity} item={item} />
                            </td>
                            <td className="align-middle">{item[priceProperty]}</td>
                            <td className="align-middle">
                                <button className="btn btn-danger" onClick={() => onDelete(item)}>
                                    Remove Item
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <h5 className="text-center">Your Cart is Empty</h5>
        );
    };

    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#cartModal">
                My Cart
            </button>

            <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">
                                My Cart
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {renderTable()}

                        <div className="modal-footer">
                            {items && <h6 className="text-right">${totalPrice().toFixed(2)}</h6>}
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <Link to="/checkout" className="btn btn-primary">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Cart.defaultProps = {
    nameProperty: "name",
    priceProperty: "price",
    quantityProperty: "quantity"
};

export default Cart;
