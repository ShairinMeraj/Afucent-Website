import './App.css';
import {Router, Routes , Route} from 'react-router-dom';
import Home from './routes/index';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Services';
import  Expertise from './routes/Expertise';
import Career from './routes/Career';


function App() {
  return (
  
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/careers" element={<Career/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
  

  );
}

export default App;
