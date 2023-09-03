import { useEffect, useState } from "react";
import InfomationTopic from "../../component/infomation/infomation-topic";
import { Photo, TopicsInterface } from "../../interface";
import { Container, Group, Loader, Stack } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchATopics, fetchPhotosTopicBySlug } from "../../api";
import PhotosGallery from "../../component/photos-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import EndLoadMore from "../../component/end-load-more";

const DetailTopicPage = () => {
  const params = useParams();
  const [topic, setTopic] = useState<TopicsInterface | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(page: number) {
    try {
      if (params?.slug) {
        const result = await fetchATopics(params?.slug);
        setTopic(result);
        const photosResult = await fetchPhotosTopicBySlug(params?.slug, {
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
    if (params?.slug) {
      console.log(0);
      setPhotos([]);
      setPage(0);
      fetchData(0);
    }
  }, [params.slug]);

  const handleLoadMore = () => {
    if (params?.slug) {
      console.log("Loading more data for page:", page + 1);
      fetchData(page + 1);
      setPage(page + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : topic ? (
        <>
          <Helmet>
            <title>{topic.title} Topic</title>
          </Helmet>
          <Container size="xl">
            <Stack>
              <InfomationTopic topic={topic} />
              <Group position="apart" py="md"></Group>
              <InfiniteScroll
                dataLength={photos.length}
                next={handleLoadMore}
                hasMore={photos.length < topic.total_photos}
                loader={<Loader color="gray" />}
                endMessage={<EndLoadMore />}
              >
                <PhotosGallery photos={photos} />
              </InfiniteScroll>
            </Stack>
          </Container>
        </>
      ) : (
        <>Topic not found</>
      )}
    </>
  );
};

export default DetailTopicPage;
