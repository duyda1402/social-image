import { Group, Text } from "@mantine/core";

const data = [
  { label: "flower", search: "flower" },
  { label: "foods", search: "foods" },
  { label: "car", search: "car" },
  { label: "sports", search: "sports" },
  { label: "nature", search: "nature" },
];

const TrendingKeyword = () => {
  return (
    <Group spacing="xs">
      <Text color="gray.0" fw={500} fz={18}>
        Trending:
      </Text>
      {data.map((item, index: number) => (
        <Text
          color="gray.2"
          component="a"
          href={"/search/" + item.search}
          key={item.label}
        >
          {index === data.length - 1 ? `${item.label}` : `${item.label},`}
        </Text>
      ))}
    </Group>
  );
};

export default TrendingKeyword;
