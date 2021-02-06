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

exports.getAuthors = async (req, res) => {
    try{
        const authors = await Author.findAll({
            include: {
                model: Book,
                
                attributes: {
                exclude: ["createdAt","updatedAt","AuthorBooks"],
                },
                through: {
                    attributes:[],
                }
            },
            attributes: {
                exclude: ["createdAt","updatedAt"],
            }
        });
        
        res.send({
            status: "success",
            message: "Author Succesfully Retrives",
            data: {
                authors,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};
