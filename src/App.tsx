// import React from 'react';
import CanvasComponent from '../src/components/canvas/Canvas';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import RightSideBar from './components/rightSideBar/RightSideBar';
import TopBar from './components/topBar/TopBar';
function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <TopBar />
      <LeftSideBar />
      <RightSideBar />
      <CanvasComponent />
    </div>
  );
}

export default App;
