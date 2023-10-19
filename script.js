const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=54be3515f5bdef4483d47cedf1f24e5d&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=54be3515f5bdef4483d47cedf1f24e5d&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");
const genreDropdown = document.getElementById("genreDropdown");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const rating = document.createElement('p');
                rating.setAttribute('class', 'rating clickable');
                rating.style.color = "aliceblue";

                const ratingValue = element.vote_average.toFixed(1);
                rating.textContent = `${ratingValue}/10`;

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                div_card.appendChild(image);
                div_card.appendChild(title);
                div_card.appendChild(rating);

                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);

                rating.addEventListener("click", function () {
                    window.location.href = `movies.html?id=${element.id}`;
                });
            });
        });
}

document.getElementById("menuButton").addEventListener("click", function () {
    location.reload();
});

let selectedGenreId = 'GENRE';

genreDropdown.addEventListener("change", function () {
    const newSelectedGenreId = genreDropdown.value;

    if (newSelectedGenreId === 'GENRE') {
        location.reload();
    }
    else if (newSelectedGenreId !== selectedGenreId) {
        selectedGenreId = newSelectedGenreId;
        main.innerHTML = '';
        const genreMoviesURL = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenreId}&api_key=54be3515f5bdef4483d47cedf1f24e5d&page=1`;
        returnMovies(genreMoviesURL);
    }
});


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=54be3515f5bdef4483d47cedf1f24e5d')
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(genre => {
            const option = document.createElement("option");
            option.value = genre.id;
            option.textContent = genre.name;
            genreDropdown.appendChild(option);
        });
    });


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});
