const data = {
  title: "Sonam Kumari",
  author: "indal",
  price: 5000,
  rating: 4.2,
  book_img:
    "http://192.168.43.118:8000/media/2020-12-28%2005%3A48%3A27.536318%2B00%3A00",
};
function getAPI() {
  fetch("http://192.168.43.118:8000/api/book/", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getAPI();

let indal = document.getElementById("indal");

indal.innerHTML = "hello indal kumar";
