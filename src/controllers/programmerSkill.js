const { Programmer, Skill } = require("../../models");

exports.getProgrammers = async (req, res) => {
    try{
        const programmers = await Programmer.findAll({
            include: {
                model: Skill,
                as: "skills",
                attributes: {
                exclude: ["programmerId","createdAt","updatedAt","ProgrammerId"],
                }
            },
            attributes: {
                exclude: ["createdAt","updatedAt"],
            }
        });
        
        res.send({
            status: "success",
            message: "Programmers Succesfully Retrives",
            data: {
                programmers,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};

exports.getSkills = async (req, res) => {
    try{
        const skills = await Skill.findAll({
            include: {
                model: Programmer,
                as: "programmer",
                attributes: {
                exclude: ["createdAt","updatedAt"],
                }
            },
            attributes: {
                exclude: ["programmerId","createdAt","updatedAt","ProgrammerId"],
            }
        });
        
        res.send({
            status: "success",
            message: "Skills Succesfully Retrives",
            data: {
                skills,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};