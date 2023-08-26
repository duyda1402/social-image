import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function CategoryLabels() {
  const nav = useNavigate();
  const tabs = [
    { value: "home", label: "Trang chủ", path: "/" },
    { value: "topics", label: "Topic", path: "/topics" },
    { value: "ranking", label: "Bảng xếp hạng", path: "/ranking" },
    { value: "collections", label: "Bộ sưu tập", path: "/collections" },
  ];

  return (
    <Group position="center" spacing={0} py="xl">
      {tabs.map((item) => (
        <Button
          variant="subtle"
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
