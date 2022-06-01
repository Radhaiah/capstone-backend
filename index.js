//importing required packages
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const router=require('./Routes/Route');
const app=express();
//assign default port// 
const PORT=process.env.PORT ||5000;
//body cors// 
app.use(express.json());
//cors// 
app.use(cors());
app.use('/',router);
// importing mongodb url
const URI="mongodb+srv://pgtool:pgtool@cluster0.tvihk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{console.log(`Server is connected ${PORT}`)});
}).catch(err=>{console.log(err)});