import React from 'react';
import ImageGallery from "react-image-gallery";

const Gallery = ({ images }) => {
  return <ImageGallery showThumbnails={false} autoPlay={true} infinite={true} items={images} />;
};

export default Gallery;
