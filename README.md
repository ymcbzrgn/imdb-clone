# IMDb Clone

A web-based application replicating the essential features of the Internet Movie Database (IMDb). It enables users to search for movies, view popular movies, and access detailed information about each movie, including cast, crew, ratings, and summaries. This project aims to showcase the integration of modern web technologies with external APIs to create a seamless and interactive user experience.

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Introduction
IMDb Clone is designed to mimic the functionality of the popular movie database website, IMDb, using The Movie Database (TMDB) API. It serves as a learning project to explore web development concepts and API integration.

## Key Features
- **Browse Popular Movies**: Discover the most popular movies, updated regularly.
- **Detailed Movie Information**: Access comprehensive details about movies, including release dates, genres, ratings, and plot summaries.
- **Search Functionality**: Utilize a search feature to find movies by title.
- **Responsive Design**: Crafted with a mobile-first approach for optimal viewing on any device.

## Technology Stack
- **HTML5**: For structuring the web content.
- **CSS3**: For styling and presenting the content, including a responsive design.
- **JavaScript (ES6)**: For dynamic content interaction and API requests.
- **TMDB API**: For fetching real-time movie data.

## Setup and Installation

This project is designed to run directly in a web browser without the need for a web server, utilizing client-side JavaScript to interact with the TMDB API for movie data. Follow these steps to get it running locally:

1. **Clone the repository**: First, clone the IMDb Clone repository to your local machine using Git. You can do this by opening a terminal or command prompt and running the following command:

git clone https://github.com/ymcbzrgn/imdb-clone.git

2. **Open the project**: Navigate to the directory where you cloned the repo and locate the `index.html` file. You can open this file in any modern web browser to start using the application immediately.

- If you're using a file explorer, simply double-click `index.html` to open it in your default web browser.
- Alternatively, you can open it from a terminal or command prompt by navigating to the project directory and using a command like `open index.html` on macOS or `start index.html` on Windows.

No further installation or setup is necessary because the project uses client-side HTML, CSS, and JavaScript to render the application and make requests to the TMDB API directly from the browser.

Ensure you have an active internet connection so the application can fetch data from the TMDB API as it runs in your browser.

## How to Use
- **Browse**: Navigate through the homepage to view popular movies.
- **Search**: Use the search bar to find specific movies by titles.
- **Discover Movie Details**: Click on any movie thumbnail to view its detailed information on a separate page.

## Project Structure
- `index.html`: The entry point of the application, displaying the search interface and popular movies.
- `movies.html`: The movie details page, showing comprehensive information about the selected movie.
- `style.css`: Contains all the styling rules for the application.
- `script.js`: JavaScript file for the main page, handling API requests and dynamic content rendering.
- `movie.js`: JavaScript file for the movie details page, fetching and displaying detailed information about a specific movie.

## API Reference
This project utilizes the TMDB API for all movie data. You must obtain a free API key from [TMDB](https://www.themoviedb.org/documentation/api) to make requests. The API key is used in `script.js` and `movie.js` for fetching data.

## Contributing
Contributions are welcome and greatly appreciated. If you're interested in helping:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

For bugs, feature requests, or additional queries, please open an issue first so we can discuss what you would like to change.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
