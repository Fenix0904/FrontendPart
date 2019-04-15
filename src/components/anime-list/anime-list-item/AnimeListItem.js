import React from 'react';
import './AnimeListItem.css';
import {Link} from "react-router-dom";
import Text from 'react-dotdotdot'
import {Card, Col, Row} from "react-bootstrap";

const AnimeListItem = ({anime}) => {
    const {id, title, genres, description} = anime;
    return (
        <Card className="mx-auto mx-sm-3 my-1">
            <Card.Body className="d-flex p-2 p-sm-3">
                <Row>
                    <Col xl={9} md={8} xs={7} className="d-sm-block">
                        <Card.Title className="h4">
                            <Link to={"/animes/" + id}>{title}</Link>
                        </Card.Title>
                        <Card.Subtitle className="text-muted d-flex">
                            {
                                genres.map(item => {
                                    return (
                                        <Link to="#" key={item.id} className="p-1 text-secondary">
                                            {item.genre}
                                        </Link>
                                    )
                                })
                            }
                        </Card.Subtitle>
                        <Text className="card-text" clamp={7}>
                            {description}
                        </Text>
                    </Col>
                    <Col xl={3} md={4} xs={5} className="poster align-self-center">
                        <img className="img-fluid" src="https://source.unsplash.com/random/200x280" alt=""/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
};

export default AnimeListItem;