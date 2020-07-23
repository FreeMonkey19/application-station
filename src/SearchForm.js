import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Job from "./Job";
// import SearchDetail from './SearchDetail';
import "./SearchForm.css";
// before deployment fix proxy to 5000
const BASE_URL = `${process.env.REACT_APP_BACKEND}api/job_listings?`;
const axios = require("axios");

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  // const [submission, setSubmission] = useState("");
  const [searchResult, setResult] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    axios
      .get(`${BASE_URL}description=${description}&location=${location}&page=4`)
      .then((response) => {
        setResult(response.data);
        console.log("this is response.data");
        console.log(response.data);
      });
  };

  const userListings = [];
  const listingsArray = searchResult["jobs"];
  for (var key in listingsArray) {
    userListings.push(listingsArray[key]);
  }

  return (
    <div>
      <div className="search-params">
        <form onSubmit={onSubmit}>
          <label htmlFor="location">
            Location
            <select
              id="location"
              value={location}
              placeholder="Location"
              onChange={(event) => setLocation(event.target.value)}
              onBlur={(event) => setLocation(event.target.value)}
            >
              <option>Portland</option>
              <option>San Francisco</option>
              <option>Seattle</option>
              <option>Remote</option>
              <option>Vancouver</option>
            </select>
          </label>
          <label htmlFor="description">
            description
            <select
              id="description"
              value={description}
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
              onBlur={(event) => setDescription(event.target.value)}
            >
              <option>Python</option>
              <option>Javascript</option>
              <option>React</option>
              <option>Engineering</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="outer-div">
        {userListings.map((listing) => {
          return (
            <div className="listing-container card w-25 p-3" key={listing.id}>
              <img
                className="listing-image"
                src={listing.company_logo}
                alt="..."
              ></img>

              <h5 className="card-title">
                <a
                  href={listing.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  placeholder="No logo available"
                >
                  More Info
                </a>
              </h5>
              <h6 className="card-title">Title: {listing.title}</h6>
              <h6 className="card-title">Location: {listing.location}</h6>
              <h6 className="card-title">Date Created: July 23, 2020</h6>
              {/* <div className="card-footer">
                <button className="btn btn-primary btn-small save-button">
                  <h5>Save To Dashboard</h5>
                </button>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
