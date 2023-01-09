import { useState } from "react";
import Favourite from "./Favourite";

const MovieCard = ({movie}) => {
  const fav = movie
    const [id,setId] = useState(false)
    
        return(
        <div className="movie"  >
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
                
              movie.PosterPoster !== "N/A"
                ? movie.Poster
                : "http://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
          
          <button className="favorite" onClick={()=>{
        

          }}  >add to Favourite</button>
          
          
        </div>
        <div>
         
        </div>
      </div>
    )
}
export default MovieCard;
