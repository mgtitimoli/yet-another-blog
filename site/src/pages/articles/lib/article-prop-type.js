import { PropTypes } from "react";

export default PropTypes.shape({
    id              : PropTypes.number,
    title           : PropTypes.string,
    content         : PropTypes.string,
    creationTime    : PropTypes.string,
    modificationTime: PropTypes.string
    // timestamp: PropTypes.string
});
