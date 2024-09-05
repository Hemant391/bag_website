const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const path =require('path');
const db=require('./confi/mongoose-connection')
const ownersRouter=require('./routes/owner-model')
const usersRouter=require('./routes/user-model')
const productsRouter=require('./routes/product-model')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");

app.use('/owners',ownersRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)

app.get('/',(req,res)=>{
    res.send('hemant this side')
})
app.listen(3000,()=>{
    console.log(`post is running on 3000 port`)
})