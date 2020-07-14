import React, { useEffect, useState } from "react";
// import "./User.css";
import { UserList } from "./UserList";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users").then((response) =>
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