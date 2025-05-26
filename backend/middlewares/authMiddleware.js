const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    const authHeader = req.header.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({ error: 'Unauthorized: No token provided'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; //Decode the token content and place it into req.user for subsequent route usage.
        next();
    }catch(err){
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token'});
    }


};


module.exports = authMiddleware;