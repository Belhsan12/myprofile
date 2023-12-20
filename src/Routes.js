import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Header from './components/Header';


const Index = () => {
  return (
    <Routes>
     
        <Route exact path="/header" component={Header} />
    
    </Routes>
  );
};

export default Index;
