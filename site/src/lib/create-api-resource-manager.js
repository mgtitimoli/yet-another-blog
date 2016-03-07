import request from "lib/request";

export class ApiResourceManager {

    constructor(request, {
        basePath = "",
        resourceName
    } = {}) {

        this._request      = request;
        this._resourcePath = basePath + "/" + resourceName;
    }

    async create(props) {

        const { content } = await request.sendJson(
            this._resourcePath,
            "POST",
            props
        );

        return content.result;
    }

    async fetch(id) {

        const { content } = await request.getJson(
            this._resourcePath + "/" + id
        );

        return content.result;
    }

    async fetchAll() {

        const { content } = await request.getJson(
            this._resourcePath
        );

        // http status 204 (NO CONTENT) => !result 
        return content.result ?
            content.result :
            [];
    }

    async update(props) {

        const { content } = await request.sendJson(
            this._resourcePath,
            "PUT",
            props
        );

        // http status 304 (NOT MODIFIED) => !result
        return Boolean(content.result);
    }
}

export default function createApiResourceManager(options) {

    return new ApiResourceManager(
        request,
        options
    );
}
