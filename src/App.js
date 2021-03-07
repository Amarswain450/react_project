import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductContext from './Global/ProductContext';
import CartContext from './Global/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
    <ProductContext>
    <CartContext>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </CartContext>
    </ProductContext>
    </div>
  );
}

export default App;
