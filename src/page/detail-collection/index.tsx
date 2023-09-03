import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CollectionsInterface, Photo } from "../../interface";
import { fetchACollection, fetchPhotosCollectionById } from "../../api";
import { Container, Group, Loader, Stack, Text } from "@mantine/core";
import { Helmet } from "react-helmet";
import InfomationCollection from "../../component/infomation/infomation-collection";
import PhotosGallery from "../../component/photos-gallery";

const DetailCollectionPage = () => {
  const params = useParams();
  const [collection, setCollection] = useState<CollectionsInterface | null>(
    null
  );
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [_page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(page: number) {
    try {
      if (params?.id) {
        const result = await fetchACollection(params?.id);
        setCollection(result);
        const photosResult = await fetchPhotosCollectionById(params?.id, {
          page,
        });
        console.log("Photos data:", photosResult);
        setPhotos((curPhotos) => curPhotos.concat(photosResult));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    if (params?.id) {
      console.log(0);
      setPhotos([]);
      setPage(0);
      fetchData(0);
    }
  }, [params.id]);

  // const handleLoadMore = () => {
  //   if (params?.id) {
  //     console.log("Loading more data for page:", page + 1);
  //     fetchData(page + 1);
  //     setPage(page + 1);
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : collection ? (
        <>
          <Helmet>
            <title>{collection.title}</title>
          </Helmet>
          <Container size="xl">
            <Stack>
              <InfomationCollection collection={collection} />
              <Group position="apart" py="md"></Group>
              <PhotosGallery photos={photos} />
            </Stack>
          </Container>
        </>
      ) : (
        <Text>Collections not found</Text>
      )}
    </>
  );
};

export default DetailCollectionPage;
