import React from 'react';
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import compose from "../../utils/compose";
import withService from "../hoc/withService";
import connect from "react-redux/es/connect/connect";
import {deleteAnime, editAnime, fetchAnimeById} from "../../actions/ActionsCreator";

const AnimeDetailsPage = ({anime, baseUrl, editAnime, deleteAnime}) => {
    return (
        <div className="container py-2">
            <div className="row justify-content-end">
                <button className='btn btn-primary mr-2' onClick={() => editAnime(anime.id)}>
                    Edit
                </button>

                <button className='btn btn-danger' onClick={() => deleteAnime(anime.id)}>
                    Delete
                </button>
            </div>
            <div className="row">
                <h4 className="mx-auto text-primary">{anime.title}</h4>
            </div>
            <div className="row justify-content-between p-2">
                <div className="col-sm col-md-7 order-2 order-sm-1 pt-2 pt-sm-0">
                    <div className="d-flex">
                        <div className="d-flex">
                            <b className="mr-2">Season: </b>
                            <a href="#" className="mr-1 text-secondary">{anime.animeSeason ? anime.animeSeason.season : null}</a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex">
                            <b className="mr-2">Type: </b>
                            <a href="#" className="mr-1 text-secondary">{anime.type}</a>
                            <span className="text-secondary">({anime.episodesCount} ep.)</span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <b className="mr-2">Genres: </b>
                        {
                            anime.genres.map(item => {
                                return (
                                    <Link to="#" key={item.id} className="px-1 text-secondary">
                                        {item.genre}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <hr className="bg-light"/>
                    <div>
                        <span>{anime.description}</span>
                    </div>
                </div>
                <div className="col-sm col-md-5 order-1 order-sm-2">
                    <div className="text-center">
                        <img className="img-fluid" src={anime.poster ? baseUrl + "/img/" + anime.poster : "https://source.unsplash.com/random/200x280"} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

class AnimeDetailsPageContainer extends React.Component {

    async componentDidMount() {
        this.props.fetchAnimeById(this.props.match.params.id);
    }

    editAnime = (id) => {
        this.props.editAnime(id);
        this.props.history.push(`/update/${id}`);
    };

    deleteAnime = (id) => {
        if (window.confirm("Are u sure?")) {
            this.props.deleteAnime(id)
                .then((res) => {
                    if (res.status === 200)
                        this.props.history.push("/")
                });
        }
    };

    render() {
        const {anime, loading, error, service} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        const baseUrl = service.getBaseUrl();

        return <AnimeDetailsPage
            anime={anime}
            baseUrl={baseUrl}
            editAnime={this.editAnime}
            deleteAnime={this.deleteAnime}
        />;
    }
}

const mapStateToProps = (state) => {
    return {
        anime: state.animes[0],
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAnimeById: (id) => fetchAnimeById(ownProps.service, dispatch, id),
        deleteAnime: (id) => deleteAnime(id, ownProps.service, dispatch),
        editAnime: (id) => dispatch(editAnime(id))
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
)(AnimeDetailsPageContainer);