import React from 'react';
import './App.css';
import CharacterList from './ui/pages/characterList/characterList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CharacterList/>}/>
          <Route path='/character' element={<CharacterList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
