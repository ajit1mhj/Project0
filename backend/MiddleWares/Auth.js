const jwt = require('jsonwebtoken')
const ensureAuthenticated=(req,res,next)=>{
    const auth = req.headers['authorizatoin'];
    if(!auth){
        return res.status(403)
            .json({message:"unauthorized access jwt token is requried"});

    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401)
            .json({message:"unauthorized access jwt token is wrong or expred"})


    }
}
module.exports = ensureAuthenticated;