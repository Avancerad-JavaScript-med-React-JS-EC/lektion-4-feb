import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './components/Books';
import BookInfo from './components/BookInfo';

function App() {

  return (
    <Switch>
      <Route path="/" component={ Books } exact />
      <Route path="/info" component={ BookInfo } />
    </Switch>
  );
}

export default App;