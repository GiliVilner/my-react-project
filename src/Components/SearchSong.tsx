import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Song } from "../model";
import MySong from "./SingleSong";
import './styles.css';
const SerachSong=(props:{array:Song[],setArray: React.Dispatch<React.SetStateAction<Song[]>>})=>{
   const navigate=useNavigate();
    const params=useParams();
    const art=params.artist;
    alert(art);
    let songs=props.array;
    let setSongs=props.setArray;  
    let sarray:Song[]=[];
    sarray=songs.filter((s)=>s.artist==art);
    return(
        <>
<div className='songs'>
    <span >Tytle</span><span>Artist</span><span>Price</span>
</div>  
<div >
      {sarray.map(song =><MySong song={song} songs={sarray} setSongs={setSongs}/> )}
</div>
<button onClick={()=>navigate('/')}>to home</button>
</>
    )
}
export default SerachSong;