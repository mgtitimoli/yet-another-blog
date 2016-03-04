export default function (db, req, res) {

    const article = db(articles).find({
        id: req.params.id
    });

    res.send(article);
}
