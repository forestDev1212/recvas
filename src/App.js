import React from 'react';
import { RecordView, Record, Navbar } from './components';
import './App.css';
import CustomWebCam from './components/CustomWebCam';
import ScreenShot from './components/ScreenShot';
import ScreenCapture from './components/ScreenCapture';

const App = () => {
  return (
    <div className='main-body'>
      <CustomWebCam/>
      <ScreenCapture/>
      <ScreenShot/>
    </div>
  )
}

export default App;