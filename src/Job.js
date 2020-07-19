import React, { useEffect, useState } from "react";
import './Job.css';
import { JobList } from "./JobList";

function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://application-station.herokuapp.com/api/job_listings").then((response) =>
      response.json().then((data) => {
        setJobs(data.jobs);
      })
    );
  }, []);

  console.log(jobs)

  return (
    <div className="Job">
      <JobList jobs={jobs} />
    </div>
  );
}

export default Job;