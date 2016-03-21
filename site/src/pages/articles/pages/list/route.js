export default {
    path: "list",

    getComponent(location, callback) {

        require.ensure(
            [],
            require => callback(null, require("./index").default),
            "articles-list"
        );
    }
};
