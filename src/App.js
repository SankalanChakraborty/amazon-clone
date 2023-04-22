import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
   
  );
}

export default App;
