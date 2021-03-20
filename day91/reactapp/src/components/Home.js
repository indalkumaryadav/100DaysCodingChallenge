import React from "react";

const Home = (props) => {
  console.log("props", props);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <h1>Home </h1>
        <button>Cart List</button>
      </div>
      <div>
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          width={300}
        />
        <p>
          Prize: <b> 450</b>
        </p>
        <button
          onClick={() =>
            props.addToCartHandler({
              name: "product1",
              price: 100,
            })
          }
        >
          Add To Cart
        </button>
      </div>
      <div>
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          width={300}
        />
        <p>
          Prize: <b> 450</b>
        </p>
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export default Home;
