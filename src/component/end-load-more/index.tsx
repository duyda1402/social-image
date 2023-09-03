import { Center, Text } from "@mantine/core";

type Props = {
  title?: string;
};

const EndLoadMore = ({ title = "Yay! You have seen it all" }: Props) => {
  return (
    <Center mb="md">
      <Text fz="xs" color="gray">
        {title}
      </Text>
    </Center>
  );
};

export default EndLoadMore;
