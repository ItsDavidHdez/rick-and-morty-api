import React, { useState, useEffect, useMemo, useRef } from "react";
import { Characters } from "../components/Characters";
import { Search } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { getData } from "../hooks/getData";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API = "https://rickandmortyapi.com/api/character/";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  console.log(cookies.get("name"));

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
    <>
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
    </>
  );
};
