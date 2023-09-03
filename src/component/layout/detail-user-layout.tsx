import { Outlet, useParams } from "react-router-dom";

import { Container, Group, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchProfileUser } from "../../api";
import { ProfileUser } from "../../interface";
import InfomationUser from "../infomation/infomation-user";
import NavigationDetailUser from "../user-navigation";

const DetailUserLayout = () => {
  const params = useParams();
  const [profile, setProfile] = useState<ProfileUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      if (params?.username) {
        const result = await fetchProfileUser(params.username.replace("@", ""));
        setProfile(result);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (params?.username) {
      console.log(0);
      fetchData();
    }
  }, [params?.username]);

  return (
    <>
      <Helmet>
        <title>{profile ? profile.name : "Loading"} Profile</title>
      </Helmet>
      {isLoading && <Loader />}
      {!isLoading && profile && (
        <Container>
          <InfomationUser profile={profile} />
        </Container>
      )}
      {!isLoading && profile && (
        <Container size="xl" mt={100}>
          <Group>
            <NavigationDetailUser
              photoCount={profile.total_photos}
              collectionCount={profile.total_collections}
              likeCount={profile.total_likes}
            />
          </Group>
          <Outlet />
        </Container>
      )}
      {!isLoading && !profile && <>Username not found</>}
    </>
  );
};

export default DetailUserLayout;
