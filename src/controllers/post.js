const { Post } = require("../../models");

exports.getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll();
        
        return res.send({
            message: "Post Succesfully Retrives",
            data: {
                posts,
            },
        });
    } catch (err){
        console.log(err);
        return res.status(500).send({
            message: "Server Error",
        })

    }
};

// exports.functionName = async (req, res) => {
//     try {

//     } catch (err) {

//     }
// }