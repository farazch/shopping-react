import logo from './logo.svg';
import './App.css';

//import { BrowserRouter as Router,Switch } from 'react-router-dom';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';

import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      
      <Routes>
        
      
      <Route path="/" exact element={<ProductListing />} />
      <Route path="/product/:productId"  element={<ProductDetail/>} />
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
