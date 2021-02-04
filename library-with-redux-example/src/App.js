import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './components/Books';
import BookInfo from './components/BookInfo';

function App() {

  return (
    <Switch>
      <Route path="/" component={ Books } exact />
      {/* :id är en dynamisk parameter där man kan skicka det man önskar exempelvis en siffra 
      så url:en blir då /info/1 */} 
      <Route path="/info" component={ BookInfo } />
    </Switch>
  );
}

export default App;