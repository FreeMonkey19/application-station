import React from "react";
import "./JobList.css";

export const JobList = ({ jobs }) => {
  return (
    <div className="outer-div">
      {jobs.map((job) => {
        return (
          <div key={job.id} className="job-container card w-25 p-3 job-container">
            {(() => {
              if (job.company_logo === null) {
                return <h3>No Logo Available</h3>;
              } else {
                return (
                  <img
                    className="job-image"
                    src={job.company_logo}
                    alt="..."
                  ></img>
                );
              }
            })()}

            <h3 className="card-title">
              {(() => {
                if (job.company_url === null) {
                  return <h3>{job.url}</h3>;
                } else {
                  return (
                    <a
                      href={job.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      placeholder="No logo available"
                    >
                      <h5>More Info</h5>
                    </a>
                  );
                }
              })()}
            </h3>
            <div className="card-footer">
              <h6 className="card-title">Title: {job.title}</h6>
              <h6 className="card-title">Location: {job.location}</h6>
              <h6 className="card-title">Date Created: July 23, 2020</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
