import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Image,
  Loader,
  Stack,
  Text,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { PhotoPreview, ProfileUser } from "../../interface";
import { fetchProfileUser } from "../../api";

type Props = {
  username?: string;
};

const ProfileMini = ({ username }: Props) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (username) {
          const result = await fetchProfileUser(username);
          setProfile(result);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
      setLoading(false);
    }
    fetchData();
  }, [username]);

  return (
    <>
      {loading ? (
        <Center h={100}>
          <Loader color="indigo" />
        </Center>
      ) : (
        <Stack>
          <Group position="apart">
            <Group>
              <Avatar
                radius="xl"
                size="lg"
                src={profile?.profile_image.medium}
                alt={profile?.name}
              />
              <Box>
                <Text fw={500}>{profile?.name}</Text>
                <Text fz={12}>{profile?.location}</Text>
              </Box>
            </Group>
            <Button variant="light" color="indigo">
              Follow
            </Button>
          </Group>
          <Grid gutter={5}>
            {profile?.photos &&
              profile.photos.map((photo: PhotoPreview, index: number) => (
                <Grid.Col span={4} key={photo.id + index}>
                  <Image
                    height={100}
                    fit="cover"
                    radius="md"
                    src={photo.urls.small}
                    alt={photo.slug}
                  />
                </Grid.Col>
              ))}
          </Grid>
        </Stack>
      )}
    </>
  );
};

export default ProfileMini;
