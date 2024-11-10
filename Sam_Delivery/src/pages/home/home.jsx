
import Menu from "../../components/menu/menu"
import Carousel from "../../components/carrousel/carrousel";
import { Box } from "@mui/material";
import Footer from "../../components/footer/footer";

const images = [ 
    '/src/imgs/DALL·E 2024-10-08 18.14.08 - A high-quality image of a freshly baked pizza for a delivery website. The pizza has a perfectly golden-brown crust, topped with melted mozzarella chee.webp',
    '/src/imgs/DALL·E 2024-10-08 18.20.38 - A high-quality image of an acai bowl for a delivery website. The bowl is filled with rich, dark purple acai topped with fresh fruits like sliced banan.webp',
    '/src/imgs/DALL·E 2024-10-08 18.21.39 - A high-quality image of a freshly baked esfihra for a delivery website. The esfihra has a golden, crispy crust and is topped with ground beef, onions,.webp',
]


function Home(){
    return(
        <>
        <Menu/>
        
        <Box sx={{ padding: '20px', margin: 'auto',width: '50%', height: '540px', marginTop: '2%'}}>
        <Carousel images={images} />
        
        </Box> 
        <Footer/>
    
        </>
    )
}




export default Home;