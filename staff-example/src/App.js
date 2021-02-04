import './App.css';
import { Route, Switch } from 'react-router-dom';

import Staff from './components/Staff';
import Info from './components/Info';
/**
 * En meny - komponent till vänster som innehåller namn
 * En info - komponent som visar upp detaljerad info om den anställda
 * 
 * 1. När jag klickar på ett namn så skicka med ett id i url:en på den anställda
 * 2. I info-komponenten hämta id från url:en och filtera ut den anställda från en array
 * 3. Visa information
 */

function App() {
  return (
    <section>
      {/* Denna komponent (Staff) ligger utanför routern och är alltid synlig */}
      <Staff />
      <Switch>
        <Route path="/:id" component={ Info } />
      </Switch>
    </section>
  );
}

export default App;
