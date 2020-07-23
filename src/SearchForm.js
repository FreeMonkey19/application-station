import React, { useState } from "react";
import "./SearchForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = `${process.env.REACT_APP_BACKEND}api/job_listings?`;
const axios = require("axios");

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [searchResult, setResult] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    axios
      .get(`${BASE_URL}description=${description}&location=${location}`)
      .then((response) => {
        setResult(response.data);
       
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
              <option>Remote</option>
              <option>San Francisco</option>
              <option>Seattle</option>
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
              <option>Engineering</option>
              <option>Javascript</option>
              <option>Python</option>
              <option>React</option>
              <option>Software Developer</option>
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="outer-div">
        {userListings.map((listing) => {
          return (
            <div className="listing-container card w-25 p-3" key={listing.id}>
              {(() => {
                if (listing.company_logo === null) {
                  return <h3>No Logo Available</h3>;
                } else {
                  return (
                    <img
                      className="listing-image"
                      src={listing.company_logo}
                      alt="..."
                    ></img>
                  );
                }
              })()}

              <h5 className="card-title">
                {(() => {
                  if (listing.company_url === null) {
                    return <h3>No Url Available</h3>;
                  } else {
                    return (
                      <a 
                        href={listing.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        placeholder="No logo available"
                      >
                        More Info
                      </a>
                    );
                  }
                })()}
              </h5>
             
              <div className="card-footer">
              <h6 className="card-title">Title: {listing.title}</h6>
              <h6 className="card-title">Location: {listing.location}</h6>
              <h6 className="card-title">Date Created: July 23, 2020</h6>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
