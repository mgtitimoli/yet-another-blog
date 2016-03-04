import createBrowserHistory from "history/lib/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";
import { useRouterHistory } from "react-router";

import store from "store";

const browserHistoryWithBasename = useRouterHistory(createBrowserHistory)({
    basename: __config.basePath
});

// see: https://github.com/reactjs/react-router-redux/issues/301
const options = {
    selectLocationState: state => state.get("routing").toJS()
};

export default syncHistoryWithStore(
    browserHistoryWithBasename,
    store,
    options
);
