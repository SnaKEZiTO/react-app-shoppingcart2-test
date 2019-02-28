import React from "react";

// type, name, value, label, onChange, error
const Input = ({ name, label, error, ...rest }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input id={name} {...rest} name={name} className="form-control" />
                <br />
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Input;
