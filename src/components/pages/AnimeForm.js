import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import Genre from "../genre-ui/Genre";

class AnimeForm extends React.Component {

    state = {
        anime: {
            title: "",
            description: "",
            genres: []
        }
    };

    removeGenre = (id) => {
        this.setState({
            anime: {
                ...this.state.anime,
                genres: [
                    ...this.state.anime.genres.slice(0, id),
                    ...this.state.anime.genres.slice(id + 1),
                ]
            }
        });
    };

    addGenre = (genreTitle) => {
        const globalGenres = this.props.genres;
        const localGenres = this.state.anime.genres;

        if (genreTitle === 'default') {
            return;
        }

        const genre = {
            id: globalGenres.find(el => el.genre.toLowerCase() === genreTitle.toLowerCase()).id,
            genre: genreTitle
        };

        if (localGenres.findIndex(el => el.id === genre.id) >= 0) {
            return;
        }

        this.setState({
            anime: {
                ...this.state.anime,
                genres: [
                    ...this.state.anime.genres,
                    genre
                ]
            }
        });
    };

    render() {
        const {createNewAnime = true, genres} = this.props;
        const {anime} = this.state;
        const title = createNewAnime ? 'Add new anime' : 'Edit';
        let noGenreLabel;
        if (anime.genres.length === 0) {
            noGenreLabel = "You haven't added a genre yet.";
        }
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
                            <select className="form-control" onChange={(e) => this.addGenre(e.target.value)}>
                                <option value="default">Choose...</option>
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
                                {noGenreLabel}
                                {
                                    anime.genres.map((item, id) => {
                                        return (
                                            <Genre key={item.id} id={id} title={item.genre} onDelete={this.removeGenre}/>
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
                                <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                            </div>
                        </div>
                    </Form.Group>
                    <Row>
                        <Col className="align-content-end">
                            <Button variant="primary" type="submit" className="align-self-end">
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
};

export default connect(mapStateToProps)(AnimeForm);