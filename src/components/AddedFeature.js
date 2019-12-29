import React from 'react';

const AddedFeature = props => {
  
  const removeHandler = e => {
    e.preventDefault();
    props.removeItem(e.target.value)
  } 
  return (
    <li onClick={props.removeHandler}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
