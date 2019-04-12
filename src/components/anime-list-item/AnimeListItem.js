import React from 'react';
import './AnimeListItem.css';
import {Link} from "react-router-dom";
import Text from 'react-dotdotdot'

const AnimeListItem = ({anime}) => {
    const {id, title, genres, description} = anime;
    return (

        <div className="card mx-auto mx-sm-3 my-1">
            <div className="card-body d-flex p-2 p-sm-3">
                <div className="row">
                    <div className="col-xl-9 col-md-8 col-7 d-sm-block">
                        <Link to={"/animes/" + id} className="h4 card-title">{title}</Link>
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
                        <Text className="card-text" clamp={7}>
                            {description}
                        </Text>
                    </div>
                    <div className="col-xl-3 col-md-4 col-5 poster">
                        <img className="img-fluid" src="https://source.unsplash.com/random/200x280" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AnimeListItem;