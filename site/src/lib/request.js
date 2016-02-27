import formUrlEncoded from "form-urlencoded";

const CONTENT_TYPE_JSON = "application/json";

function ensureIsSucceed(response) {

    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;

    throw error;
}

async function safeFetch(url, options) {

    const response = await fetch(url, options);

    ensureIsSucceed(response);

    return response;
}

async function safeFetchJson(url, options) {

    const response = await safeFetch(url, options);

    return response.json();
}

function getJson(url, data = undefined, headers = {}) {

    if (data) {
        url += "?" + formUrlEncoded(data);
    }

    headers = Object.assign({}, headers, {
        "Accept": CONTENT_TYPE_JSON
    });

    return safeFetchJson(url, {
        headers
    });
}

function postJson(url, data, headers = {}) {

    headers = Object.assign({}, headers, {
        "Accept"      : CONTENT_TYPE_JSON,
        "Content-Type": CONTENT_TYPE_JSON
    });

    return safeFetchJson(url, {
        headers,

        method: "POST",
        body  : JSON.stringify(data)
    });
}

export {
    safeFetch,
    getJson,
    postJson
};
