import React from 'react';
import './Styles/MainStyle.css';
import SideBar from './Components/SidebarComponnets/Sidebar';

function App() {
  return (
    <div>
      <div className="green-container">

      </div>
      <div className="main-container">
        <div className="white-right-side">
      <SideBar/>
      </div>
      </div>
    </div>
  );
}

export default App;
