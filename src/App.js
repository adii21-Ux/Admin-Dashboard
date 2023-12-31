import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;