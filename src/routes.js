import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer";
import Experiencia from "./pages/Experiencia";
import Contatos from "./pages/Contatos";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Formacao from "./pages/Formacao";

const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='projetos' element={<Projects />} />
                <Route path='formacao' element={<Formacao/>} />
                <Route path='experiencia' element={<Experiencia />} />
                <Route path='contatos' element={<Contatos />} />
                <Route path='*' element={<Error/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesPath