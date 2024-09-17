const { signup } = require('../Controllers/AuthController');
const { signupValidation } = require('../MiddleWares/AuthValidation');

const router = require('express').Router();

router.post('/login',(req,res)=>{
    res.send('login Sucess');
});
router.post('/signup',signupValidation,signup);

module.exports= router;