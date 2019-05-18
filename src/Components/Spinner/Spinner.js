import React, { Fragment } from "react";
import "../Spinner/Spinner.scss";

const Spinner = () => {
    return (
        <Fragment>
            <div className="loader-wrap">
                <div className="loader" />
            </div>
        </Fragment>
    );
};

export default Spinner;
