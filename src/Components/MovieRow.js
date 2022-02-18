import "./MovieRow.css";
import React from "react";

export default ({title,items})=>{

    return(
        <div className="container p-3 mb-2 bg-primary text-white">            
        <h2> {title}</h2>   
        <div className="movieRow--listarea">
            {items.results.length >0 && items.results.map((item, key)=>(
                <img alt={item.original_title} src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            ))}
        </div>       
        </div>
    )
}