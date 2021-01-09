fetch("http://192.168.43.118:8000/api/posts/")
  .then((response) => response.json())
  .then((data) => console.log(data));
