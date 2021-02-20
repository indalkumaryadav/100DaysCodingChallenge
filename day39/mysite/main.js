const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let myform = e.target;
  const formData = new FormData(myform);
  const json = convertFD2JSON(formData);
  fetch(URL, {
    method: "POST",
    body: json,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.status);
    });
});

function convertFD2JSON(formData) {
  let obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}

const URL = "http://127.0.0.1:8000/";
