// components/DogsList.js

import React, { Component } from 'react';

export default class DogsList extends Component {
  state = {
    dogBreeds: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => console.log("this data", Object.keys(data.message)))
    .catch(console.error);
  }

  render () {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        { this.state.dogBreeds === null && "Loading..."}
      </div>
    );
  }
}