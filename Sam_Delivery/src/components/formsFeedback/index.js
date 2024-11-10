import axios from 'axios';



export const sendFeedback = async (conteudo) => {
    try{
        const response = await axios.post('http://localhost:3000/send-email', {conteudo})
        return response.data

    }catch(error){
        console.log(`Erro ao enviar o feedback: ${error}`)
    }



}