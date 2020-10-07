import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  fetch('/api/hello')
    .then(r=> r.json())
    .then(data => console.log(data));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <p>Home</p>} />
        <Route path='/test' render={() => <p>Test</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
