import { routerMiddleware } from "react-router-redux";

import history from "lib/history";

// see: https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
export default routerMiddleware(history);
