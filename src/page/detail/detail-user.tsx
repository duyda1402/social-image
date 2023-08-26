import { Container, Group, Stack, Select, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import PhotosGallery from "../../component/photos-gallery";

import { Helmet } from "react-helmet";
import InfomationUser from "../../component/infomation/infomation-user";
import { useEffect, useState } from "react";
import { fetchProfileUser } from "../../api";
import { ProfileUser } from "../../interface";
import { formatNumber } from "../../utils";

const DetailUserPage = () => {
  const params = useParams();
  const [profile, setProfile] = useState<ProfileUser | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        if (params?.username) {
          const result = await fetchProfileUser(
            params.username.replace("@", "")
          );
          console.log(result);
          setProfile(result);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchData();
  }, [params.username]);
  return (
    <>
      {profile ? (
        <>
          <Helmet>
            <title>{profile.name} Profile</title>
          </Helmet>
          <Container size="xl">
            <Stack>
              <InfomationUser profile={profile} />
              <Group position="apart" py="md">
                <NavigationDetailUser
                  photoCount={profile.total_photos}
                  collectionCount={profile.total_collections}
                  likeCount={profile.total_likes}
                />
                <Select
                  w={150}
                  defaultValue="Theo xu hướng"
                  data={["Theo xu hướng", "Mới"]}
                />
              </Group>
              <PhotosGallery
                username={profile.username}
                totalDefaultPhotos={profile.total_photos}
              />
            </Stack>
          </Container>
        </>
      ) : (
        <>Username not found</>
      )}
    </>
  );
};

export default DetailUserPage;
type NavigationDetailUserProps = {
  photoCount?: number;
  collectionCount?: number;
  likeCount?: number;
};
function NavigationDetailUser({
  photoCount = 0,
  collectionCount = 0,
  likeCount = 0,
}: NavigationDetailUserProps) {
  const nav = useNavigate();
  return (
    <Group position="center">
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav("/users/")}
      >
        Photos {formatNumber(photoCount)}
      </Button>
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav("/users/collections/")}
      >
        Collections {formatNumber(collectionCount)}
      </Button>
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav("/user/likes/")}
      >
        Likes {formatNumber(likeCount)}
      </Button>
    </Group>
  );
}
