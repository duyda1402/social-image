import {
  Avatar,
  Button,
  Center,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";
import { ProfileUser } from "../../interface";
import { formatNumber } from "../../utils";

type InfomationUserProps = {
  profile: ProfileUser;
};

const useStyles = createStyles((theme) => ({
  location: {
    color: theme.colors.gray[6],
    fontWeight: 500,
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textUnderlineOffset: "4px",
  },
}));

const InfomationUser = ({ profile }: InfomationUserProps) => {
  const { classes } = useStyles();
  const URL_GOOGLE_MAP = "https://www.google.com/maps?q=";
  const URL_TWITTER = "https://twitter.com/";
  const URL_INSTAGRAM = "https://instagram.com/";
  return (
    <Stack align="center">
      <Avatar src={profile.profile_image.large} size={130} radius={999} />
      <Text fz={60} fw="inherit">
        {profile?.name}
      </Text>
      <Group>
        <Button color="indigo" size="lg">
          Follow
        </Button>
        <Button color="indigo" size="lg" variant="outline">
          Message
        </Button>
        <Button color="indigo" size="lg" variant="outline">
          Donate
        </Button>
      </Group>
      {profile.bio && (
        <Text my="md" fw={500} color="gray.6">
          {profile.bio}
        </Text>
      )}

      <Group spacing={40}>
        {profile.location && (
          <Group onClick={() => window.open(URL_GOOGLE_MAP + profile.location)}>
            <ThemeIcon sx={{ borderWidth: 0 }} color="gray" variant="outline">
              <IconMapPinFilled />
            </ThemeIcon>
            <Text className={classes.location}>{profile.location}</Text>
          </Group>
        )}
        {profile.instagram_username && (
          <Group
            onClick={() =>
              window.open(URL_INSTAGRAM + profile.instagram_username)
            }
          >
            <ThemeIcon sx={{ borderWidth: 0 }} color="gray" variant="outline">
              <IconBrandInstagram />
            </ThemeIcon>
            <Text className={classes.location}>
              @{profile.instagram_username}
            </Text>
          </Group>
        )}
        {profile.twitter_username && (
          <Group
            onClick={() => window.open(URL_TWITTER + profile.twitter_username)}
          >
            <ThemeIcon sx={{ borderWidth: 0 }} color="gray" variant="outline">
              <IconBrandTwitterFilled />
            </ThemeIcon>
            <Text className={classes.location}>
              @{profile.twitter_username}
            </Text>
          </Group>
        )}
      </Group>
      <Group spacing="xl">
        <Stack spacing={0} align="center">
          <Text fw={500} color="gray.6">
            Follower
          </Text>
          <Text fz={28}>{formatNumber(profile.followers_count)}</Text>
        </Stack>
        <Center>
          <Divider orientation="vertical" h={20} />
        </Center>
        <Stack spacing={0} align="center">
          <Text fw={500} color="gray.6">
            Following
          </Text>
          <Text fz={28}>{formatNumber(profile.following_count)}</Text>
        </Stack>
        <Center>
          <Divider orientation="vertical" h={20} />
        </Center>
        <Stack spacing={0} align="center">
          <Text fw={500} color="gray.6">
            Downloads
          </Text>
          <Text fz={28}>{formatNumber(profile.downloads)}</Text>
        </Stack>
      </Group>
    </Stack>
  );
};

export default InfomationUser;
