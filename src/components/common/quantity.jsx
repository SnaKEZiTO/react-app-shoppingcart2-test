import React from "react";

const Quantity = ({ item, onQuantity, idProperty, quantityProperty, maxAmountProperty }) => {
    console.log("item", item);
    return (
        <React.Fragment>
            <div className="input-group">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        id="button-addon1"
                        onClick={() => {
                            if (item[quantityProperty] - 1 < 1) return;
                            onQuantity(item[idProperty], -1);
                        }}
                    >
                        <i className="fa fa-minus" />
                    </button>
                </div>
                <input
                    type="text"
                    className="form-control col-2"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value={item[quantityProperty]}
                    readOnly
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                            if (item[quantityProperty] + 1 > item[maxAmountProperty]) return;
                            onQuantity(item[idProperty], 1);
                        }}
                    >
                        <i className="fa fa-plus" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

Quantity.defaultProps = {
    idProperty: "id",
    quantityProperty: "quantity",
    maxAmountProperty: "stock"
};

export default Quantity;
