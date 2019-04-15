import React from "react";
import {Button, Col, Container, Form, ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import Genre from "../genre-ui/Genre";

const AnimeForm = ({createNewAnime = true}, props ) => {

    const onGenreDelete = (id) => {
          console.log(id);
    };

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
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm={9}>
                        <div className="d-flex justify-content-start flex-wrap">
                            <Genre id={1} title="dsfdsfdsfdsf" onDelete={onGenreDelete}/>
                            <Genre id={2} title="fds" onDelete={onGenreDelete}/>
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
                                   onChange={() => {}}/>
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

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeForm);