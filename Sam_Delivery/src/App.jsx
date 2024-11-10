
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home"
import Feedback from "./pages/feedback/feedback"
import Produtos from "./pages/produtos/produtos";




function App() {
  

  return (
    
    <div>

      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/produtos" element={<Produtos/>}/>
      
      </Routes>

      
      
    </div>
      
    
  )
}

export default App
