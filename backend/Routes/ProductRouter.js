const ensureAuthenticated =require('../MiddleWares/Auth')
const router = require('express').Router();

router.get('/',ensureAuthenticated,(req,res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:29999
        }
    ])
});

module.exports = router;