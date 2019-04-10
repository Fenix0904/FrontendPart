import React from 'react';
import './AnimeList.css';
import AnimeListItem from "../anime-list-item/AnimeListItem";
import {connect} from "react-redux";
import withService from "../hoc/withService";
import {animesLoaded, dataRequested, fetchingError} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

class AnimeList extends React.Component {

    async componentDidMount() {
        const {service} = this.props;
        this.props.dataRequested();
        service.getAllAnimes()
            .then((data) => this.props.animesLoaded(data))
            .catch((error) => this.props.fetchingError(error));
    }

    render() {
        const {animes, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <div className="flex-column">
                {
                    animes.map((anime) => {
                        return (
                            <div key={anime.id} className="row">
                                <AnimeListItem anime={anime}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animes: state.animes,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        animesLoaded: (animes) => dispatch(animesLoaded(animes)),
        dataRequested: () => dispatch(dataRequested()),
        fetchingError: (error) => dispatch(fetchingError(error)),
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AnimeList);