import React from 'react';

const AddedFeature = props => {
  
  const removeHandler = e => {
    e.preventDefault();
    console.log('clicked!')
    props.removeItem(props.feature)
  } 
  console.log('Added Feature: ', props)
  return (
    <li onClick={removeHandler}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AddedFeature;
