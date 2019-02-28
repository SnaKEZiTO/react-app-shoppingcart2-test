import React from "react";

// name, value, label, onChange, error, options
const Select = ({ name, label, options, error, ...rest }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <select name={name} id={name} {...rest} className="form-control">
                    <option value="" />
                    {options.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </React.Fragment>
    );
};

export default Select;
