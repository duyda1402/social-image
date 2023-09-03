import { Stack, Text } from "@mantine/core";
import { CollectionsInterface } from "../../interface";
import { capitalizeWords } from "../../utils";

type InfomationCollectionProps = {
  collection: CollectionsInterface;
};

const InfomationCollection = ({ collection }: InfomationCollectionProps) => {
  return (
    <Stack align="center">
      <Text fz={60} fw="inherit">
        {capitalizeWords(collection?.title)}
      </Text>
      <Text>{collection.description}</Text>
    </Stack>
  );
};

export default InfomationCollection;
