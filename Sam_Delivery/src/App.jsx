
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home"
import Feedback from "./pages/feedback/feedback"
import Produtos from "./pages/produtos/produtos";
import PagarProduto from "./pages/pagar_produto/pagar_produto";



function App() {
  

  return (
    
    <div>

      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/pagar_produto" element={<PagarProduto/>} />
      
      </Routes>

      
      
    </div>
      
    
  )
}

export default App
