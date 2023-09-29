import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './styles/App.css';
import Contact from './components/Contact';
// import './styles/DarkTheme.css';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      
        <Footer />
      </div>
    </Router>
  );
};

export default App;
