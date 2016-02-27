export default function (req, res) {

    res.json([
        {
            id       : 1,
            header   : "",
            text     : "",
            timestamp: (new Date()).toISOString()
        },
        {
            id       : 2,
            header   : "",
            text     : "",
            timestamp: (new Date()).toISOString()
        }
    ]);
}
