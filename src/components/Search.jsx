import React from "react";

const Search = ({ search, handleSearch, searchInput }) => {
  return (
    <div className="input-group">
      <span className="input-group-text">Search a character</span>
      <input
        type="text"
        className="form-control"
        value={search}
        onChange={handleSearch}
        ref={searchInput}
      />
    </div>
  );
};

export { Search };
