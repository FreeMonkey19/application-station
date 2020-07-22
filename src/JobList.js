import React from "react";
// import { Card } from "semantic-ui-react";

export const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="card">
            <h2 heading={"Job Listing"}>
              <h3>Company: {job.company}</h3>

              <h3>Title: {job.title}</h3>
              <h3>Location: {job.location}</h3>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
