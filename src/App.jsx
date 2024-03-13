import React from 'react'
import './App.css'
import Form from './components/Form';
import Form2 from './components/Form2';
import Preview from './components/Preview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes> 
      <Route exact path='/' element={<Form />} />
      <Route exact path='/form2' element={<Form2 />} />
      <Route exact path='/preview' element={<Preview />} />
    </Routes> 
    </Router>
    </>
  )
};

export default App
