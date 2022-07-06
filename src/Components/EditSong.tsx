import { useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; 
import { Song } from "../model";
import HomePage from "./HomePage";

const EditSong: React.FC = ( ) => {
    const navigate=useNavigate();
    const params=useParams();
    const id=params.id;
    alert(id);
    // const temp=()=>{
    //     this.state.match.params.id
    // }
    const [tempArr,setTempArr ]=useState<Song[]>([]);
    // <HomePage tempArr={tempArr} setTempArr={setTempArr}/>
return(   
    <>   
<h1>edit</h1>
<form className="input"

>
 <input
   type="text"
   placeholder="title"
   className="input__box"


   
 />
   <input
   type="text"
   placeholder="artistName"
    // defaultValue={}
   className="input__box"
 />
   <input
   type="text"
   placeholder="genre"
  
   className="input__box"
 />
   <input
   type="number"
   placeholder="length"
   className="input__box"
   />
   <input
   type="number"
   placeholder="price"
   className="input__box"
  

 />
 <button type="submit" className="price"> Edit</button>
</form>
 

</>
    )
}
export default EditSong;


