export default function (db, req, res) {

    const articles = db("articles").value();

    res.json({
        result: articles
    });
}
