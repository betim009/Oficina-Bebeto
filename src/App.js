import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cliente from './Pages/Cliente.jsx';
import Servicos from './Pages/Servicos';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/clientes" element={<Cliente />}/>
        <Route exact path="/servicos" element={<Servicos />}/>
      </Routes>
    </Router>   
  );
}

export default App;
