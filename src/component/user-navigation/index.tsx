import { Button, Group } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { formatNumber } from "../../utils";

type NavigationDetailUserProps = {
  photoCount?: number;
  collectionCount?: number;
  likeCount?: number;
};
export default function NavigationDetailUser({
  photoCount = 0,
  collectionCount = 0,
  likeCount = 0,
}: NavigationDetailUserProps) {
  const params = useParams();
  const nav = useNavigate();
  return (
    <Group position="center">
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav(`/users/${params?.username}`)}
      >
        Photos {formatNumber(photoCount)}
      </Button>
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav(`/users/${params?.username}/collections`)}
      >
        Collections {formatNumber(collectionCount)}
      </Button>
      <Button
        variant="filled"
        color="dark"
        radius="xl"
        size="md"
        onClick={() => nav(`/users/${params?.username}/likes`)}
      >
        Likes {formatNumber(likeCount)}
      </Button>
    </Group>
  );
}
