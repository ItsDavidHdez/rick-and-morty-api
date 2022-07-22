import React from "react";

const Search = ({ search, handleSearch, searchInput }) => {
  return (
    <div className="input-group input-group-sm">
      <input
        type="text"
        className="form-control"
        value={search}
        onChange={handleSearch}
        placeholder="Search a character"
        ref={searchInput}
      />
    </div>
  );
};

export { Search };
