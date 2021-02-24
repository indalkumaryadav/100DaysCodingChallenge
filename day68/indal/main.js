const fetchData = () => {
  fetch("url")
    .then((response) => response.json())
    .then((data) => data.data);
};
