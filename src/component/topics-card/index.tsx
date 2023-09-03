import { Container, Group, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { TopicsInterface } from "../../interface";
import { fetchTopicsList } from "../../api";
import { formatNumber } from "../../utils";
import { useNavigate } from "react-router-dom";

const TopicsCard = () => {
  const [topics, setTopics] = useState<TopicsInterface[]>([]);
  const [page, _setPage] = useState<number>(0);
  const navigate = useNavigate();

  async function fetchTopicData() {
    const topicsData = await fetchTopicsList({ page: page });
    setTopics(topicsData);
  }

  useEffect(() => {
    fetchTopicData();
  }, []);

  return (
    <Container size="xl">
      <Stack>
        <Text fz={32} fw={500}>
          Topics Suggest
        </Text>
        <Group position="apart">
          {topics.map((item, index: number) => (
            <Group
              w={500}
              position="apart"
              key={index}
              px={10}
              py={10}
              align="center"
              spacing={10}
              onClick={() => navigate("/topics/" + item.slug)}
              sx={{
                border: "5px solid #DBE4FF",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
              <Group>
                <Text fz={20} fw={500} color="indigo">
                  {item.title}
                </Text>
                <Text color="indigo">({formatNumber(item.total_photos)})</Text>
              </Group>
              <Image
                radius="md"
                height={100}
                width={150}
                src={item.cover_photo.urls.regular}
                alt={item.slug}
              />
            </Group>
          ))}
        </Group>
      </Stack>
    </Container>
  );
};

export default TopicsCard;
