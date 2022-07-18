import { Rocket } from "@mui/icons-material";
import { Interface } from "readline";

export interface Song
{
    id?: String;
    title: string;
    artist: string;
    price:number;
    length:number;
    genere:Genre;

  }
 export enum  Genre {"POP" , "ROCK", "CLASSIC" , "RAP"}

 