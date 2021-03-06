import React from 'react'
import './App.css';
import { Header } from '../Components/Header/Header';
import { Content } from '../Components/Content/Content';
import { Footer } from '../Components/Footer/Footer';
 
function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
