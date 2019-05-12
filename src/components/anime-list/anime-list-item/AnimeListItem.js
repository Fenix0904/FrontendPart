import React from 'react';
import './AnimeListItem.css';
import {Link} from "react-router-dom";
import Text from 'react-dotdotdot'
import {Card, CardBody, CardSubtitle, CardTitle, Col, Row} from "reactstrap";

const AnimeListItem = ({anime, baseUrl}) => {
    const {id, title, genres, description, poster} = anime;
    console.log(anime);
    return (
        <Card className="mx-auto mx-sm-3 my-1">
            <CardBody className="d-flex p-2 p-sm-3">
                <Row>
                    <Col xl={9} md={8} xs={7} className="d-sm-block">
                        <CardTitle className="h4">
                            <Link to={"/animes/" + id}>{title}</Link>
                        </CardTitle>
                        <CardSubtitle className="text-muted d-flex">
                            {
                                genres.map(item => {
                                    return (
                                        <Link to="#" key={item.id} className="p-1 text-secondary">
                                            {item.genre}
                                        </Link>
                                    )
                                })
                            }
                        </CardSubtitle>
                        <Text className="card-text" clamp={7}>
                            {description}
                        </Text>
                    </Col>
                    <Col xl={3} md={4} xs={5} className="poster align-self-center">
                        <img className="img-fluid" src={poster ? baseUrl + "/img/" + poster : "https://source.unsplash.com/random/200x280"} alt=""/>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
};

export default AnimeListItem;