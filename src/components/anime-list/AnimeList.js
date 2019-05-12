import React from 'react';
import './AnimeList.css';
import AnimeListItem from "./anime-list-item/AnimeListItem";
import {connect} from "react-redux";
import withService from "../hoc/withService";
import {fetchAnimes} from "../../actions/ActionsCreator";
import compose from "../../utils/compose";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import {Container, ListGroup} from "reactstrap";

const AnimeList = ({animes, baseUrl}) => {
    return (
        <Container>
            <ListGroup>
            {
                animes.map((anime) => {
                    return (
                        <div key={anime.id}>
                            <AnimeListItem
                                anime={anime}
                                baseUrl={baseUrl}
                            />
                        </div>
                    )
                })
            }
            </ListGroup>
        </Container>
    );
};

class AnimeListContainer extends React.Component {

    async componentDidMount() {
        this.props.fetchAnimes();
    }

    render() {
        const {animes, loading, error, service} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        const baseUrl = service.getBaseUrl();

        return <AnimeList
            animes={animes}
            baseUrl={baseUrl}
        />;
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