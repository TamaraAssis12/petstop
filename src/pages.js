const stops = require("./database/fakedata.js")

module.exports = {
    index(req, res) {
        return res.render("index")
    },

    stop(req, res) {
        return res.render("stop")
    },

    stops(req, res) {
        return res.render("stops", { stops })
    },

    createStop(req, res) {
        return res.render("create-stop")
    }
}