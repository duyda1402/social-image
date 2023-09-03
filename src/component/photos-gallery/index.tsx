import { Photo } from "../../interface";
import "./style.css";
import CardPhoto from "../card-photo";
import React from "react";

type PhotosGalleryProp = {
  photos: Photo[];
};

const PhotosGallery = ({ photos }: PhotosGalleryProp) => {
  return (
    <div className="photo-list">
      {photos.map((photo, index) => (
        <React.Fragment key={index}>
          <CardPhoto photo={photo} />
        </React.Fragment>
      ))}
    </div>
  );
};
export default PhotosGallery;
