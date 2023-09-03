import {
  Button,
  Container,
  Group,
  Loader,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import PhotosGallery from "../../component/photos-gallery";
import { capitalizeWords } from "../../utils";
import { useEffect, useState } from "react";
import { Photo } from "../../interface";
import { searchPhotos } from "../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import EndLoadMore from "../../component/end-load-more";

const SearchPage = () => {
  const params = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  async function fetchData(page: number, qSearch: string) {
    try {
      console.log("PAGE", page);
      const photosData = await searchPhotos({ page: page, query: qSearch });
      setPhotos((curPhotos) => curPhotos.concat(photosData.results));
      setTotalPages(photosData.total_pages);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    if (params.qSearch) {
      setPhotos(() => []);
      fetchData(0, params.qSearch);
    }
  }, [params.qSearch]);

  const handleLoadMore = () => {
    if (params.qSearch) {
      fetchData(page + 1, params.qSearch);
      setPage(page + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>{capitalizeWords(params.qSearch || "")} Photos</title>
      </Helmet>
      <Container size="xl">
        <Stack mt="md">
          {/* <Group>Suggest Tag</Group> */}
          <Group>
            <Title sx={{ textTransform: "capitalize" }}>
              Free {params.qSearch} Photos
            </Title>
          </Group>
          <Group position="apart" py="md">
            <NavigationSearch qSearch={params.qSearch} />
            <Select
              w={150}
              defaultValue="Theo xu hướng"
              data={["Theo xu hướng", "Mới"]}
            />
          </Group>
          <InfiniteScroll
            dataLength={photos.length}
            next={handleLoadMore}
            hasMore={page + 1 <= totalPages}
            loader={<Loader color="gray" />}
            endMessage={<EndLoadMore />}
          >
            <PhotosGallery photos={photos} />
          </InfiniteScroll>
        </Stack>
      </Container>
    </>
  );
};

export default SearchPage;

type NavigationSearchProps = {
  qSearch?: string;
};

function NavigationSearch({ qSearch = "" }: NavigationSearchProps) {
  const nav = useNavigate();
  const menus = [
    { label: "Photos", path: "/search/" + qSearch },
    { label: "Collections", path: "/search/collections/" + qSearch },
    { label: "Users", path: "/search/users/" + qSearch },
  ];
  return (
    <Group position="center">
      {menus.map((item) => (
        <Button
          variant="filled"
          color="dark"
          radius="xl"
          size="md"
          key={item.label}
          onClick={() => nav(item.path)}
        >
          {item.label}
        </Button>
      ))}
    </Group>
  );
}
