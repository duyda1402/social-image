import { useEffect, useState } from "react";
import { CollectionsInterface } from "../../interface";
import { useParams } from "react-router-dom";
import { fetchPhotosUserCollections } from "../../api";
import { Group, Text, Image } from "@mantine/core";
import { formatNumber } from "../../utils";

const UserCollectionsPhotos = () => {
  const params = useParams();
  const [collections, setCollection] = useState<CollectionsInterface[]>([]);
  const [page, _setPage] = useState<number>(0);

  async function fetchData() {
    try {
      if (params?.username) {
        const collectionsData = await fetchPhotosUserCollections(
          params.username.replace("@", ""),
          {
            page,
          }
        );
        setCollection(collectionsData);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  useEffect(() => {
    if (params?.username) {
      fetchData();
    }
  }, [params?.username]);

  return (
    <>
      {collections.map((item, index: number) => (
        <Group
          w={500}
          position="apart"
          key={index}
          px={10}
          py={10}
          align="center"
          spacing={10}
          sx={{
            border: "5px solid #DBE4FF",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          <Group w={200}>
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
    </>
  );
};

export default UserCollectionsPhotos;
