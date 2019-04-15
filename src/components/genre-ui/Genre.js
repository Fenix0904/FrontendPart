import React from "react";
import './Genre.css';
const Genre = (props) => {
    return (
        <div className="mx-1 animeGenre">
            <span>{props.title}</span>
            <i className="fas fa-times text-danger ml-1" onClick={() => props.onDelete(props.id)}/>
        </div>
    )
};


export default Genre;