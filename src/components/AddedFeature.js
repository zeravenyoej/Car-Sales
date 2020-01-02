import React from 'react';

const AddedFeature = props => {
  
  const removeHandler = e => {
    e.preventDefault();
    props.removeItem(props.feature)
  } 
  return (
    <li onClick={removeHandler}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
