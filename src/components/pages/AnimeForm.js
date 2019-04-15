import React from "react";
import {Button, Col, Container, Dropdown, Form, ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import Genre from "../genre-ui/Genre";
import {addGenreToAnime, removeGenreToAnime} from "../../actions/ActionsCreator";

const AnimeForm = ({createNewAnime = true, genres, anime, addGenre, removeGenre}) => {

    const title = createNewAnime ? 'Create new anime' : 'Edit';
    return (
        <Container>
            <h2>{title}</h2>
            <Form>
                <Form.Group controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter title"/>
                </Form.Group>

                <Form.Group controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>

                <Form.Row className="align-items-center">
                    <Form.Group as={Col} sm={3} controlId="formGridGenres">
                        <Form.Label>Genres</Form.Label>
                        <select className="form-control" onChange={(e) => addGenre(e.target.value)}>
                            <option value="default">Choose genre</option>
                            {
                                genres.map(item => {
                                    return (
                                        <option key={item.id} value={item.genre}>{item.genre}</option>
                                    )
                                })
                            }
                        </select>
                    </Form.Group>
                    <Form.Group as={Col} sm={9}>
                        <div className="d-flex justify-content-start flex-wrap">
                            {
                                anime.genres.map((item, id) => {
                                    return (
                                        <Genre key={item.id} id={id} title={item.genre} onDelete={removeGenre}/>
                                    )
                                })
                            }
                        </div>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSeason">
                        <Form.Label>Season</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFile">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile"
                                   aria-describedby="inputGroupFile"
                                   onChange={() => {
                                   }}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Container>
    )
};


const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        anime: state.anime
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGenre: (genre) => dispatch(addGenreToAnime(genre)),
        removeGenre: (id) => dispatch(removeGenreToAnime(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeForm);