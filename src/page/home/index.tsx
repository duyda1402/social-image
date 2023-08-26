import { Container, Group, Text, Select } from "@mantine/core";
import PhotosGallery from "../../component/photos-gallery";
import { Helmet } from "react-helmet";

const HomePage = () => {
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

export default HomePage;
