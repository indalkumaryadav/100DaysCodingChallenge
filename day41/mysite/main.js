const URL = "http://127.0.0.1:8000/api/";

function delete_data() {
  fetch(URL, {
    method: "DELETE",
    body: JSON.stringify({ id: 3 }), // The data
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function update_data() {
  data = {
    id: 4,
    eno: 4,
    ename: "KumarArya",
    esalery: 5002,
  };

  fetch(URL, {
    method: "PUT",
    body: JSON.stringify(data), // The data
  })
    .then((res) => res.json())
    .catch((data) => console.log(data));
}

function get_data() {
  fetch(URL, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      // handle the error
      console.log(error);
    });
}

function post_data() {
  data = {
    eno: 4,
    ename: "NewData",
    esalery: 10000,
  };

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data), // The data
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// APIVIew

function data_get() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function post_create() {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name: "JS" }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function post_delete() {
  fetch(URL, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function post_update() {
  fetch(URL, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function post_patch() {
  fetch(URL, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
