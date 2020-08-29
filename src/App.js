import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
 
export const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Header/>
     
       
    </Switch>
    </BrowserRouter>
  );
}

export default App;
