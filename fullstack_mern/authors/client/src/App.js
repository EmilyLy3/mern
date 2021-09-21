import './App.css';
import DisplayAuthors from './components/DisplayAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';
import NoAuthor from './components/NoAuthor';

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

          <Route exact path ="/author_not_found">
            <NoAuthor/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
