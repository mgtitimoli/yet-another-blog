import singletonProvider from "lib/singleton-provider";
import * as request from "lib/request";

export class ArticleService {

    constructor(request) {

        this._request = request;
    }

    // create(article) {

    //     this._request.postJson();
    // }

    // fetchAll() {

    //     this._request.getJson();
    // }

    // fetch(id) {

    //     this._request.getJson();
    // }

    // update(article) {

    //     this._request.getJson();
    // }
}

export default singletonProvider(() => {

    return new ArticleService(request);
});
