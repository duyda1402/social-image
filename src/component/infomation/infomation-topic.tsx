import { Stack, Text } from "@mantine/core";
import { TopicsInterface } from "../../interface";
import { capitalizeWords } from "../../utils";

type InfomationTopicProps = {
  topic: TopicsInterface;
};

const InfomationTopic = ({ topic }: InfomationTopicProps) => {
  return (
    <Stack align="center">
      <Text fz={60} fw="inherit">
        {capitalizeWords(topic?.title)}
      </Text>
      <Text>{topic.description}</Text>
    </Stack>
  );
};

export default InfomationTopic;
