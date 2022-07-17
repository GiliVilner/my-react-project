
import React, { useEffect, useRef, useState } from "react";
import { Song } from "../model";
import HomePage from './HomePage';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import {AutoDisabler,Validate,ValidationGroup}from 'mui-validate'
import { FormControl } from "@mui/material";
// interface props {
//   song: Song;
//   setSong: React.Dispatch<React.SetStateAction<string>>;
//   handleAdd: (e: React.FormEvent) => void;
// }

const AddSong= ( props:{array:Song[],setArray: React.Dispatch<React.SetStateAction<Song[]>>}) => {
const navigate = useNavigate();
const [song,setSong]=useState<Song>({
         
          title: "",
          artist: "",
          length: 0,
          price: 0,
          genere: "",
      });

      let songs=props.array;
      let setSongs=props.setArray;
  const inputRef = useRef<HTMLInputElement>(null);
  // const [title,setTitle]=useState<string>("");
  // const [artist,setArtist]=useState<string>("");
  //  const [genre,setGenre]=useState<string>(""); 
  //  const [length,setLength]=useState<number>(0);
  //  const [price,setPrice]=useState<number>(0);
   console.log(song?.artist);
  return (
      <>
      <h1>ADD SONG</h1>
      <ValidationGroup>
        <FormControl  sx={{m:5,minWidth:200}}>

        </FormControl>
      </ValidationGroup>
    <form
      className="input"
       onSubmit={async(e) => {alert(song.artist)
       
        
       await axios.post(`http://localhost:8080/songs`,song)
      .then(res => {

        
      })
      }}
    >
      
      <input
        type="text"
        placeholder="title"
        className="input__box"
        onChange={(e) => {setSong({...song,title:e.target.value})}}

        
      />
        <input
        type="text"
        placeholder="artistName"
        

        onChange={(e) => 
          {setSong({...song,artist:e.target.value})}}
        className="input__box"
      />
        <input
        type="text"
        placeholder="genre"
        onChange={(e) =>{setSong({...song,genere:e.target.value})}}
        className="input__box"
      />
        <input
        type="number"
        placeholder="length"
        className="input__box"
        onChange={(e) => {setSong({...song,length:e.target.valueAsNumber})}}
        />
        <input
        type="number"
        placeholder="price"
        className="input__box"
        onChange={(e) =>{setSong({...song,price:e.target.valueAsNumber})}}

      />
      <button type="submit" className="price">
        ADD
      </button>
    </form>
    <button onClick={()=> { navigate('/') }}>to home</button>
    </>
  );
  
};

export default AddSong;
// import React from "react";
// import HomePage from "./Home";

// const AddSong:React.FC=()=>{

//     return(
//         <h1>Add Song</h1>
//         <HomePage title={title}
//         artist={artist}
//         CompletedTodos={CompletedTodos}
//         setCompletedTodos={setCompletedTodos}/>
//     )
// }
// export default AddSong;
