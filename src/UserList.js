import React from "react";

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <ul>
            <li key={user.id}>
              <h2>{user.name}</h2>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
