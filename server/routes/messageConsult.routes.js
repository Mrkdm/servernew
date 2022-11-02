import {Router} from 'express'

import MessageConsult from '../models/messageConsult.js' 
const router = Router();


router.post('/api/messageConsult/',async (req,res)=>{
        var data = req.body;
        try{
        const userConsult =    new MessageConsult ({
        email: data.email,
        name: data.name,
	lastname: data.lastname,
        tel: data.tel,
        })

        await userConsult.save()
        res.json({status:1})
        }catch(err){
        res.json({status:0, err})
        return
     }
})

router.get('/api/messageConsult/',async(req,res)=>{
        var count = await MessageConsult.count()   
        var userConsult = await MessageConsult.find()
        res.json({
             userConsult,
             "count": count
        })


})	


router.delete('/api/messageConsult/:id', async (req, res)=>{
  
  var deleteUserMessage = await MessageConsult.findByIdAndDelete(req.params.id) ;

  res.json(deleteUserMessage);

})

export default router
