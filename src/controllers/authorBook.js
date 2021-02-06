const { Author, Book } = require("../../models");

exports.getBooks = async (req, res) => {
    try{
        const books = await Book.findAll({
            include: {
                model: Author,
                
                attributes: {
                exclude: ["createdAt","updatedAt","AuthorBooks"],
                },
                through: {
                    attributes:[],
                }
            },
            attributes: {
                exclude: ["emailId","createdAt","updatedAt"],
            }
        });
        
        res.send({
            status: "success",
            message: "Books Succesfully Retrives",
            data: {
                books,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};
