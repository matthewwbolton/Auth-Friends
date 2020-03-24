import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then(res => {
        console.log("%cThis is .GET Response", "color: red", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      {friends.map(elem => (
        <div key={elem.id}>
          <h1>Name: {elem.name}</h1>
          <h2>Age: {elem.age}</h2>
          <h3>Email: {elem.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
