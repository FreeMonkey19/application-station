import React from 'react';
import PropTypes from 'prop-types';
import './Job.css';


const Job = (props) => {

  const onJobClick = () => {
    props.onClickCallBack(props.onJobClick);
    console.log(props.job);
  }

  // display job details 

  return <button className="Job-name-button" onClick={onJobClick}>
    {props.job.title}
  </button>

}

Job.propTypes = {
  onClickCallBack: PropTypes.func.isRequired,
  job: PropTypes.object
};

export default Job