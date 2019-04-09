import React from 'react';
import './AnimeList.css';
import AnimeListItem from "../anime-list-item/AnimeListItem";
import {connect} from "react-redux";
import withService from "../hoc/withService";
import {animesLoaded} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../spinner/Spinner";

class AnimeList extends React.Component {

    async componentDidMount() {
        const {service} = this.props;
        service.getAllAnimes()
            .then((data) => {
                this.props.animesLoaded(data);
            });
    }

    render() {
        const {animes, loading} = this.props;
        if (loading) {
            return <Spinner/>;
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
        loading: state.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        animesLoaded: (animes) => dispatch(animesLoaded(animes))
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(AnimeList);