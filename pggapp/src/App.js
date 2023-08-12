import { Link, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PokemonDetail from './pages/PokemonDetail';
import Gallery from './pages/Gallery';
import Game from './pages/Game';
import './App.css';
import SearchAppBar from './components/Appbar';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Footer from './components/Footer';
import { grey } from '@mui/material/colors';

function App() {
  const NavBar = () => {
    return (
      <AppBar position="static" style={{ background: 'white' }}>
        <Toolbar sx={{ color: grey[600]}}>
          <Typography variant="h5" component="div" sx={{ marginLeft: 5, flexGrow: 1 }}>
            Pokémon Gallery & Games
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/gallery" color="inherit">
            Pokédex
          </Button>
          <Button component={Link} to="/pokemon/25" color="inherit">
            Sprite
          </Button>
          <Button component={Link} to="/game" color="inherit">
            Games & Apps
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  return (
    <div className="App">
      <SearchAppBar />
      <NavBar marginTop={20} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pokemon/:id" element={<>
          <PokemonDetail />
        </>} />
        <Route path="/game" element={<Game />} />
     
        <Route path="*" element={<h1>4-oh!-4, that page doesn't exist.</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;