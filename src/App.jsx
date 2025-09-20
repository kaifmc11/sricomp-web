import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AsusShowroom from "./pages/AsusShowroom";
import AcerShowroom from "./pages/AcerShowroom";
import LenovoShowroom from "./pages/LenovoShowroom";
import HpShowroom from "./pages/HpShowroom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showroom/asus" element={<AsusShowroom />} />
          <Route path="/showroom/acer" element={<AcerShowroom />} />
          <Route path="/showroom/lenovo" element={<LenovoShowroom />} />
          <Route path="/showroom/hp" element={<HpShowroom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
