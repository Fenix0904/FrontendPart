import React from 'react';
import './AnimeList.css';
import AnimeListItem from "../anime-list-item/AnimeListItem";
import {connect} from "react-redux";
import withService from "../hoc/withService";
import {fetchAnimes} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const AnimeList = ({animes}) => {
    return (
        <div className="container">
            <div className="list-group">
            {
                animes.map((anime) => {
                    return (
                        <div key={anime.id}>
                            <AnimeListItem anime={anime}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

class AnimeListContainer extends React.Component {

    async componentDidMount() {
        this.props.fetchAnimes();
    }

    render() {
        const {animes, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <AnimeList animes={animes}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        animes: state.animes,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAnimes: fetchAnimes(ownProps.service, dispatch)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AnimeListContainer);