import React from 'react';
import './App.css';
import Header from "./components/header/header";
import ContentTabs from "./components/content-tabs/contentTabs";

import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContentTabs></ContentTabs>
    </div>
  );
}

export default App;
