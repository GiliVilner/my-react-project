import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Song } from "../model";
import AddSong from "./AddSong";
import EditSong from "./EditSong";
import HomePage from "../Pages/HomePage";


function ParentComponent() {
  const navigate=useNavigate()
    const [songs,setSongs ]=useState<Song[]>([]);
    useEffect (()=>{
   const f=async()=>{
    await axios.get('http://localhost:8080/songs').then((res) => {
      console.log(res.data)
      setSongs(res.data);
    }).catch((error) => { console.log(error) })
  }
    f()
   },[])
  
    const editSong = async(id:string, newSongValue:Song) => { 
    console.log(newSongValue);
    let copySongs = [...songs];
    // debugger
    const objIndex = copySongs.findIndex((e: Song) => e.id == id);
    // const songIndex=  copySongs.indexOf(newSongValue);
    debugger
    copySongs[objIndex] = newSongValue;
    setSongs(copySongs);
    console.log(copySongs)
   await axios.put(`http://localhost:8080/songs/UpdateSong`,newSongValue)
  .then(res => {
    alert(newSongValue?.id);
    console.log(songs);
  }).catch((error) => { console.log(error) })
}
   
  const deleteSong=async(e:any,song:Song)=>{
    alert("השיר ימחק ולא יהיה ניתן לשחזרו");
     // e.prevendefoult(); 
     debugger
 await axios.delete(`http://localhost:8080/songs/deletesongbyid/${song.id}`)
 .then(res => {
  setSongs(songs.filter((s)=>s.id!=song.id));
 }).catch((error) => { console.log(error) })
     }

  
  
     const searchSong=async(artistName:string)=>{
      alert(artistName);
      debugger
      await axios.get(`http://localhost:8080/songs/getallsongsofaspecificartist/${artistName}`).then(res=>{ 
        alert(res.data.length);
        console.log(res.data);    
        setSongs(res.data);
        console.log(songs);
        alert(songs.length);
      })
    }
      // if(artistName===""){ alert(artistName);
      //   // await axios.get('http://localhost:8080/songs').then(res => {
      //   //   console.log(res.data)
      //   //   setSongs(res.data);
      //   //   })
      // }
      // else{
      //   alert(artistName);
      //   // console.log(songs);
      //   // setSongs(songs.filter((s)=>s.artist===artistName));
    
      // }}
    return(
    
    <div className="App">
        <span className="heading">The Songs Shop</span>
        <Routes>
    
          <Route path='/' element={<HomePage array={songs} searchSong={searchSong} deleteSong={deleteSong} setArray={setSongs} />}></Route>
          <Route path='/AddSong' element={<AddSong array={songs} setArray={setSongs}/>}></Route>
          <Route path='/EditSong/:id' element={<EditSong array={songs} editSong={editSong}/>}></Route>
          
  </Routes>
  
          </div>
    );
      
     
    }
  export default ParentComponent;
  