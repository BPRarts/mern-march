import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react'
import Display from './components/Display';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import CreateShow from './components/CreateShow';


function App() {
  const [tvShowList, setTvShowList] = useState([]);

 

  return (
    <div className="App">
      <BrowserRouter>
      <h1>Welcome to our tv show!</h1>
      <Link to={'/createShow/form'}>Add your favorite show</Link>
      <br/>
      <Link to={'/'}>Home</Link>
      <Routes>
        <Route path = '/'element={<Display tvShowList={tvShowList} setTvShowList ={setTvShowList}/>}/>
        <Route path = '/createShow/form' element = {<CreateShow/>}/>
        
      </Routes>
      

      

      </BrowserRouter>     


    </div>
    
  );
}

export default App;
