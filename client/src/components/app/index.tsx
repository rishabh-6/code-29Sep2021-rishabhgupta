import React from 'react';
import Footer from '../footer';
import Header from '../header';
import CarDisplayList from '../carList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Hyundai Car"/>
        <CarDisplayList />
      <Footer/>
    </div>
  );
}

export default App;
