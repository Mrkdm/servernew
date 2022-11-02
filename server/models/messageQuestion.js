import {Schema, model} from 'mongoose'

const MessageSchema = new Schema({
	email: {
	type: String,
	unique: false
	},
	name:String,
	tel: String,
	idProp: String,
	message: {
	type: String,
	required: true,
	}
},{
    timestamps:true,

})


export default model('Message', MessageSchema)
