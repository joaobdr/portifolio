import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import "./Style.css";
import Home from "./Componentes/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
