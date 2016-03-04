import { LOCATION_CHANGE } from "react-router-redux";

// see: https://github.com/reactjs/react-router-redux/issues/301
export default {
    [ LOCATION_CHANGE ]: (state, action) => state.merge({
        locationBeforeTransitions: action.payload
    })
};
