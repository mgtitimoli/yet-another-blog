import {
    createHistory,
    useBasename,
    useQueries
} from "history";

export default useBasename(useQueries(createHistory))({
    basename: __config.basePath
});
