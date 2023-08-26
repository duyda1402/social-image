import { useEffect, useState } from "react";
import { Photo } from "../../interface";
import { fetchPhotos, fetchPhotosByUsername, searchPhotos } from "../../api";
import "./style.css";
import { Center, Loader, Text } from "@mantine/core";
import InfiniteScroll from "react-infinite-scroll-component";
import CardPhoto from "../card-photo";
import React from "react";

type PhotosGalleryProp = {
  keySearch?: string;
  username?: string;
  totalDefaultPhotos?: number;
};

const PhotosGallery = ({
  keySearch = "",
  username = "",
  totalDefaultPhotos,
}: PhotosGalleryProp) => {
  const LIMIT_PAGE = 10;
  const [total, setTotal] = useState<number>(totalDefaultPhotos ?? -1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);

  async function fetchData() {
    try {
      if (username) {
        const photosData = await fetchPhotosByUsername(username, { page });
        setPhotos((curPhoto) => curPhoto.concat(photosData));
      } else if (keySearch) {
        const photosData = await searchPhotos({ page, query: keySearch });
        setTotal(photosData.total);
        setPhotos((curPhoto) => curPhoto.concat(photosData.results));
      } else {
        const photosData = await fetchPhotos({ page: page });
        setPhotos((curPhoto) => curPhoto.concat(photosData));
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    if (page >= 1) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    setPhotos([]);
    setPage(0);
    fetchData();
  }, [keySearch, username]);

  if (!photos) {
    return <div>Loading...</div>;
  }

  const handleLoadMore = () => {
    setPage((prev: number) => prev + 1);
  };
  console.log(photos);
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={handleLoadMore}
      hasMore={total === -1 || (page + 1) * LIMIT_PAGE < total}
      loader={<Loader color="gray" />}
      endMessage={
        <Center mb="md">
          <Text fz="xs" color="gray">
            Yay! You have seen it all
          </Text>
        </Center>
      }
    >
      <div className="photo-list">
        {photos.map((photo, index) => (
          <React.Fragment key={index}>
            <CardPhoto photo={photo} />
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PhotosGallery;
