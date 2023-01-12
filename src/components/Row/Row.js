import React from "react";
import PropTypes from 'prop-types';

export const Row = ({left, right}) => {
    return (
        <div className="row item-list-body">
            <div className="col-md-6 one-col">
                { left }
            </div>
            <div className="col-md-6 one-col">
                { right }
            </div>
        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}