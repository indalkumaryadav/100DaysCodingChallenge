import React from "react";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() =>
          props.addToCartHandler({
            prize: 100,
            name: "indal",
          })
        }
      >
        Click Here
      </button>
    </div>
  );
};

export default Home;
