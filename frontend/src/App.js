import { Nav } from "./Components/Nav/Nav";
import {HashRouter as Router, Routes, Route} from 'react-router'
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./Css/GlobalStyle";
import { Agenda } from "./Pages/Agenda/Agenda";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agenda" element={<Agenda/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
