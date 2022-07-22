const getData = (url, setCharacters, setInfo) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch((error) => console.log(error));
};

export { getData };
