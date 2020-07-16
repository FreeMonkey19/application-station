import React from "react";

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <ul>
              <li>
                <h2>{user.name}</h2>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
