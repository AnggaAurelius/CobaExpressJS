const { User } = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const schema = joi.object({
            fullName: joi.string().min(3).required(),
            email: joi.string().email().min(6).required(),
            password: joi.string().min(8).required(),
        });

        const { error } = schema.validate(req.body);

        if ( error ) 
            return res.status(400).send({
                message: error.details[0].message,
            })
        const hashedStrenght = 10;
        const hashedPassword = await bcrypt.hash(password, hashedStrenght);

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const secretKey = "your-secret";
        const token = jwt.sign(
            {
            id: user.id
            },
            secretKey
        );

        res.send({
            status: "succes",
            message: "Register Succces",
            data: {
                user: {
                    email,
                    token, 
                },
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        });
    }
}