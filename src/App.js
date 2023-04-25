import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Result from './Components/Results/Result';
import { SearchContext } from './Components/Utils/context';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <BrowserRouter>
      <SearchContext.Provider value={{searchResults, setSearchResults}}>
        <Header/>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/results" element={<Result/>}/>
          </Routes>
        </div>
      </SearchContext.Provider>
    </BrowserRouter>
      
   
  );
}

export default App;
