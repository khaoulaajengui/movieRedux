import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MovieCard from './components/movieCard';
import Addmovie from './components/Addmovie';
import { useSelector } from "react-redux";

const App=()=> {
  const [search,setSearch]=useState('')
  const change=(e)=>{
    setSearch(e.target.value)
  }
  const films=useSelector(state=>state.MovieReducer.movies)
  const filter=()=>{
    films.filter(movie =>films.title.toLocaleLowerCase().includes(search.trim().toLowerCase()))
  } 
  return (
    <> 
<nav style={{display:'flex', justifyContent:'space-between',alignItems:'center'}} >
  <h2  >Movies</h2>
  <input style={{height:'30px',borderRadius:'10px'}} placeholder='search' onChange={change } />
  <button onClick={filter} >search</button>
 
</nav>
<Addmovie/>
    <div style={{background:'black',display:'flex' }}  className="App">
      
      <MovieCard/>
     
    </div>
    </>
  );
}

export default App;
