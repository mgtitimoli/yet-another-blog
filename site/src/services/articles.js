import singletonProvider from "../lib/singleton-provider";

export class ArticleService {

    constructor(/*{  }*/) {
    }

    create() {
    }

    update() {
    }
}

export default singletonProvider(() => {

    return new ArticleService({
    });
});
