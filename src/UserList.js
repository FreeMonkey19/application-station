import React from "react";
import { List, Header } from "semantic-ui-react";

export const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <List key={user.id}>
            <List.Item>
              <Header>{user.name}</Header>
            </List.Item>
          </List>
        );
      })}
    </div>
  );
};

export default UserList;
