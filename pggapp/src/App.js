import { Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import HomePage from './components/Homepage';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/Detail" element={<>        
          <Detail />
        </>} />
        <Route path="*" element={<h1>Uh oh, that page doesn't exist.</h1>} />
      </Routes>
    </div>
  );
}

export default App;