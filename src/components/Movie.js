import PropTypes from "prop-types";

const Movie = ({ title, coverImg, summary, genres }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt="" />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
