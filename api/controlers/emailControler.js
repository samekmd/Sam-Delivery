import {sendEmail} from '../services/emailService.js';



export const sendEmailController = async (req, res) => {
    try{
        const {conteudo} = req.body;
        const response = await sendEmail(conteudo)
        
        return res.status(200).json(response)


    }catch(error){
        console.log("Erro ao enviar o email: " + error)
    }

}