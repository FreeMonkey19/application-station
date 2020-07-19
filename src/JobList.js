import React from "react";
import { Card } from "semantic-ui-react";

export const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <Card key={job.id} className="card">
            <Card.Content heading={"Job Listing"}>
              <Card.Description>Company: {job.company}</Card.Description>

              <Card.Description>Title: {job.title}</Card.Description>
              <Card.Description>Location: {job.location}</Card.Description>

              <Card.Content extra>
                <button className="btn btn-primary">Apply</button>
              </Card.Content>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default JobList;