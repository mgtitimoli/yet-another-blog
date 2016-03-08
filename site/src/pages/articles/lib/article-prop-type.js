import { PropTypes } from "react";

export default PropTypes.shape({
    id              : PropTypes.string,
    title           : PropTypes.string,
    content         : PropTypes.string,
    creationTime    : PropTypes.string,
    modificationTime: PropTypes.string
});
