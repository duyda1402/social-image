import { useEffect, useState } from "react";
import { Photo } from "../../interface";
import { useParams } from "react-router-dom";
import { fetchPhotosUserLikes } from "../../api";

import PhotosGallery from "../photos-gallery";

const UserLikedPhoto = () => {
  const params = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);

  async function fetchData() {
    try {
      if (params?.username) {
        const photoData = await fetchPhotosUserLikes(
          params.username.replace("@", ""),
          {
            page,
          }
        );
        setPhotos((curPhotos) => curPhotos.concat(photoData));
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    if (params?.username) {
      console.log(0);
      setPhotos([]);
      setPage(0);
      fetchData();
    }
  }, [params?.username]);

  return (
    <>
      <PhotosGallery photos={photos} />
    </>
  );
};

export default UserLikedPhoto;
