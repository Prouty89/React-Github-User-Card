import React from "react";
import UserCard from "./UserCard.js";

 function CardGrid(props) {
  const people = props.state.hubUser;
  return (
    <div className="card-grid">
      {people.map(hubUser => (
        <UserCard hubUser={hubUser} />
      ))}
    </div>
  );
}

 export default CardGrid;