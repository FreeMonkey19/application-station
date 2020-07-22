import React from "react";
import "./UserList.css"

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="user-info-wrapper" key={user.id}>
            {/* <ul> */}
              <div className="user-info">
                <h3 className="user-data top">User Name: {user.name}</h3>
                <h3 className="user-data bottom">User Email:{user.email}</h3>
              </div>
              {/* </ul> */}
            </div>
          
        );
      })}
    </div>
  );
};

export default UserList;
