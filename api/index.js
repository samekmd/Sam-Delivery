import express from 'express';
import cors from 'cors';
import routes from './routes.js'
import dotenv from 'dotenv'


dotenv.config();


const app = express();
const port = process.env.PORT;


app.use(cors())
app.use(express.json());
app.use('/', routes)

app.listen(port, () => {
  

    try{
        console.log("Server is running on port " + port)

    }catch(error){
        console.log("Erro ao iniciar o servidor" + error)
    }


})
