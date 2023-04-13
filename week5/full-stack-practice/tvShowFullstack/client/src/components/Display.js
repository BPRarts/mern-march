
import axios from 'axios';
import {useEffect,useState} from 'react'

const Display = (props) => {
    const {tvShowList, setTvShowList} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allShows')
        .then((response) => {
          console.log(response);
          setTvShowList(response.data.shows)
        })
        .catch((err) => {
          console.log(err);
        })
    },[])



    
    return (
        <div>
        <h2>All Of Our Shows</h2>
        {
           tvShowList.map((show) => (
            <div key={show._id}>
                <h2>Title: {show.title}</h2>
                <h2>Network: {show.network}</h2>
                <h2>Genre: {show.genre}</h2>
               
            </div>
        ))
    }


      
           
        </div>
    );
}

export default Display;
