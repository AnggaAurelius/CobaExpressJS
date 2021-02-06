const { Email, Employee } = require("../../models");

exports.getEmployees = async (req, res) => {
    try{
        const employees = await Employee.findAll({
            include: {
                model: Email,
                attributes: {
                exclude: ["employeeId","createdAt","updatedAt","EmployeeId"],
                }
            },
            attributes: {
                exclude: ["emailId","createdAt","updatedAt"],
            }
        });
        
        res.send({
            status: "success",
            message: "Employees Succesfully Retrives",
            data: {
                employees,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};