import { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; 
import { Song } from "../model";
import HomePage from "./HomePage";

const EditSong= (props:{array:Song[],setArray: React.Dispatch<React.SetStateAction<Song[]>>} ) => {
  const [s,setS]=useState<Song>({
    id: 0,
    title: "",
    artist: "",
    length: 0,
    price: 0,
    genere: "",
});
    const navigate=useNavigate();
    const params=useParams();
    const id=Number(params.id);
    let songs=props.array;
    let setSongs=props.setArray;
  let song=songs.find((s)=>s.id==id)
  let ind=songs.findIndex((s)=>s.id==id);
  //  alert(song?.artist);
  //  alert(id);
   
    // const temp=()=>{
    //     this.state.match.params.id
    // }
    const [tempArr,setTempArr ]=useState<Song[]>([]);
    // <HomePage tempArr={tempArr} setTempArr={setTempArr}/>
return(   
    <>   
<h1>edit</h1>
<form className="input"
onSubmit={(e) => {
  e.preventDefault();
  // inputRef.current?.blur();
  navigate('/') ;
  // setSongs([...songs[],s]);
  alert("The song was successfully edited");
  // navigate('/');
}}
>
 <input
   type="text"
   placeholder="title"
   defaultValue={song?.title}
   onChange={(e) => songs[ind].title=e.target.value}

   className="input__box"


   
 />
   <input
   type="text"
   placeholder="artistName"
    defaultValue={song?.artist}
    onChange={(e) => songs[ind].artist=e.target.value}
   className="input__box"
 />
   <input
   type="text"
   placeholder="genre"
   defaultValue={song?.genere}
   onChange={(e) => songs[ind].genere=e.target.value}
   className="input__box"
 />
   <input
   type="number"
   placeholder="length"
   defaultValue={song?.length}
   onChange={(e) => songs[ind].length=e.target.valueAsNumber}
   className="input__box"
   />
   <input
   type="number"
   placeholder="price"
   defaultValue={song?.price}
   onChange={(e) => songs[ind].price=e.target.valueAsNumber}
   className="input__box"
  

 />
 <button type="submit" className="price"> Edit</button>
</form>
<button onClick={()=> { navigate('/') }}>to home</button>
 

</>
    )
}
export default EditSong;


