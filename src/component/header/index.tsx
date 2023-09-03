import { Group, Text, Header, Input, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type HeaderComponentProps = {
  isTransparent?: boolean;
  isSearch?: boolean;
};

const HeaderComponent = ({ isTransparent, isSearch }: HeaderComponentProps) => {
  const params = useParams();
  const navigation = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [qSearch, setQSearch] = useState<string>(params.qSearch || "");
  window.addEventListener("scroll", () => {
    setScrollPosition(window.scrollY);
  });

  return (
    <Header
      height={60}
      p="xs"
      withBorder={scrollPosition > 500 || !isTransparent}
      pos="fixed"
      bg={scrollPosition < 500 && isTransparent ? "transparent" : "white"}
    >
      <Group
        position="apart"
        sx={{
          color: scrollPosition < 500 && isTransparent ? "white" : "black",
        }}
        px="md"
      >
        <Group sx={{ cursor: "pointer" }} align="center">
          <Avatar src={import.meta.env.VITE_APP_LOGO} alt="logo" />
          <Text fz={20} fw={700} onClick={() => navigation("/")}>
            {import.meta.env.VITE_APP_TITLE}
          </Text>
        </Group>
        {(isSearch || scrollPosition > 500) && (
          <Group
            position="apart"
            px={10}
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              background: theme.colors.gray[1],
            })}
          >
            <Input
              value={qSearch}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  return navigation("/search/" + qSearch);
                }
              }}
              onChange={(e) => setQSearch(e.target.value)}
              variant="unstyled"
              size="sm"
              placeholder="Search for free photos"
            />
            <IconSearch color="gray" />
          </Group>
        )}
        {/* <Button variant="light" color="violet">
          Upload
        </Button> */}
      </Group>
    </Header>
  );
};

export default HeaderComponent;
