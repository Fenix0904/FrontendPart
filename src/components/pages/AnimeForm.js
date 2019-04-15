import React from "react";
import {Button, Col, Container, Form, ListGroup} from "react-bootstrap";

const AnimeForm = () => {
    const fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
    };
    return (
        <Container>
            <h2>Title</h2>
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
                            <span className="mx-1 d-flex">ssafsa</span>
                            <span className="mx-1 d-flex">ssafsa</span>
                            <span className="mx-1 d-flex">ssafsa</span>
                            <span className="mx-1 d-flex">ssafsa</span>
                            <span className="mx-1 d-flex">ssafsa</span>
                            <span className="mx-1 d-flex">ssafsa</span>
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
                                   onChange={fileChangedHandler}/>
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

export default AnimeForm;