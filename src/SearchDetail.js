import React from 'react';
// import PropTypes from 'prop-types';
import './SearchDetail.css';


const SearchDetails = (props) => {

  if (!props.job.title) return null ; 

  return <div className="Search-detail-job-container">
    <h3>Job Listing Details:</h3>
      <p><span className="Search-detail-job-details">Job: </span>{props.job.title}, <span className="Search-detail-job-details">Location: </span>{props.job.location}</p>
      <p><span className="Search-detail-job-details">Company: </span> {props.job.company}</p>
  </div>
} ;

export default SearchDetails 