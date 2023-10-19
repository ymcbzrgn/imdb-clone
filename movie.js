const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const movieTitle = document.getElementById("movie-title");
const movieRating = document.getElementById("movie-rating");
const moviePoster = document.getElementById("movie-poster");
const movieOverview = document.getElementById("movie-overview");
const movieReleaseDate = document.getElementById("movie-release-date");
const movieGenres = document.getElementById("movie-genres");
const movieOriginalLanguage = document.getElementById("movie-original-language");
const movieVoteCount = document.getElementById("movie-vote-count");
const movieBackdropPath = document.getElementById("movie-backdrop-path");
const moviePopularity = document.getElementById("movie-popularity");
const movieAdult = document.getElementById("movie-adult");
const movieVideo = document.getElementById("movie-video");

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

if (movieId) {
    const MOVIE_DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=54be3515f5bdef4483d47cedf1f24e5d`;

    fetch(MOVIE_DETAILS_API)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            movieTitle.textContent = data.title;
            movieRating.textContent = `Rating: ${data.vote_average}/10`;
            moviePoster.src = IMG_PATH + data.poster_path;
            movieOverview.textContent = data.overview;
            const releaseDate = new Date(data.release_date);
            movieReleaseDate.textContent = `Release Date: ${releaseDate.toLocaleDateString()}`;
            movieGenres.textContent = `Genres: ${data.genres.map(genre => genre.name).join(", ")}`;
            movieOriginalLanguage.textContent = `Original Language: ${data.original_language}`;
            movieVoteCount.textContent = `Vote Count: ${data.vote_count}`;
            const movieBackdropImage = document.createElement('img');
            movieBackdropImage.src = IMG_PATH + data.backdrop_path;
            movieBackdropPath.textContent = "Backdrop Path:";
            movieBackdropPath.appendChild(movieBackdropImage);
            moviePopularity.textContent = `Popularity: ${data.popularity}`;
            movieAdult.textContent = `Adult: ${data.adult ? "Yes" : "No"}`;
            movieVideo.textContent = `Has Video: ${data.video ? "Yes" : "No"}`;
        })
        .catch(error => {
            console.error("Error fetching movie details:", error);
        });
}
