const mongoose=require('mongoose');
// basic syntax for login page
const userschema=mongoose.Schema({
    firstname:{type: 'string'},
    lastname:{type: 'string'},
    email:{type: 'string'},
    mobile:{type: 'string'},
    password:{type: 'string'}
})
const userModel=mongoose.model('email',userschema);
module.exports =userModel