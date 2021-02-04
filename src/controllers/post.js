const { Post } = require("../../models");

exports.getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll();
        
        res.send({
            message: "Post Succesfully Retrives",
            data: {
                posts,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};

exports.getPostsById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      return res.send({
        message: `Post with id ${id} Not Existed`,
      });
    }

    res.send({
      message: `Post with id ${id} Successfully Retrieved`,
      data: {
        post,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};