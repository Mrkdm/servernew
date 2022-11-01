import {Schema, model} from 'mongoose'

const ImageSchema =new Schema({
    typeProp: String,
    title:String,
    description: String,
    typeOperation:String,
    rooms: String,
    bathRooms:String,
    halfRooms: String,
    parking: String,
    key: Array,
    status: String,
    mtsConst: String,
    mtsTerr: String,
    longTerrain: String,
    frontTerrain: String,
    ubication:String,
    url:{
        type: Array,
        required: true
    }

},{
    timestamps:true,
    versionKey:false
})


export default model('Image', ImageSchema)