import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <h1>Welcome!</h1>
          </Route>
          <Route exact path = "/:input">
            <Info></Info>
          </Route>
          <Route exact path = "/:input/:color1/:color2">
            <Info></Info>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
