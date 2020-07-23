import React, { useEffect, useState } from "react";
import { JobList } from "./JobList";

function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}api/job_listings?page=2`).then((response) =>
      response.json().then((data) => {
        setJobs(data.jobs);
      })
    );
  }, []);

  return (
    <div className="job">
      <JobList jobs={jobs} />
    </div>
  );
}

export default Job;
