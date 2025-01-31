import { Nav } from "./Components/Nav/Nav";
import { HashRouter as Router, Routes, Route } from 'react-router'
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./Css/GlobalStyle";
import { Agenda } from "./Pages/Agenda/Agenda";
import { Pacientes } from "./Pages/Pacientes/Pacientes";
import { Medicos } from "./Pages/Medicos/Medicos";
import { CadastrarMedico } from "./Pages/CadastrarMedico/CadastrarMedico";
import { CadastrarPaciente } from "./Pages/CadastrarPaciente/CadastrarPaciente";
import { EditarMedico } from "./Pages/EditarMedico/EditarMedico";
import { EditarPaciente } from "./Pages/EditarPaciente/EditarPaciente";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OrganizaClinicProvider from "./Context/Context";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Css/Theme";

function App() {
  return (
    <>
      <OrganizaClinicProvider>
        <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Nav />
          <ToastContainer autoClose={3000} className='toast-container' />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />

            {/* Rota principal de paciente */}
            <Route path="/pacientes" >
              <Route index element={<Pacientes />} />
              <Route path="cadastrarpaciente" element={<CadastrarPaciente />} />
              <Route path="editarpaciente" element={<EditarPaciente />} />
            </Route>

            {/* Rota principal de médicos */}
            <Route path="/medicos"  >
              <Route index element={<Medicos />} />
              <Route path="cadastrarmedico" element={<CadastrarMedico />} />
              <Route path="editarmedico" element={<EditarMedico />} />
            </Route>
          </Routes>
        </Router>
        </ThemeProvider>
      </OrganizaClinicProvider>
    </>
  );
}

export default App;
