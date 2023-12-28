
import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/HeaderArea' element={<HeaderArea/>}/>
    </Routes>
    </div>
  );
}

export default App;
