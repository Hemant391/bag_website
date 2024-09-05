const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Hello world owner is here')
})

module.exports=router;