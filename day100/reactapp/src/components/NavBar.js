import React from "react";

const NavBar = () => {
  const isLogin = () => {
    if () {
    
      
    }
  };
  return (
    <div>
      <h1>Navbar</h1>
      {
        localStorage.getItem("token")?<button>Logout</button>:<button>Login</button>
      }
    </div>
  );
};

export default NavBar;
