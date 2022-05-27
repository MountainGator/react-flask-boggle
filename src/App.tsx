import './App.css';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './components/home';
import Boggle from './components/boggle';
import GameOver from './components/gameover';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Boggle />} />
        <Route path='/gameover' element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
