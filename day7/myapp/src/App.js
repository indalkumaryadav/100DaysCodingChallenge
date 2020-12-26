import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import AddBook from "./component/AddBook";

function App() {
  return (
    <>
      <NavBar />
      <AddBook />
      <Home />
    </>
  );
}

export default App;
