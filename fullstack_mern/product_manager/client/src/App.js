import './App.css';
import ProductForm from './components/ProductForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <h1>Product Manager</h1>

        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
