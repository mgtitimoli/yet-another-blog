import { syncHistoryWithStore } from "react-router-redux";

import store from "store";

import unsyncedHistory from "./unsynced-history";

export default syncHistoryWithStore(unsyncedHistory, store, {
    // see: https://github.com/reactjs/react-router-redux/issues/301
    selectLocationState: state => state.get("routing").toJS()
});

