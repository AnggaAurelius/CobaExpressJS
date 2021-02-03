let todos = [
    {
        id: 1,
        title: "Belajar express.js",
        isDone: true,
    },
    {
        id: 2,
        title: "Belajar Node.js",
        isDone: false,
    },
];


exports.getTodos = (req, res) => {
    res.send({
        message: "Response Success",
        data: {
            todos,
        },
    });
};
