import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="searchBox-wrap">
      <input
        type="text"
        className="searchBox"
        placeholder="Search a movie"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
