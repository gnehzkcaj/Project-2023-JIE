import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PokemonDetail from './pages/PokemonDetail';
import Gallery from './pages/Gallery';
import './App.css';

import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pokemon/:id" element={<>
          <PokemonDetail />
        </>} />
        <Route path="*" element={<h1>4-oh!-4, that page doesn't exist.</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;