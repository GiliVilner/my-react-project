import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Song } from "../model";
import EditSong from "./EditSong";
import DeleteIcon from '@mui/icons-material/Delete';
import { TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";

interface Props{
    song:Song;
    songs:Song[];
    deleteSong:Function;
    setSongs:React.Dispatch<React.SetStateAction<Song[]>>;
}

const MySong=({song,songs,deleteSong,setSongs}:Props)=>
{const [songDetails]=useState<any[]>([ song.title, song.artist,  song.price+"$", song.genere, song.length])
    // const deleteSong=async(e:any)=>{
    //    alert("השיר ימחק ולא יהיה ניתן לשחזרו");
    //     // e.prevendefoult(); 
    // await axios.delete(`http://localhost:8080/songs/deletesongbyid/${song.id}`)
    // .then(res => {
    
    // })
    //     }
    const navigate=useNavigate();
    return(
        <TableBody>
            {
                <TableRow key={song.title} sx={{'&:last-child th':{border:0}}} className="TableRow">
                  {songDetails.map((i:any[],index)=>{
                    return(
                        <TableCell align="center" key={index}>{i}</TableCell>
                    )
                  })}
                  
 
            <DeleteIcon onClick={(e)=>deleteSong(e,song)} />
 
        <button onClick={()=> { navigate(`/EditSong/${song.id}`); alert(song.id)}}>
          edit
        </button> 
                </TableRow>
            }
        </TableBody>
    )       
   
}
 
export default MySong;
