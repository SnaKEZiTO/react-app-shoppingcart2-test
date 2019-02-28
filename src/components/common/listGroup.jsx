import React from "react";

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group list-group-flush">
            {items.map(item => (
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={"clickable list-group-item list-group-item-action" + (item === selectedItem ? " active" : "")}
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;
