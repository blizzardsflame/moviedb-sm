import React from "react";

function result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="Poster" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default result;
