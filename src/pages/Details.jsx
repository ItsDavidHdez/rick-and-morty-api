import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useLocalStorage } from "../hooks/useLocalStorage";

const cookies = new Cookies();

function Details() {
  const [data, setData] = useState([]);
  const [like, setLike] = useState(false);
  let containerLikes = useLocalStorage("like", []);
  let { id } = useParams();

  const API = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let datas = await fetch(API).then((res) => res.json());
      setData(datas);
    })();
  }, [API]);

  const handleLike = () => {
    if (cookies.get("id")) {
      if (like === true) {
        setLike(false);
        containerLikes.pop(cookies.get("id"));
      } else {
        setLike(true);
        containerLikes.push(cookies.get("id"));
      }
    } else {
      alert("Por favor, inicié sesión");
      window.location.href = "/login";
    }
  };

  console.log(containerLikes);

  return (
    <div className="justify-content-center">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <img alt={data?.name} src={data?.image} />
          <h1>{data?.name}</h1>
          <div className="species">
            {data?.species} <span className="status">({data?.status})</span>
          </div>
          <div className="location">
            <i className="fas fa-map-marker" /> {data?.location.name}
          </div>
          <button
            type="button"
            className="btn btn-primary mb-4"
            onClick={handleLike}
          >
            {like === true ? "No me gusta" : "Me gusta"} {containerLikes.length}
          </button>
        </>
      )}
    </div>
  );
}

export { Details };
