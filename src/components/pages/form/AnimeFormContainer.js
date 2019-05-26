import React from "react";
import AnimeForm from './AnimeForm';
import ErrorIndicator from "../../error-indicator/ErrorIndicator";
import {
    createNewAnime,
    fetchAnimeTypeList,
    fetchGenreList,
    fetchSeasonList,
    updateAnime
} from "../../../actions/ActionsCreator";
import compose from "../../../utils/compose";
import withService from "../../hoc/withService";
import connect from "react-redux/es/connect/connect";
import Spinner from "../../spinner/Spinner";

class AnimeFormContainer extends React.Component {

    initialAnimeState = {
        title: '',
        description: '',
        genres: [],
        animeSeason: {},
        type: 'NONE',
        episodesCount: 0
    };

    state = {
        anime: {
            ...this.initialAnimeState
        },
        poster: null
    };
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
        const formData = new FormData();
        formData.append('anime', JSON.stringify(this.state.anime));
        formData.append('poster', this.state.poster);

        if (this.props.isEditingAnime) {
            this.props.updateAnime(formData).then((res) => {
                if (res.status === 200) {
                    this.props.history.push(`/animes/${this.props.match.params.id}`);
                }
            })
        } else {
            this.props.addNewAnime(formData).then((res) => {
                if (res.status === 200) {
                    this.props.history.push("/");
                }
            })
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
    addSeason = (value) => {
        const globalSeasons = this.props.seasons;
        if (value === 'default') {
            return;
        }
        const season = value.slice(0, value.length - 5).toUpperCase();

        const animeSeason = {
            id: globalSeasons.find(el => el.season.toLowerCase() === season.toLowerCase()).id,
            season: season,
            year: value.slice(value.length - 4)
        };
        this.setState({
            anime: {
                ...this.state.anime,
                animeSeason: animeSeason
            }
        });
    };

    async componentDidMount() {
        if (this.props.isEditingAnime) {
            this.setState({
                ...this.state,
                anime: this.props.animes[0]
            });
        } else {
            this.setState({
                ...this.state,
                anime: {
                    ...this.initialAnimeState
                }
            });
        }
        this.props.loadGenreList();
        this.props.loadSeasonList();
        this.props.loadAnimeTypesList();
    }

    render() {
        const {loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }

        return <AnimeForm
            anime={this.state.anime}
            types={this.props.types}
            genres={this.props.genres}
            seasons={this.props.seasons}
            poster={this.state.poster}
            createNewAnime={!this.props.isEditingAnime}
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
        error: state.error,
        isEditingAnime: state.isEditingAnime,
        animes: state.animes
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadGenreList: () => fetchGenreList(ownProps.service, dispatch),
        loadSeasonList: () => fetchSeasonList(ownProps.service, dispatch),
        loadAnimeTypesList: () => fetchAnimeTypeList(ownProps.service, dispatch),
        addNewAnime: (anime) => createNewAnime(ownProps.service, dispatch, anime),
        updateAnime: (anime) => updateAnime(ownProps.service, dispatch, anime)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps),
)(AnimeFormContainer)
