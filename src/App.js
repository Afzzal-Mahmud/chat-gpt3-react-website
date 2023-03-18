import React from 'react';
import './App.css';

import { Header,Blog,Features,Possibility,WhatGPT3,Footer } from './Containers';
import { CTA,Brand,Navbar} from './components'

function App() {
  return (
    <div className="App">
      {/* hero section */}
      <div className="gradient__bg">
          <Navbar/>
          <Header/>
      </div>

      <Brand/>
    {/* a simple description about chat Gpt3 */}
      <WhatGPT3/>

      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
