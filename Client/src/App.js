import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Result from './Components/Results/Result';
import { ProductContext } from './Components/Utils/context';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const [searchResults, setSearchResults] = useState([]);
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{cartItems, setCartItems, searchResults, setSearchResults}}>
        <Header/>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/results" element={<Result/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </ProductContext.Provider>
    </BrowserRouter>
      
   
  );
}

export default App;
