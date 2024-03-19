import Navbar from "./header/Header";
import Main from "./header/Main";
import Footer from "./header/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "./Astakas/a";
import Landing from "./landing";
import Kali from "./Astakas/Kali";

function App() {
  return (
    <>
    {/* <div>
      <Landing/>
    </div> */}

    <BrowserRouter>
    

    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      
      <Route path="/astakas" element={<A/>}>
        
        {/* <Route path="/a" element={<A/>}/>
        
        <Route path="/a" element={<A/>}/>
        <Route path="/a" element={<A/>}/>
        <Route path="/a" element={<A/>}/>
        <Route path="/a" element={<A/>}/> */}
      </Route>
      <Route path="/astakas/kali" element={<Kali/>}/>

      <Route path="/kavachas" element={<Footer/>}></Route>
      <Route path="/stotras" element={<Footer/>}></Route>
      
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
