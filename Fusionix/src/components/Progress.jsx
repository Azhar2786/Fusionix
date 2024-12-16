


import PropTypes from "prop-types";


/**
 * Circular progress
 */
const CircularProgress = ({ classes = '', size='' }) =>{
    return (
        <div 
            role="progressbar"
            className={`circular-progress ${size} ${classes}`}></div>
    );
};

CircularProgress.protoTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};

export { CircularProgress };