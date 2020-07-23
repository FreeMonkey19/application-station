import React from "react";
// import { Card } from "semantic-ui-react";

export const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="card w-25 p-3 listing-container">
            <img className="listing-image" src={job.company_logo} alt="..."></img>
            <h5 className="card-title">
              <a
                href={job.company_url}
                target="_blank"
                rel="noopener noreferrer"
                placeholder="No logo available"
              >
                More Info
              </a>
            </h5>

            <h3>Title: {job.title}</h3>
            <h3>Location: {job.location}</h3>
            {/* <h6 className="card-title">Date Created: July 23, 2020</h6> */}
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
