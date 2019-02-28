import React from "react";

const Like = ({ liked, onLike }) => {
    const icon = liked ? "fa fa-check" : "fa fa-thumbs-o-up";

    return (
        <React.Fragment>
            <i
                className={icon}
                aria-hidden="true"
                onClick={() => {
                    onLike(!liked);
                }}
                style={{ cursor: "pointer" }}
            />
        </React.Fragment>
    );
};

export default Like;
