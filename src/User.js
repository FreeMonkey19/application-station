import React, { useEffect, useState } from "react";
// import "./User.css";
import { UserList } from "./UserList";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('this is react app  backend var')
    console.log(process.env.REACT_APP_BACKEND)
    fetch(`${process.env.REACT_APP_BACKEND}api/users`).then((response) =>
      response.json().then((data) => {
        setUsers(data.users);
      })
    );
  }, []);

  console.log(users);

  return (
    <div className="User">
      <UserList users={users} />
    </div>
  );
}

export default User;
