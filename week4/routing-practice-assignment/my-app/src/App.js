import './App.css';
import Home from './Components/Home';
import Number from './Components/Number';
import Hello from './Components/Hello';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Routes>

      <Route path='/home' element={<Home/>}/>
      <Route path='/number/:id' element={<Number/>}/>
      <Route path='/hello' element={<Hello/>}/>

      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
