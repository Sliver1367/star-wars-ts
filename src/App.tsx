import React, {useState} from 'react';
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import './App.css'
import Header from "./components/Header";
import {defaultHero} from "./utils/constants";

const App = () => {
  const [hero, setHero] = useState(defaultHero);


  return (
      <div className={'container-fluid'}>
        <Header hero={hero}/>
        <Main changeHero={setHero}/>
        <Footer/>
      </div>
  );
}

export default App;