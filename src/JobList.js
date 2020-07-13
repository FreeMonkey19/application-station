import React from "react";
import { Card, Button } from "semantic-ui-react";

export const JobList = ({ jobs }) => {

	return (
		<div>
			<Card className="card"   >
				{jobs.map(job => {
					return (

						<Card.Content key={job.external_id} heading={"Job Listing"} >
							<Card.Description>Company: {job.company}</Card.Description>

							<Card.Description>Title: {job.title}</Card.Description>
							<Card.Description>Location: {job.location}</Card.Description>


							<Card.Content extra>

								<Button color="green" inverted floated="right">
									Apply
          </Button>
							</Card.Content>

						</Card.Content>


					)

				})}
			</Card>
		</div>)

};

export default JobList;