import './App.css';
import DisplayAuthors from './components/DisplayAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App container mt-3">
      <BrowserRouter>
        <h1>Favorite Authors</h1>

        <Switch>
          <Route exact path ="/">
            <DisplayAuthors/>
          </Route>

          <Route exact path ="/add_author">
            <CreateAuthor/>
          </Route>

          <Route exact path ="/authors/edit/:id">
            <EditAuthor/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
