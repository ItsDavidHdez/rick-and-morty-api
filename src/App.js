import React, { useState, useEffect, useMemo, useRef } from "react";
import { Characters } from "./components/Characters";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { getData } from "./hooks/getData";
import { Search } from "./components/Search";
import { Footer } from "./components/Footer";

const API = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    getData(API, setCharacters, setInfo);
  }, []);

  const onPrevious = () => {
    getData(info.prev, setCharacters, setInfo);
  };

  const onNext = () => {
    getData(info.next, setCharacters, setInfo);
  };

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <Search
          search={search}
          handleSearch={handleSearch}
          searchInput={searchInput}
        />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
          search={search}
        />
        <Characters characters={filteredUsers} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
