import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import StudentResultBoard from './StudentResultBoard/StudentResultBoard';
import Form from './Form/Form';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route path='/' exact component={StudentResultBoard} />
        <Route path='/register'>
          <Form />
        </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
