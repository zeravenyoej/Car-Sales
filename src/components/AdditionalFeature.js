import React from 'react';

const AdditionalFeature = props => {

  const buyHandler = e => {
    e.preventDefault();
    props.buyItem(props.feature)
  };

  console.log(props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
