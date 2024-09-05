const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    image:String,
    name:String,
    discount:{
        type:Number,
        default: 0
    },
    panelcolor:string,
    price:Number,
    bgcolor:String,
    textcolor:String,
})

module.exports=mongoose.model('product',productSchema);