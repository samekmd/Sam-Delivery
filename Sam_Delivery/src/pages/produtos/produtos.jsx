import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';

function Produtos() {
  return (
    <div>
      <Menu />

      <Box
        sx={{
          width: "80%",  // aumenta a largura da caixa que contém os cards
          ml: "2%",
          margin: "10% auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,  // adiciona um espaço entre os cards
          flexWrap: "wrap"  // permite que os cards quebrem linha em telas menores
        }}
      >
        <Card sx={{ width: 200, height: 250, backgroundColor: "#DC2F02" }}>
          <CardMedia
            sx={{ height: 200 }}  // ajusta a altura da imagem
            image="/src/imgs/DALL·E 2024-10-08 18.14.08 - A high-quality image of a freshly baked pizza for a delivery website. The pizza has a perfectly golden-brown crust, topped with melted mozzarella chee.webp"
          />
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ color: "white" }} size="large">Pedir</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 200, height: 250, backgroundColor: "#DC2F02" }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/src/imgs/DALL·E 2024-10-08 18.20.38 - A high-quality image of an acai bowl for a delivery website. The bowl is filled with rich, dark purple acai topped with fresh fruits like sliced banan.webp"
          />
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ color: "white" }} size="large">Pedir</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 200, height: 250, backgroundColor: "#DC2F02" }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/src/imgs/DALL·E 2024-10-08 18.21.39 - A high-quality image of a freshly baked esfihra for a delivery website. The esfihra has a golden, crispy crust and is topped with ground beef, onions,.webp"
          />
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ color: "white" }} size="large">Pedir</Button>
          </CardActions>
        </Card>
      </Box>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default Produtos;
