const randomUsername = require("../utils/random-username");

module.exports.homeController = (req, res) => {
    console.log(randomUsername());
    res.render('index');
};

