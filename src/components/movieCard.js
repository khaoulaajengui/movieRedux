import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard =()=>{
   const films=useSelector(state=>state.MovieReducer.movies)

   return(
      <>
      {films.map((movie,i)=>(
         <Card key={i} style={{ width: '18rem',margin:'20px'}}>
         <Card.Img variant="top" src={movie.posterUrl} />
         <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text>
           {movie.description}
           </Card.Text>
           <Button variant="primary">Watch Movie </Button>
         </Card.Body>
       </Card>
      ))}
</>
   



   )

    
}
export default MovieCard;