import createApiResourceManager from "lib/create-api-resource-manager";

// services are not tested since they are just instances of ApiResourceManager
export default createApiResourceManager({
    baseUrl     : __config.apiPath,
    resourceName: "articles"
});
