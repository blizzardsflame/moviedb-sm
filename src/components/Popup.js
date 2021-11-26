import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} 
        </h2>
        <p className="year">{selected.Year}</p>
        <p className="genre">{selected.Genre}</p>

        <p className="rating">IMDB Ratings: {selected.imdbRating}</p>

        <div className="plot">
            <img src={selected.Poster} alt="Poster"/>
            <div className="details">
            <p>{selected.Plot}</p>
            <p>Director: {selected.Director}</p>
            <p><span>Writer: {selected.Writer}</span></p>
            <p><span>Actors: {selected.Actors}</span></p>
            <p><span>Language: {selected.Language}</span></p>
            </div>
        </div>
        <button className="close" onClick={closePopup}>Close</button>
      </div>
    </section>
  );
}

export default Popup;
