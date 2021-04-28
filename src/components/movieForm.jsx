import React from "react";

const MovieForm = ({ match, history }) => {
  const result = match.params.id;
  return (
    <React.Fragment>
      <h1>the ID of this movie is{result}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
