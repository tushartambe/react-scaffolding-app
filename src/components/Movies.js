import React from 'react'
import Movie from './Movie'

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] }
  }

  componentDidMount() {
    console.log("coming");
    const getMovies = async () => {
      let response = await fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json');
      let json = await response.json();
      this.setState({ movies: json });
    }
    getMovies()
  }
  render() {
    return (
      <div className="container d-flex justify-content-between" style={{ flexWrap: "wrap" }}>
        {
          this.state.movies.map((movie) => <Movie title={movie.Title} year={movie.Year} type={movie.Type} genre={movie.Genre} poster={movie.Poster} />)
        }
      </div>
    )
  }
}