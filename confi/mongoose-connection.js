const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/scatch').then(function(data){
    console.log('connected')
}).catch((e)=>{
    console.log(e)
})

module.exports=mongoose.connection;