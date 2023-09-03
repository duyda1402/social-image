import { Container, Group, Text, Select, Loader, Center } from "@mantine/core";
import PhotosGallery from "../../component/photos-gallery";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Photo } from "../../interface";
import { fetchPhotos } from "../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import EndLoadMore from "../../component/end-load-more";

const HomePage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);

  async function fetchData(page: number) {
    try {
      console.log("PAGE", page);
      const photosData = await fetchPhotos({ page: page });
      setPhotos((curPhoto) => curPhoto.concat(photosData));
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    fetchData(0);
  }, []);

  const handleLoadMore = () => {
    fetchData(page + 1);
    setPage(page + 1);
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container size="xl">
        <Group position="apart" pb="lg">
          <Text fz={32} fw={500}>
            Free Stock Photos
          </Text>
          <Select
            w={150}
            defaultValue="Theo xu hướng"
            data={["Theo xu hướng", "Mới"]}
          />
        </Group>
        <InfiniteScroll
          dataLength={photos.length}
          next={handleLoadMore}
          hasMore={true}
          loader={<Loader color="gray" />}
          endMessage={<EndLoadMore />}
        >
          <PhotosGallery photos={photos} />
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default HomePage;
