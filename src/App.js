import React from 'react'
import './App.scss';
import Feed from './component/feed/Feed';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import Widget from './component/widget/Widget';
import Login from './pages/login/Login';

function App() {
  const user = null;
  return (
    <div className="app">
      { !user ? 
        (<Login />) :
        (
          <>
        <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
          </>
        ) 
      }
    </div>
  );
}

export default App;
