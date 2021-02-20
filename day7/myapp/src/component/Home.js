import React, { Component } from "react";
import axios from "axios";

export default class home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getAPI();
  }
  getAPI = () => {
    axios.get("http://127.0.0.1:8000/api/book/").then(
      (response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <p>{item.author}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// function
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Home = () => {
//   const [text, setText] = useState([]);

//   useEffect(() => {
//     getAPI();
//   }, []);

//   const getAPI = () => {
//     axios.get("http://127.0.0.1:8000/api/book/").then(
//       (response) => {
//         console.log(response.data);
//         setText(response.data);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
//   return (
//     <div>
//       {text.map((item) => {
//         return (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;
