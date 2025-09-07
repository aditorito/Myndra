const jwt = require('jsonwebtoken'); // ✅ Added
const dotenv = require('dotenv');
dotenv.config();

// Middleware to verify JWT

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    jwt.verify(authHeader, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" });
        req.userId = decoded.id;
        next();
    });
}


module.exports = verifyToken;