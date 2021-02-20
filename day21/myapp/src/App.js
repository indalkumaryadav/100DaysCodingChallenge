import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <h2>{item.username}</h2>
            <h2>{item.email}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
