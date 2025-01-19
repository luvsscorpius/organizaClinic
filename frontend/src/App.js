import { Nav } from "./Components/Nav/Nav";
import {HashRouter as Router, Routes, Route} from 'react-router'
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./Css/GlobalStyle";
import { Agenda } from "./Pages/Agenda/Agenda";
import { Pacientes } from "./Pages/Pacientes/Pacientes";
import { Medicos } from "./Pages/Medicos/Medicos";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agenda" element={<Agenda/>} />
          <Route path="/pacientes" element={<Pacientes/>} />
          <Route path="/medicos" element={<Medicos/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
