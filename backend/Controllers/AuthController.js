const UserModel = require("../Models/User");

const signup = async (req,res) => {
    try{
        const{name,email,passowrd}=req.body;
        const user= await UserModel.findOne({email});
        if (user){
            return res.status(400)
            .json({message:'User already exist,you can log in',success:false})
        }
        const UserModel=new UserModel({name,email,password});
        UserModel.passowrd = await bcrypt.hasj(passowrd,10);
        await UserModel.save();
        res.status(201)
                .json({
                message:"Signup successfull",
                success: true
                })

    }catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success: false
        })

    }
}

module.exports={
    signup
}