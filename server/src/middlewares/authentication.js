const jwt = require('jsonwebtoken');
const Authentiction = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.send("please login in again")
    }

    const user_token = req.headers.authorization.split(" ")[1];
    jwt.verify(user_token, "saikiranjwtkey", function(err, decoded) {
        if(err){
            return res.send("Please login ")
        }
        console.log(decoded);
        req.body.email = decoded.email
        next()
    })
}

module.exports = {Authentiction};