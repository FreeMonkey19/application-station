import React from "react";

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="user-info-wrapper" key={user.id}>
         
              <div className="user-info">
                <h3 className="user-data top">User Name: {user.name}</h3>
                <h3 className="user-data bottom">User Email:{user.email}</h3>
              </div>
           
            </div>
          
        );
      })}
    </div>
  );
};

export default UserList;
