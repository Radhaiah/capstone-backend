const mongoose=require('mongoose');
// basic syntax for login page
const dayschema=mongoose.Schema({
    name:{type: 'string'},
    work:{type: 'string'},
    completion:{type: 'string'}
})
const dayplanModel=mongoose.model('work',dayschema);
module.exports =dayplanModel