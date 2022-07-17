import { Alert } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; 
import { Song } from "../model";
import HomePage from "./HomePage";

const EditSong= (props:{array:Song[],editSong:Function} ) => {
  let songs=props.array;
  const params=useParams();
  const id=params.id;
  const [s,setS]=useState<Song>(
    songs.find((s)=>s.id===id) as Song
);

    const navigate=useNavigate();
 
    
    const editSong=props.editSong;
  // let ind=songs.findIndex((s)=>Number(s.id)==id);

    
  //  alert(song?.artist);
  //  alert(id);
   
    // const temp=()=>{
    //     this.state.match.params.id
    // }

    // <HomePage tempArr={tempArr} setTempArr={setTempArr}/>
    
return(   
    <>   
<h1>edit</h1>

<form className="input"
onSubmit={(e) => {
  e.preventDefault();
  debugger
   editSong(id,s);
}}
>
 <input
   type="text"
   placeholder="title"
   defaultValue={s.title}
   onChange={(e) => setS({...s,title:e.target.value})}

   className="input__box"


   
 />
   <input
   type="text"
   placeholder="artistName"
    defaultValue={s.artist}
    onChange={(e) =>setS({...s,artist:e.target.value})}
   className="input__box"
 />
   <input
   type="text"
   placeholder="genre"
   defaultValue={s.genere}
   onChange={(e) => setS({...s,genere:e.target.value})}
   className="input__box"
 />
   <input
   type="number"
   placeholder="length"
   defaultValue={s.length}
   onChange={(e) =>setS({...s,length:e.target.valueAsNumber})}
   className="input__box"
   />
   <input
   type="number"
   placeholder="price"
   defaultValue={s.price}
   onChange={(e) => setS({...s,price:e.target.valueAsNumber})}
   className="input__box"
  

 />
 <button type="submit" className="price"> Edit</button>
</form>
<button onClick={()=> { navigate('/') }}>to home</button>

</>
    )
}
export default EditSong;


