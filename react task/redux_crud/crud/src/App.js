import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import Upadte from './Upadte';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/upadate' element={<Upadte/>}></Route>
    </Routes>
    </BrowserRouter>

   
  );
}

export default App;
