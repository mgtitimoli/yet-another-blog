import { routerMiddleware } from "react-router-redux";

import unsyncedHistory from "lib/history/unsynced-history";

// see: https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
export default routerMiddleware(unsyncedHistory);
