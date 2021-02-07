const { User } = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");

exports.register = async (req, res) => {
    try {
        const schema = joi.object({
            fullName: joi.string().min(3).required(),
            email: joi.string().email().min(6).required(),
            password: joi.string().min(8).required(),
        });

        const { error } = schema.validate(req.body);

        if ( error ) 
            return res.status(400).send({
                error,
            })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        });
    }
}