import React from "react";

const UserCard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  );
};
export default UserCard;
