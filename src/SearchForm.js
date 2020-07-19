import React, { useState } from "react";
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
      });
  };

  // const userSearchResults = searchResult.map((search) => {
  //   return <h2 key={search.jobs.id}>{search.jobs.title}</h2>
  // })


 

for (var key in searchResult) {
  if (searchResult.hasOwnProperty(key)) {
    console.log(key + " -> " + searchResult[key]);
  }
}
  
  console.log("this is search results")
  console.log(searchResult)

  // userResults.map((search) => {
  //   return <h2> key={search.id} job={search.title}</h2>
  // })

  

  // const [searchDetail, setSearchDetail] = useState([]);

  // const onClickDetails = (job) => {
  //   setSearchDetail(job);

  // }

  // const generateSearches = searchResult.map((search) => {
  //   return <Job key={search.id} job={search.title} onClickCallBack={onClickDetails} />
  // })

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
    </div>
  );
};

export default SearchForm;
