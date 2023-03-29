import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
function App() {
  return (
    <div className="App">
     <h1>Routing in React with react-router-dom!</h1>


     <BrowserRouter>
     <Link to={'/home'}>Home</Link>
     <br></br>
     <Link to={'/about'}>About</Link>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/word/:color' element={<Word/>}/>

       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
