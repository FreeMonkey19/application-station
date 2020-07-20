import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Job from "./Job";
// import SearchDetail from './SearchDetail';
import "./SearchForm.css";
// before deployment fix proxy to 5000
const BASE_URL = `${process.env.REACT_APP_BACKEND}api/job_listings?`;
const axios = require("axios");

const SearchForm = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [description, setDescription] = useState("Python");
  // const [submission, setSubmission] = useState("");
  const [searchResult, setResult] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${BASE_URL}description=${description}&location=${location}`)
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
            <option>Seattle</option>
            <option>Portland</option>
            <option>San Francisco</option>
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
            <option>Ruby on Rails</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      <div className="card-parent">
        {userListings.map((listing) => {
          return (
            <div key={listing.id} >
              <img 
                src={listing.company_logo}
                className="card-img-top"
                alt="..."
                className="img-thumbnail image-small"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Company: {listing.company}</h5>
                <h6 className="card-title">Title: {listing.title}</h6>
                <h6 className="card-title">Location: {listing.title}</h6>

                <button className="btn btn-primary">More Info</button>
                <button className="btn btn-danger">Delete</button>


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
