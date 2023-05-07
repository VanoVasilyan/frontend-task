import React from 'react';
import { useGlobalContext } from './context/context';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import './index.css'
import ListItems from './Components/ListItems/ListItems';

const App = () => {
  const { isShowSideBar, showSideBar } = useGlobalContext();
  return (
    <div className='main'>
      {isShowSideBar && <div onClick={showSideBar} className="blur"></div>}
      <Header />
      <Navbar />
      <ListItems />
    </div>
  );
}

export default App;
