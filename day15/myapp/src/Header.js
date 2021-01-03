import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Header = () => {
  const [set, setState] = useState([
    {
      name: "indal",
      username: "indalkumar56",
    },
    {
      name: "indal",
      username: "indalkumar56",
    },
    {
      name: "indal",
      username: "indalkumar56",
    },
    {
      name: "indal",
      username: "indalkumar56",
    },
  ]);

  //   useEffect(() => {
  //     setState("Kumar");
  //   }, []);

  return (
    <div>
      {set.map((item) => {
        console.log(item.name);
        <h1>{item.name}</h1>;
      })}
    </div>
  );
};

export default Header;
