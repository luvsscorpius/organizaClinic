import { Nav } from "./Components/Nav/Nav";
import {HashRouter as Router, Routes, Route} from 'react-router'
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./Css/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
