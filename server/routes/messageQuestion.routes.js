
import {Router} from 'express'
import Message from '../models/messageQuestion'

const router = Router();


router.post('/api/messageQuestion/',async (req,res)=>{
	var data = req.body;
console.log(data)
	try{
	const userQuestion =	new Message ({
	email: data.email,
	name: data.name,
	tel: data.tel,
	idProp: data.idProp.data,
	message: data.text
	})

       await userQuestion.save()

	res.json({status:1})
	}catch(err){
	res.json({status:0, err})
	console.log(err)
     }

})

router.get('/api/messageQuestion/',async(req,res)=>{
	var count = await Message.count()   
	var userQuestion = await Message.find()
	res.json({
             userQuestion,
	     "count": count
	})


})


router.delete('/api/messageQuestion/:id', async (req, res)=>{
  
  var deleteUserMessage = await Message.findByIdAndDelete(req.params.id) ;

  res.json(deleteUserMessage);

})




export default router;
