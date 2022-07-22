import React, { useState, useEffect } from "react";
import { Characters } from "./components/Characters";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { getData } from "./hooks/getData";

const API = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(API, setCharacters, setInfo);
  }, []);

  const onPrevious = () => {
    getData(info.prev, setCharacters, setInfo);
  };

  const onNext = () => {
    getData(info.next, setCharacters, setInfo);
  };

  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
      </div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
