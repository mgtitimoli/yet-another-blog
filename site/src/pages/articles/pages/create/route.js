export default {
    path: "create",

    getComponent(location, callback) {

        require.ensure(
            [],
            require => callback(null, require("./index").default),
            "articles-create"
        );
    }
};
