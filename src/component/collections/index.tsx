import { Container, Group, Stack, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils";
import { useEffect, useState } from "react";
import { CollectionsInterface } from "../../interface";
import { fetchCollectionsList } from "../../api";

const CollectionsList = () => {
  const [collections, setCollections] = useState<CollectionsInterface[]>([]);
  const [page, _setPage] = useState<number>(0);
  const navigate = useNavigate();

  async function fetchCollectionsData() {
    const collectionsData = await fetchCollectionsList({ page: page });
    setCollections(collectionsData);
  }

  useEffect(() => {
    fetchCollectionsData();
  }, []);

  return (
    <Container size="xl">
      <Stack>
        <Text fz={32} fw={500}>
          Collections Suggest
        </Text>
        <Group position="apart">
          {collections.map((item, index: number) => (
            <Group
              w={500}
              position="apart"
              key={index}
              px={10}
              py={10}
              align="center"
              spacing={10}
              onClick={() => navigate("/collections/" + item.id)}
              sx={{
                border: "5px solid #DBE4FF",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
              <Group w={250}>
                <Text fz={20} fw={500} color="indigo" lineClamp={1}>
                  {item.title}
                </Text>
                <Text color="indigo">({formatNumber(item.total_photos)})</Text>
              </Group>
              <Image
                radius="md"
                height={100}
                width={150}
                src={item.cover_photo.urls.regular}
                alt={item.title}
              />
            </Group>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

export default CollectionsList;
