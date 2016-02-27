import assert from "assert";
import httpMocks from "node-mocks-http";
import { EventEmitter } from "events";

import handler from "../../../../api/articles/get/single/handler";

function createResponse(onEnd) {

    return httpMocks
        .createResponse({ eventEmitter: EventEmitter })
        .on("end", onEnd);
}

describe("GET /articles/:articleId", () => {

    it("must return the article with id of the one given (if exists)", done => {

        const articleId = 1;

        const request = httpMocks.createRequest({
            method: "GET",
            url   : "/articles/" + articleId,
            params: {
                articleId
            }
        });

        const response = createResponse(() => {

            const expected = {
                id: articleId
            };

            const actual = response._getData();

            assert.deepEqual(actual, expected);

            done();
        });

        handler(request, response);
    });
});
