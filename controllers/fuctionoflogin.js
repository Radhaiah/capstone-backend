const userModel=require('../loginpage/login')
const loginUser=async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id,req.body);
        if(user){
            res.json(user);
        }
    }catch(e){console.log(e);}
}
const createUser = async(req,res)=>{
    try{
            const users=new userModel ({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                mobile:req.body.mobile,
                password:req.body.password
            })
            //save logion data to database
            const createData=await users.save()
            if(createData){
                res.send(createData);
            }
    }catch(e){console.log(e)}
}
module.exports ={createUser,loginUser}