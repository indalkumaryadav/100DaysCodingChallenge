function postData() {
  response = fetch("http://127.0.0.1:8000/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
  });
}
