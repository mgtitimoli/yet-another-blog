export default {
    path: "view/:articleId",

    getComponent(location, callback) {

        require.ensure(
            [],
            require => callback(null, require("./index").default),
            "articles-view"
        );
    }
};
