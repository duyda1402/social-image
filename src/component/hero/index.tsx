import {
  Stack,
  Text,
  Group,
  Input,
  createStyles,
  rem,
  Container,
  ActionIcon,
} from "@mantine/core";
import { useEffect, useState } from "react";
import TrendingKeyword from "../trending";
import { useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import { fetchPhotoRandom } from "../../api";

type Props = {};

const useStyles = createStyles((theme, props: { image?: string }) => ({
  hero: {
    position: "relative",
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${props.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: rem(450),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: "relative",
  },
  searchIcon: {
    color: "gray",
    transition: "color 0.3s",
    "&:hover": {
      color: "#228BE6",
    },
  },
}));
const HeroComponent = (_props: Props) => {
  const [qSearch, setQSearch] = useState<string>("");
  const [imageHero, setImageHero] = useState<string>("");
  const { classes } = useStyles({ image: imageHero });
  const navigation = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const photo = await fetchPhotoRandom();
        setImageHero(photo.urls.regular);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Stack align="center" maw={500}>
          <Text color="white" fw={500} fz={30}>
            The best free stock photos, royalty free images & videos shared by
            creators.
          </Text>
          <Group
            position="apart"
            px={10}
            bg="white"
            sx={{ borderRadius: 8 }}
            w="100%"
          >
            <Input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  return navigation("/search/" + qSearch);
                }
              }}
              onChange={(e) => setQSearch(e.target.value)}
              variant="unstyled"
              size="lg"
              placeholder="Search for free photos"
            />
            <ActionIcon
              variant="transparent"
              onClick={() => navigation("/search/" + qSearch)}
            >
              <IconSearch color="gray" />
            </ActionIcon>
          </Group>
          <TrendingKeyword />
        </Stack>
      </Container>
    </div>
  );
};

export default HeroComponent;
