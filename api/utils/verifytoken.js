const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json("You are not authenticated!");
    }

    const tokenValue = token.split(" ")[1]; // Extract the token value after "Bearer "
    //decoded  in here is user 
    jwt.verify(tokenValue, process.env.MY_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json("Invalid token!");
        }
 

        // assigns the decoded user information (user) to the req.user property. This allows other middleware functions or route handlers downstream in the request handling pipeline to access the user information conveniently via req.user.

        //after succ the verify func decode the paylode 
        req.user = user;
        //Passing to Next Middleware/Handler: After setting req.user, the middleware calls next(), allowing the request to continue processing. Subsequent middleware functions or the final route handler can now access the req.user property to retrieve user-related data without repeatedly decoding the token.
        next();
    });
};


const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id === req.params._id || req.user.isAdmin) {
            next();
        } else {
            return res.status(400).json("You can only update ur account!");
        }
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        // he anonymous function passed as an argument to verifyToken is a callback that gets executed within verifyToken at a specific point when the token verification process is completed and the next() function is called inside verifyToken. 
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(400).json("You are not an admin!");
        }
    });
};




module.exports = {
    verifyUser,
    verifyAdmin,
  };