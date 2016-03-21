export default {
    path: "edit/:articleId",

    getComponent(location, callback) {

        require.ensure(
            [],
            require => callback(null, require("./index").default),
            "articles-edit"
        );
    }
};
