import Immutable from "immutable";

// see: https://github.com/reactjs/react-router-redux/issues/301
export default Immutable.fromJS({
    locationBeforeTransitions: null
});
