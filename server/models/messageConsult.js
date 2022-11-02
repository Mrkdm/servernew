import {Schema,model} from 'mongoose'

const MessageConsultSchema =new Schema({
        name: String,
	lastname: String,
	email: {
	  type: String,
	  require: true
	},
	tel: String,
},{
    timestamps:true,

})


export default model('MessageConsult', MessageConsultSchema)
