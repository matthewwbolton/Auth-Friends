import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendList from "./FriendsList";

const AddFriendForm = props => {
  const [addFriend, setAddFriend] = useState({
    name: "",
    age: undefined,
    email: ""
  });

  const handleChanges = e => {
    setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", addFriend)
      .then(res => {
        console.log("%cThis is .POST Response", "color: green", res);
        // setFriend(res.data);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={handleChanges}
            type="text"
            name="name"
            value={addFriend.name}
          />
        </label>
        <label>
          Age:
          <input
            onChange={handleChanges}
            type="number"
            name="age"
            value={addFriend.age}
          />
        </label>
        <label>
          Email:
          <input
            onChange={handleChanges}
            type="email"
            name="email"
            value={addFriend.email}
          />
        </label>
        <button>Add Friend</button>
      </form>
      <FriendList setAddFriend={setAddFriend} addFriend={addFriend} />
    </div>
  );
};

export default AddFriendForm;
