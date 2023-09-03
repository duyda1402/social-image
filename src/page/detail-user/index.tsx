import { Group, Loader, Select, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPhotosByUsername, fetchProfileUser } from "../../api";
import EndLoadMore from "../../component/end-load-more";
import PhotosGallery from "../../component/photos-gallery";
import { Photo, ProfileUser } from "../../interface";

const DetailUserPage = () => {
  const params = useParams();
  const [profile, setProfile] = useState<ProfileUser | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(page: number) {
    try {
      if (params?.username) {
        const result = await fetchProfileUser(params.username.replace("@", ""));
        setProfile(result);
        const photosResult = await fetchPhotosByUsername(
          params.username.replace("@", ""),
          {
            page,
          }
        );
        console.log("Photos data:", photosResult);
        setPhotos((curPhotos) => curPhotos.concat(photosResult));
        setIsLoading(false);
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
      fetchData(0);
    }
  }, [params?.username]);

  const handleLoadMore = () => {
    if (params?.username) {
      console.log("Loading more data for page:", page + 1);
      fetchData(page + 1);
      setPage(page + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        photos &&
        profile && (
          <>
            <Stack>
              <Group position="right" py="md">
                <Select
                  w={150}
                  defaultValue="Theo xu hướng"
                  data={["Theo xu hướng", "Mới"]}
                />
              </Group>

              <InfiniteScroll
                dataLength={photos.length}
                next={handleLoadMore}
                hasMore={photos.length < profile.total_photos}
                loader={<Loader color="gray" />}
                endMessage={<EndLoadMore />}
              >
                <PhotosGallery photos={photos} />
              </InfiniteScroll>
            </Stack>
          </>
        )
      )}
    </>
  );
};

export default DetailUserPage;
