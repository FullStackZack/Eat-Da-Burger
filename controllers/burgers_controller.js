const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        console.log(result);

        res.json(result)
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const id = req.params.id;
    const condition = "id = " + id
    const obj = {
        devoured: true
    }
    burger.updateOne(obj, condition, function(result) {
        res.json(result);
    })
    
})

module.exports = router;