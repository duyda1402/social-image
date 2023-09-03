import { Container, Group, Text, Select } from "@mantine/core";
import PhotosGallery from "../../component/photos-gallery";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  const LIMIT_PAGE = 10;
  const [total, setTotal] = useState<number>(totalDefaultPhotos ?? -1);

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(0);
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
        <PhotosGallery />
      </Container>
    </>
  );
};
