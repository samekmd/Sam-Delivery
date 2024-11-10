import { Paper,  Box, Button } from '@mui/material'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react'
import './index.css'
import { sendFeedback } from '.';




function FormsFeedback() {

    const [valueStar, setValueStar] = React.useState(2);
    const [achou, setAchou] = React.useState('');
    const [sabendo, setSabendo] = React.useState('');
    const [recomendaria, setRecomendaria] = React.useState('');

   


    const handleSubmit = () => {
        try{
            const feedback = {
                restaurante:achou,
                pedido:valueStar,
                sabendo:sabendo,
                recomendar:recomendaria
            }
    
             sendFeedback(feedback)
             alert('Feedback enviado com sucesso')


              // Limpar os campos após o envio
            setValueStar(2);
            setAchou('');
            setSabendo('');
            setRecomendaria('');

        }catch(error){
            alert('Erro ao enviar o feedback')
            console.log('Erro ao enviar o feedback: ' + error)
        }
       
    }


    return (
        <div>
             <Paper elevation={5} style={{ padding: '20px', margin: 'auto',width: '50%', height: '540px', marginTop: '3%', textAlign:'center' }}>
                    
                    <br /><br />
                    <Box sx={{ gap:1,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                     <label>O que achou do restaurante?</label>   
                    <TextField id="outlined-basic" variant="outlined" className='achou' value={achou} onChange={(e) => setAchou(e.target.value)}/>
                    <br />
                    <label >Avalie seu último pedido</label>
                    <Rating
                        name="simple-controlled"
                        value={valueStar}
                        onChange={(event, newValue) => {
                        setValueStar(newValue);
                        }}
                    />
                    <br />
                    <label>Como ficou sabendo sobre o restaurante?</label>
                    <TextField id="outlined-basic" variant="outlined" className='sabendo' value={sabendo} onChange={(e) => setSabendo(e.target.value)}/>
                    <br />
                    <label>Recomendaria o restaurante?</label> 
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={recomendaria}
                    >
                           
                                <FormControlLabel value="sim" control={<Radio  onChange={(e) => setRecomendaria(e.target.value)}  />} label="Sim" />
                                <FormControlLabel value="não" control={<Radio  onChange={(e) => setRecomendaria(e.target.value)} />} label="Não" />
                               
                    </RadioGroup>
                    
                    <Button sx={{backgroundColor:"#9D0208",mt:2}} variant="contained" onClick={() => handleSubmit()}>Enviar</Button>
                    </Box>
            </Paper>
        </div>
    )
}




export default FormsFeedback