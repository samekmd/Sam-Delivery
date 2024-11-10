import transporter from "../config/config.js";
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (conteudo) => {
    try {
      const info = await transporter.sendMail({
        from: "cliente@gmail.com",
        to: process.env.EMAIL,
        subject: "Feedback do Restaurante",
        text: JSON.stringify(conteudo, null, 2), // Converte o objeto JSON em uma string para o campo "text"
        html: `
          <div style="background-color: #e86a0c; padding: 20px; border-radius: 10px; width: 90%; color: #ffffff; font-family: Arial, sans-serif;">
            <h2 style="text-align: center;">Avaliação do Restaurante</h2>
            
            <p><strong>O que achou do restaurante?</strong></p>
            <p style="background-color: #ffffff; color: #000; padding: 10px; border-radius: 5px;">${conteudo.restaurante}</p>
            
            <p><strong>Avalie seu último pedido</strong></p>
            <p style="background-color: #ffffff; color: #000; padding: 10px; border-radius: 5px;">${conteudo.pedido}</p>
            
            <p><strong>Como ficou sabendo sobre o restaurante?</strong></p>
            <p style="background-color: #ffffff; color: #000; padding: 10px; border-radius: 5px;">${conteudo.sabendo}</p>
            
            <p><strong>Recomendaria o estabelecimento?</strong></p>
            <p style="background-color: #ffffff; color: #000; padding: 10px; border-radius: 5px;">${conteudo.recomendar}</p>
          </div>
        `
      });
  
      console.log(`Email enviado: ${info.messageId}`);
    } catch (error) {
      console.log(`Erro ao enviar email: ${error}`);
    }
  };
  