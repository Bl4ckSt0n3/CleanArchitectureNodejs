'use strict';

exports.test_all = async function(req, res) {
    await res.json({"message": "test"});
};

exports.create_test = async function(req, res) {
    var body = req.body;
    var message = body.message;
    if (message) {
        await res.json({"message": message});
    }
    else {
        res.json({"message": "not found"});
    }
}