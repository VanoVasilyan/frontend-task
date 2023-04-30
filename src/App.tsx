import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import './index.css'
import ListItems from './Components/ListItems/ListItems';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Navbar />
      <ListItems />
    </div>
  );
}

export default App;
