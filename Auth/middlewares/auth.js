
const jwt = require("jsonwebtoken");
function CheckIsAuth(req, res, next) {
    console.log(req.cookies.Access_Token);
    try {

        const decoded = jwt.verify(req.cookies.Access_Token, "asdfghjkl")
        console.log("Decoded token:", decoded);
        if (!req.cookies.Access_Token) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized access" });

    }

    console.log("Auth middleware called");
    next();
}


module.exports = CheckIsAuth;
