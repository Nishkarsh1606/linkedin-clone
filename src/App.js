import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar.js"
import Feed from './Feed/Feed'
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
        <Header/>
        <div className="app_body">
      {/* App Body */}
        <Sidebar/>
        <Feed/>
        {/* Widgets/Right Side bar */}
        <Sidebar/>
        </div>
    </div>
  );
}

export default App;

/*
NOTES for notion
1. dont use curly braces with default exports


*/
