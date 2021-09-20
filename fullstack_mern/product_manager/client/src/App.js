import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';

import {
  BrowserRouter,
  Switch,
  Route
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
          <Route exact path="/products/edit/:id">
            <EditProduct></EditProduct>
          </Route>
          <Route exact path="/products/delete/:id">
            <DeleteProduct></DeleteProduct>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
