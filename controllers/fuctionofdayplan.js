const dayplanModel=require('../loginpage/Dayplanpage')
const Dayplan = async(req,res)=>{
    try{
            const dayplan=new dayplanModel ({
                name:req.body.name,
                work:req.body.work,
                completion:req.body.completion
            })
            //save logion data to database
            const createdayplan=await dayplan.save()
            if(createdayplan){
                res.send(createdayplan);
            }
    }catch(e){console.log(e)}
}
module.exports ={Dayplan}