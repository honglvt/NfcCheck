const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";
module.exports = UpdateDao = (req, res) => {
    MongoClient.connect(uri, (err, client) => {
        client.db('nfc').collection('devices').update({
            "id": req.body.id
        }, {
            $set: {
                "status": req.body.status,
                "lastCheckDate": req.body.lastCheckDate
            }
        }, (err, result) => {
            console.log(err);
            res.json({
                code: 200,
                msg: 'success',
                data: ''
            })
        })
    });
}