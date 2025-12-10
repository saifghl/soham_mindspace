// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
