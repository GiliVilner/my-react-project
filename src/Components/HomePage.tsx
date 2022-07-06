import React, { useEffect, useState } from "react";
import './styles.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Song } from "../model";
import MySong from "./SingleSong";




const HomePage:React.FC=()=>{
  const  location=useLocation();
  const myLoction: any = location.state;
    const navigate = useNavigate();
    const [songs,setSongs ]=useState<Song[]>([{ id: 1, title: "mother", artist: "Abraham Fried", length: 5, price: 65, genere: "POP" },
    { id: 2, title: "father", artist: "Abraham Fried", length: 5, price: 65, genere: "POP"}]);
    

console.log(location.state)
useEffect(() => {
    if (myLoction) {
        alert("gggg");
        setSongs([...songs,myLoction.newSong]);
    }
    console.log(songs[3])


}, [location]);




//     const [song,setSong]= useState<Song>({
//         id: 0,
//         title: "",
//         artist: "",
//         length: 0,
//         price: 0,
//         genere: "",
        
//     });      
// const handleAdd=(e:React.FormEvent)=>{
//     e.preventDefault();
//     if(song)
//         setSongs([...songs,{id:song.id,artist:song.artist,title:song.title,genere:song.genere,
//             price:song.price,length:song.length}]);
//         // setTodos([...todos,{id:Date.now(),todo:todo,isTodo:false}])
//         // setTodo("");
    
//     }; 
    return(
<div>
<div className='songs'>
    <span>Tytle</span><span>Artist</span><span>Price</span>
</div>  
<div >
      {songs.map(song =><MySong song={song} songs={songs} setSongs={setSongs}/> )}
</div>
<button onClick={()=> { navigate('/AddSong') }} >ADD</button>
</div>
    )

}
export default HomePage;