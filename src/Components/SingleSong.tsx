import { useNavigate } from "react-router-dom";
import { Song } from "../model";
import EditSong from "./EditSong";

interface Props{
    song:Song;
    songs:Song[];
    setSongs:React.Dispatch<React.SetStateAction<Song[]>>;
}
const MySong=({song,songs,setSongs}:Props)=>
{
    const navigate=useNavigate();
    
    

   
    return(
        
        <div className="lSongs" >
            {song.artist} {song.title} {song.price+"$"}
        <button>Delete</button>
        <button onClick={()=> { navigate(`/EditSong/${song.id}`) }}>
            
        </button>
        
        </div>
    )       
    
}

export default MySong;
