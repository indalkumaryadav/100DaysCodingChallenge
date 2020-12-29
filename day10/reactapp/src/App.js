import "./App.css";
import axios from "axios";

function App() {
  function getAPI() {
    axios.get("http://192.168.43.118:8000/api/book/").then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getAPI();
  return (
    <div className="App">
      <h1>Hwllo qorll </h1>
    </div>
  );
}

export default App;
