import React from "react";
import Genre from "../../genre-ui/Genre";
import {Button, Col, Container, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import {AvFeedback, AvField, AvForm, AvGroup, AvInput} from "availity-reactstrap-validation";

const AnimeForm = (props) => {

    const {createNewAnime = true, genres, seasons, types, poster} = props;
    const {anime} = props;
    const {
        onSubmitHandler,
        onAnimePropertyChange,
        addGenre,
        addSeason,
        removeGenre,
        onPosterUploading
    } = props;
    const title = createNewAnime ? 'Add new anime' : 'Edit';
    const noGenreLabel = anime.genres.length === 0 ? "You haven't added a genre yet." : "";
    return (
        <Container>
            <h2>{title}</h2>
            <AvForm onValidSubmit={e => onSubmitHandler(e)}>
                <AvGroup>
                    <Label for="title">Title</Label>
                    <AvField name="title" type="text" placeholder="Enter title"
                             onChange={e => onAnimePropertyChange(e, "title")}
                             id="title"
                             value={anime.title}
                             validate={{
                                 required: {value: true, errorMessage: 'Please enter a title'}
                             }}/>
                </AvGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea"
                           onChange={e => onAnimePropertyChange(e, "description")}
                           id="description"
                           value={anime.description}
                    />
                </FormGroup>

                <Row className="align-items-center">
                    <Col sm={3}>
                        <FormGroup>
                            <Label for="genres">Genres</Label>
                            <Input type="select" onChange={e => addGenre(e.target.value)} id="genres">
                                <option value="default">Choose...</option>
                                {
                                    genres.map(item => {
                                        return (
                                            <option key={item.id} value={item.genre}>{item.genre}</option>
                                        )
                                    })
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={9}>
                        <FormGroup>
                            <div className="d-flex justify-content-start flex-wrap">
                                {noGenreLabel}
                                {
                                    anime.genres.map((item, id) => {
                                        return (
                                            <Genre key={item.id} id={id} title={item.genre}
                                                   onDelete={removeGenre}/>
                                        )
                                    })
                                }
                            </div>
                        </FormGroup>
                    </Col>
                </Row>

                <Row className="d-block d-sm-flex">
                    <Col>
                        <FormGroup>
                            <Label for="seasons">Season</Label>
                            <Input type="select" className="form-control"
                                   onChange={e => addSeason(e.target.value)}
                                   id="seasons">
                                <option value="default">Choose...</option>
                                {
                                    seasons.map(item => {
                                        let isSelected = false;
                                        if (item.id === anime.animeSeason.id) {
                                            isSelected = true;
                                        }
                                        return (
                                            <option key={item.id}
                                                    value={item.season + ' ' + item.year}
                                                    selected={isSelected}
                                            >
                                                {item.season + ' ' + item.year}
                                            </option>
                                        )
                                    })
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <AvGroup>
                            <Label for="types">Type & Episodes</Label>
                            <InputGroup className="d-flex">
                                <div className="input-group-prepend">
                                    <select className="input-group-text"
                                            onChange={(e) => onAnimePropertyChange(e, "type")}
                                            id="types">
                                        <option value="NONE">Choose...</option>
                                        {
                                            types.slice(0, types.length - 1).map((item, index) => {
                                                let isSelected = false;
                                                if (item === anime.type) {
                                                    isSelected = true;
                                                }
                                                return (
                                                    <option key={index} value={item} selected={isSelected}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <AvInput name="episodesCount" type="text" placeholder="Episodes"
                                         onChange={e => onAnimePropertyChange(e, "episodesCount")}
                                         id="title"
                                         value={anime.episodesCount}
                                         validate={{
                                             pattern: {
                                                 value: '/^[0-9]+$/',
                                                 errorMessage: 'Episodes count cannot be less than 0'
                                             }
                                         }}/>
                                <AvFeedback>Episodes should be number (greater than 0)</AvFeedback>
                            </InputGroup>
                        </AvGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFile">Poster</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile"
                                   aria-describedby="inputGroupFile"
                                   onChange={e => onPosterUploading(e)}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile">
                                {poster ? poster.name : "Choose file"}
                            </label>
                        </div>
                    </div>
                </FormGroup>
                <Row>
                    <Col className="align-content-end">
                        <Button color="primary" type="submit" className="align-self-end">
                            {createNewAnime ? "Add" : "Update"}
                        </Button>
                    </Col>
                </Row>
            </AvForm>
        </Container>
    );
};

export default AnimeForm;