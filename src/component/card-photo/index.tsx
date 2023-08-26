import {
  Avatar,
  Box,
  Button,
  Group,
  Text,
  Image,
  HoverCard,
} from "@mantine/core";
import { Photo } from "../../interface";
import { useState } from "react";
import ProfileMini from "../profile-mini-user";
import { IconDownload } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
type Props = {
  photo: Photo;
};

function CardPhoto({ photo }: Props) {
  const [isViable, setIsViable] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      pos="relative"
      onMouseEnter={() => setIsViable(true)}
      onMouseLeave={() => setIsViable(false)}
    >
      {isViable && (
        <Box sx={{ zIndex: 10 }} pos="absolute" w="100%" bottom={20}>
          <HoverCard
            width={320}
            shadow="md"
            radius="lg"
            withArrow
            arrowOffset={20}
            openDelay={200}
            closeDelay={400}
            position="top-start"
          >
            <Group p={10} position="apart">
              <HoverCard.Target>
                <Group>
                  <Avatar
                    color="cyan"
                    radius="xl"
                    src={photo?.user?.profile_image?.medium}
                    onClick={() => navigate("/users/@" + photo?.user?.username)}
                  />
                  <Text color="white">{photo?.user?.name}</Text>
                </Group>
              </HoverCard.Target>

              <Button
                color="gray.2"
                variant="outline"
                onClick={() => window.open(photo.links.download)}
              >
                <IconDownload />
              </Button>
            </Group>
            <HoverCard.Dropdown>
              <ProfileMini username={photo?.user?.username} />
            </HoverCard.Dropdown>
          </HoverCard>
        </Box>
      )}

      <Image
        className="img"
        radius="lg"
        src={photo?.urls?.regular || photo?.links?.download}
        alt={photo?.alt_description}
      />
    </Box>
  );
}

export default CardPhoto;
