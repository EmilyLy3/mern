import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

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
        <h1 className="mt-3 mb-3">Product Manager</h1>

        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/products/:id">
            <OneProduct></OneProduct>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
