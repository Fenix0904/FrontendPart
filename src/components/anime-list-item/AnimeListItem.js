import React from 'react';
import './AnimeListItem.css';
import {Link} from "react-router-dom";

const AnimeListItem = ({anime}) => {
    const {title, genres, description} = anime;
    return (

        <div className="card mx-auto mx-sm-3 my-1">
            <div className="card-body d-flex p-2 p-sm-3">
                <div className="row justify-content-between">
                    <div className="col-md-8 col-7 d-sm-block">
                        <Link to="#" className="h4 card-title">{title}</Link>
                        <div className="card-subtitle text-muted d-flex">
                            {
                                genres.map(item => {
                                    return (
                                        <Link to="#" key={item.id} className="p-1 text-secondary">
                                            {item.genre}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="col-md-4 col-5 align-self-center">
                        <img className="img-fluid" src="https://source.unsplash.com/random/350x500" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimeListItem;