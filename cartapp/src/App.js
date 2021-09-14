
import './App.css';
import Header from './productComponants/header'
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import productListing from './productComponants/productListing'
import ProductDetails from './productComponants/productDetails'
import Cart_Items from './productComponants/cart_items'

function App() {
  return (
    <div className="App">
      
      <Router>   
        <Header />
         <Switch>
           <Route path='/' exact component={productListing} />
           <Route path='/products/:id' component={ProductDetails}/>
           
           <Route path='/home'  component={productListing}/>
           <Route path='/cart' component={Cart_Items}/>
           <Route>Not Found!</Route>
         </Switch>
      </Router>


    </div>
  );
}

export default App;
