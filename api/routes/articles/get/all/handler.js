export default function (db, req, res) {

    const articles = db("articles");

    res.json(articles);

    // res.json([
    //     {
    //         id       : 1,
    //         header   : "",
    //         text     : "",
    //         timestamp: (new Date()).toISOString()
    //     },
    //     {
    //         id       : 2,
    //         header   : "",
    //         text     : "",
    //         timestamp: (new Date()).toISOString()
    //     }
    // ]);
}
