import { Paper,  Box, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react'
import './index.css'





function FormsPagarProduto() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
   


    return (
        <div>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
             <Paper elevation={5} style={{ padding: '20px',width: '30%', height: '540px', marginTop: '3%', textAlign:'center' }}>
                    
                    <br /><br />
                    <Box sx={{ gap:1,margin:'auto', width:"50%",display:"flex",flexDirection:"column" }}>
                     <label>Pagamento</label> 
                     <FormControl sx={{width:100, height:50}}>
                                <InputLabel id="demo-simple-select-label">Pay</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Pix</MenuItem>
                                <MenuItem value={20}>Vale</MenuItem>
                                <MenuItem value={30}>Mastercard</MenuItem>
                                </Select>
                        </FormControl>  
                  
                    <br />
                   
                   
                    <label>Deseja Rastreamento?</label> 
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
             
                    >
                           
                                <FormControlLabel value="sim" control={<Radio    />} label="Sim" />
                                <FormControlLabel value="não" control={<Radio   />} label="Não" />
                               
                    </RadioGroup>
                    <br />
                    <label>Dados da entrega:</label>
                    
                    <Box sx={{display:"flex", flexDirection:"column", textAlign:"left", width:150, mt:1 }}>
                    <p>
                        Pizza de Peperone
                    </p>
                    <br />
                    <p>
                        R$ 50,00
                    </p>
                    <br />
                    <p>
                        Endereço: Rua 12455
                    </p>
                    </Box>
                    <br /><br />
                    <Button sx={{backgroundColor:"#9D0208",mt:2}} variant="contained" >Finalizar</Button>
                    </Box>
            </Paper>
            <Card sx={{ width: 400, height: 400, backgroundColor: "#DC2F02", mt:15, ml: 20 }}>
          <CardMedia
            sx={{ height: 400, width:400 }}  // ajusta a altura da imagem
            image="/src/imgs/DALL·E 2024-10-08 18.14.08 - A high-quality image of a freshly baked pizza for a delivery website. The pizza has a perfectly golden-brown crust, topped with melted mozzarella chee.webp"
          />
         
        </Card>
        </Box>
        </div>
    )
}




export default FormsPagarProduto