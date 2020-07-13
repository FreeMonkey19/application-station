import React from "react";
import { List, Header } from "semantic-ui-react";

export const UserList = ({ users }) => {
	return (
		<List>
			{users.map(user => {
				return (
					<List.Item key={user.name}>
						<Header>{user.name}</Header>
					</List.Item>
				)
			})}
		</List>
	)
};

export default UserList;
