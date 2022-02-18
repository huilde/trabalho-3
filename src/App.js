import logo from './logo.svg';
import './App.css';
import Calendario from './Calendario';
import Apresetacao from "./Apresentacao"
import Noticias from "./Noticias"
import Documentos from "./Documentos"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Cabecalho from './Components/Cabecalho';
import Tads from './Components/Tads';
import Footer from './Components/Footer';
import Filmes from './Filmes';
function App() {
  return (
    <>
    <Cabecalho></Cabecalho>
    <Tads></Tads>
    <Header></Header>
    <Router>
    <Routes>
    <Route path="/" element={<Apresetacao/>}>
      Teste
    </Route>
    <Route path="/Noticias" element={<Noticias/>}>
      Teste1
    </Route>
    <Route path="/Calendario" element={<Calendario/>}>
      Teste2
    </Route>
    <Route path="/Filmes" element={<Filmes/>}>
      Teste2
    </Route>
    <Route path="/Documentos" element={<Documentos/>}>
      Teste2
    </Route>
  </Routes>
</Router>
<Footer></Footer>
</>
  )
}

export default App;
