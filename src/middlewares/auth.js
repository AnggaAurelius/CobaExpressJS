const isLoggedIn = true

//Dummy authenticates middleware
exports.authenticated = (req, res, next) => {
    if (isLoggedIn) next();
    else {
        res.send({
            message: "You are Unauthenticated!",
        });
    }
}