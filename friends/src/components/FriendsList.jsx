import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
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

  //   const updateFriend = e => {
  //     props.setAddFriend({ [e.target.name]: e.target.value });
  //   };

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`api/friends/${id}`)
      .then(res => {
        console.log("%cThis is DELETE Response", "color: purple", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  };

  const loadFriend = (name, age, email) => {
    props.setAddFriend({
      name,
      age,
      email
    });
    // axiosWithAuth
    //   .put(`api/friends/${id}`, props.addFriend)
    //   .then(res => {
    //     console.log("%cThis is .PUT Response", "color: orange", res);
    //     setFriends(res.data);
    //   })
    //   .catch(err => console.log(err.message));
  };

  const updateFriend = id => {
    axiosWithAuth()
      .put(`api/friends/${id}`, props.addFriend)
      .then(res => {
        console.log("%cThis is .PUT Response", "color: orange", res);
        setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      {friends.map(elem => (
        <div key={elem.id}>
          <h1>Name: {elem.name}</h1>
          <h2>Age: {elem.age}</h2>
          <h3>Email: {elem.email}</h3>
          <button
            onClick={() => loadFriend(elem.name, elem.age, elem.email, elem.id)}
          >
            Load Friend Data
          </button>
          <button onClick={() => deleteFriend(elem.id)}>Delete Friend</button>
          <button onClick={() => updateFriend(elem.id)}>
            Update Friend Data
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
