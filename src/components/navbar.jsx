import React from "react";
import { NavLink, Link } from "react-router-dom";

import Cart from "./cart";

const Navbar = ({ user, items, onDelete, onQuantity }) => {
    const activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold"
    };
    const activeClass = "text-danger";

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">
                    Shopping Cart 2.0
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* LEFT */}
                    <div className="navbar-nav mr-auto">
                        <NavLink className="nav-item nav-link " exact to="/products" activeStyle={activeStyle} activeClassName={activeClass}>
                            <span>Products</span>
                        </NavLink>
                        {/* <NavLink className="nav-item nav-link " exact to="/products/new" activeStyle={activeStyle} activeClassName={activeClass}>
                            <span>Product Form</span>
                        </NavLink> */}
                    </div>

                    {/* RIGHT */}
                    <div className="navbar-nav ">
                        <Cart items={items} onDelete={onDelete} onQuantity={onQuantity} />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
