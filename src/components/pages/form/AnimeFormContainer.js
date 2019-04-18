import React from "react";
import AnimeForm from './AnimeForm';
import ErrorIndicator from "../../error-indicator/ErrorIndicator";
import {
    addNewAnime,
    fetchAnimeTypeList,
    fetchGenreList,
    fetchSeasonList,
    uploadPoster
} from "../../../actions/ActionsCreator";
import compose from "../../../utils/compose";
import withService from "../../hoc/withService";
import connect from "react-redux/es/connect/connect";
import BackDrop from "../../spinner/back-drop/BackDrop";

class AnimeFormContainer extends React.Component {

    state = {
        anime: {
            title: '',
            description: '',
            genres: [],
            season: {},
            type: 'NONE',
            episodesCount: 0
        },
        poster: null
    };

    async componentDidMount() {
        this.props.loadGenreList();
        this.props.loadSeasonList();
        this.props.loadAnimeTypesList();
    }

    onAnimePropertyChange = (e, prop) => {
        this.setState({
            anime: {
                ...this.state.anime,
                [prop]: e.target.value
            }
        })
    };

    onPosterUploading = (e) => {
        const file = e.target.files[0];
        this.setState({
            ...this.state,
            poster: file
        })
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addNewAnime(this.state.anime)
            .then(res => {
                    console.log(res.id);
                    const formData = new FormData();
                    formData.append('poster', this.state.poster);
                    formData.append('animeId', res.id);
                    this.props.uploadPoster(formData);
                }
            );
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

    addSeason = (value) => {
        const globalSeasons = this.props.seasons;
        if (value === 'default') {
            return;
        }
        const season = {
            id: globalSeasons.find(el => el.season.toLowerCase() === value.toLowerCase()).id,
            season: value
        };
        this.setState({
            anime: {
                ...this.state.anime,
                season: season
            }
        });
    };

    render() {
        const {loading, error} = this.props;
        // if (loading) {
        //     return <BackDrop/>;
        // }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <AnimeForm
            anime={this.state.anime}
            types={this.props.types}
            genres={this.props.genres}
            seasons={this.props.seasons}
            addGenre={this.addGenre}
            addSeason={this.addSeason}
            removeGenre={this.removeGenre}
            onSubmitHandler={this.onSubmitHandler}
            onPosterUploading={this.onPosterUploading}
            onAnimePropertyChange={this.onAnimePropertyChange}
        />;
    }
}


const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        seasons: state.seasons,
        types: state.types,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadGenreList: () => fetchGenreList(ownProps.service, dispatch),
        loadSeasonList: () => fetchSeasonList(ownProps.service, dispatch),
        loadAnimeTypesList: () => fetchAnimeTypeList(ownProps.service, dispatch),
        addNewAnime: (anime) => {
            dispatch(addNewAnime());
            return ownProps.service.addNewAnime(anime);
        },
        uploadPoster: (formData) => {
            dispatch(uploadPoster());
            return ownProps.service.uploadPoster(formData);
        }
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
)(AnimeFormContainer)
