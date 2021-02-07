const { User } = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        res.send({
            testing: {
                email,
                password,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        });
    }
}