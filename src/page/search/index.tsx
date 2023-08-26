import { Button, Container, Group, Select, Stack, Title } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import PhotosGallery from "../../component/photos-gallery";
import { capitalizeWords } from "../../utils";

const SearchPage = () => {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>{capitalizeWords(params.qSearch || "")} Photos</title>
      </Helmet>
      <Container size="xl">
        <Stack>
          <Group>Suggest Tag</Group>
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
          <PhotosGallery keySearch={params?.qSearch} />
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
