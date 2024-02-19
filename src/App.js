import React from 'react';
import { RecordView, Record, Navbar } from './components';
import './App.css';
import CustomWebCam from './components/CustomWebCam';

const App = () => {
  return (
    <div className='main-body'>
      <CustomWebCam/>
    </div>
  )
}

export default App;