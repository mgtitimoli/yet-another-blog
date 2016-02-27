export default function (req, res) {

    res.send({
        id       : req.params.articleId,
        header   : "",
        text     : "",
        timestamp: (new Date()).toISOString()
    });
}
