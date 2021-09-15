import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import DisplayPage from './components/DisplayPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to Luke APIwalker</h1>
        <br />
        <SearchForm></SearchForm>
        <br />
        <br />
        <Switch>
          <Route exact path = "/:category/:id">
            <DisplayPage></DisplayPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
