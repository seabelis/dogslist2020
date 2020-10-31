// components/DogBreedImages.js

import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages (props) {
  const {images, breed} = props;
  
  return (
    <div className="dog-breed-images">
      <h1>Dog Breed Images</h1>
      This page will show images of the { breed } breed
      <div>
        {images && images.map(url => <img src={ url } alt="dog" />) }
        {!images && "Loading..." }
      </div>
      <Link to="/">Go back to the index</Link>
    </div>

  )
}