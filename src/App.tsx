
import { useState } from 'react';
import './App.css';
import { Song } from './model';
import './Components/styles.css'
import HomePage from './Components/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddSong from './Components/AddSong';
import EditSong from './Components/EditSong';


function App() {
  
  // const [song,setSong]=useState<string>("");
  // const [songs, setSongs] = useState<Array<Song>>([]);
 

  
  

  return( 
  <div className="App">
      <span className="heading">The Songs Shop</span>
       
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/AddSong' element={<AddSong/>}></Route>
        <Route path='/EditSong/:id' element={<EditSong/>}></Route>
      </Routes>
  </div>
  );
    
   
  }
export default App;
