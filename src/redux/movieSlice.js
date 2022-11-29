import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const MovieSlice= createSlice({
    name:'movies',
    initialState: {
        movies:[
        {
        id : uuidv4() ,
        title : "The Dictator",
        description : "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
        posterUrl : "https://static01.nyt.com/images/2012/05/15/movies/dictator-span/dictator-span-superJumbo.jpg",
        rating : 6
      },
      {
        id : uuidv4(),
        title : "Agent Presque Secret",
        description : "Un ancien geek devenu agent d’élite à la CIA, revient chez lui à l’occasion de la réunion des anciens du lycée dont il était à l’époque le souffre-douleur. Se vantant d’être sur une affaire top secrète, il recrute alors pour le seconder le gars le plus populaire de sa promo d’alors, aujourd’hui comptable désabusé",
        posterUrl : "https://play-lh.googleusercontent.com/qn92kZ-yfOzhTZScGSqLUc5sQqaU38So5Yl4PSLY3ysXV0txfrQUBm4YQ0Zr9hMaEki8",
       
        rating : 4 
        
      }
    ]},
    reducers:{
        AddMovie: (state,{type,payload})=>{
            state.movies.push(payload) },
     

        },
    }
);

export default MovieSlice.reducer
export const {filter,AddMovie}=MovieSlice.actions