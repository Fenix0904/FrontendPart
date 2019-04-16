import React from 'react';
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import compose from "../../utils/compose";
import withService from "../hoc/withService";
import connect from "react-redux/es/connect/connect";
import {fetchAnimeById} from "../../actions/ActionsCreator";

const AnimeDetailsPage = ({anime}) => {
    return (
        <div className="container py-2">
            <div className="row">
                <h4 className="mx-auto text-primary">{anime.title}</h4>
            </div>
            <div className="row justify-content-between p-2">
                <div className="col-sm col-md-7 order-2 order-sm-1 pt-2 pt-sm-0">
                    <div className="d-flex">
                        <div className="d-flex">
                            <b className="mr-2">Season: </b>
                            <a href="#" className="mr-1 text-secondary">{anime.season}</a>
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
                        <img className="img-fluid" src="https://source.unsplash.com/random/340x430" alt=""/>
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

    render() {
        const {anime, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <AnimeDetailsPage anime={anime}/>;
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
        fetchAnimeById: (id) => fetchAnimeById(ownProps.service, dispatch, id)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
)(AnimeDetailsPageContainer);