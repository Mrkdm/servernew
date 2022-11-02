import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'


//Importando Rutas

import indexRoutes from "./routes/index.routes"
import imagesRoutes from './routes/images.routes'
import messageQuestionRoutes from './routes/messageQuestion.routes'
import messageConsultRoutes from './routes/messageConsult.routes'

//Importando base de datos 
import './database'


//Instanciando express en constante app
const app = express();

//Declarando middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


//Declarando rutas para ser usadas
//app.use(messageQuestionRoutes)
//app.use(messageConsultRoutes)
 app.use(indexRoutes)
 app.use(imagesRoutes)  


 app.set('port', process.env.PORT || 3800);
 console.log('success')
 
 
 app.listen(app.get('port'))