import React from 'react'

function Favourite(moviename,movies) {
    console.log(moviename);
  return (
    <div>
        <h1>favorite list</h1>
      
        <div>
          <p>{movies.Year}</p>
        </div>
        <div>
          <img
            src={
                
              movies.PosterPoster !== "N/A"
                ? movies.Poster
                : "http://via.placeholder.com/400"
            }
            alt={movies.Title}
          />
        </div>
        <div>
          <span>{movies.Type}</span>
          <h3>{movies.Title}</h3>
    
          
        </div>

          
       
      </div>
    

  )
}

export default Favourite