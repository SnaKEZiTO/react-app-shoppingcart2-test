import React from "react";

const Seacrh = ({ onSearch, value }) => {
    return (
        <input
            type="text"
            name="query"
            className="form-control my-3"
            placeholder="Search..."
            value={value}
            onChange={e => onSearch(e.currentTarget.value)}
        />
    );
};

export default Seacrh;
