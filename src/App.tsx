

// import { useEffect, useState } from 'react';
import './App.css';
// import { Song } from './model';
import './Components/styles.css'
// import HomePage from './Components/HomePage';
// import { Route, Routes } from 'react-router-dom';
// import AddSong from './Components/AddSong';
// import EditSong from './Components/EditSong';
// import SearchSong from './Components/SearchSong';
// import axios from 'axios';

import ParentComponent from "./Pages/ParentComponent";




function App() {
//   const [songs,setSongs ]=useState<Song[]>([]);
//   useEffect (()=>{
//  const f=async()=>{
//   await axios.get('http://localhost:8080/songs').then((res) => {
//     console.log(res.data)
//     setSongs(res.data);
//   })}
//   f()
//  },[])

//  const editSong = (id:string, newSongValue:Song) => {
//   const copySongs = [...songs]
//   const songIndex =  copySongs.findIndex(song => song.id === id);
//   copySongs[songIndex] = newSongValue;
//   setSongs(copySongs);
//  }

 
  return(
    <>
    <ParentComponent/>
    </>
  
//   <div className="App">
//       <span className="heading">The Songs Shop</span>
//       <Routes>
  
//         <Route path='/' element={<HomePage array={songs} setArray={setSongs} />}></Route>
//         <Route path='/AddSong' element={<AddSong array={songs} setArray={setSongs}/>}></Route>
//         <Route path='/EditSong/:id' element={<EditSong array={songs} editSong={setSongs}/>}></Route>
//         <Route path='/SearchSong/:artist' element={<SearchSong array={songs} setArray={setSongs}/>}></Route>
        
// </Routes>

//         </div>
  );
    
   
  }
export default App;
