'use strict'; // strict mode enable

exports.login = async function(req, res) {
    var requesBody = req.body;
    var username = 'user';
    if (requesBody["username"] == username) {
        await res.json({"message": "success !"});
    }else {
        await res.json({"message": "unsuccess"});
    }
}