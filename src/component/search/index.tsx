import { Button, Group, Stack, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const data = [
  { title: "Ảnh về", name: "Ảnh", path: "/search" },
  { title: "Người dùng", name: "Người dùng", path: "/search/users" },
  { title: "Bộ sưu tập về", name: "Bộ sưu tập", path: "/search/collections" },
];

const MenuSearchNavigation = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Title>Ảnh</Title>
      <Group position="apart">
        <Group>
          {data.map((item) => (
            <Button
              key={item.path}
              variant="subtle"
              radius="xl"
              color="dark"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </Group>
      </Group>
    </Stack>
  );
};

export default MenuSearchNavigation;
