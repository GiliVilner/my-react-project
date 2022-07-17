
import './styles.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Song } from "../model";
import MySong from "./SingleSong";
import datagrid from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PropaneSharp } from '@mui/icons-material';


const HomePage=(props:{array:Song[],searchSong:Function,deleteSong:Function,setArray: React.Dispatch<React.SetStateAction<Song[]>>})=>{
  const  location=useLocation();
  const myLoction: any = location.state;
    const navigate = useNavigate();
    let songs=props.array;
    let setSongs=props.setArray;
    
let artist:string=" ";
const onAdd=(e:any) => {
    e.preventDefault();
    // inputRef.current?.blur();
  
    navigate(`/AddSong`) 
  }
  const searchArtist=(e:any,artist:string) => {
    e.preventDefault();
    // inputRef.current?.blur();
  props.searchSong(artist);
  }
 
  
    return(
<>
  
  <form  onSubmit={(e) =>
searchArtist(e,artist)
  }>
  <input placeholder="Enter artist name"
  onChange={(e)=>artist=e.target.value}/>
  <button type="submit">search</button>
  </form>
  <TableContainer>
  <Table sx={{minWidth:250}} aria-label="simple table" className='table-ss'>
<TableHead>
  <TableRow>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">title</TableCell>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">artist</TableCell>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">price</TableCell>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">genre</TableCell>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">length</TableCell>
    <TableCell sx={{color:'rgb(242,68,119)'}} align="center">delete/edit</TableCell>
  </TableRow>
</TableHead>{songs.map(song =><MySong song={song} deleteSong={props.deleteSong} songs={songs} setSongs={setSongs}/> )}

  </Table>
</TableContainer>

<button onClick={(e)=> onAdd(e)} >ADD</button>
</>
    )

}

export default HomePage;