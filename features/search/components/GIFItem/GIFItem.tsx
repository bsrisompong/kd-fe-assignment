import Link from "next/link";
import { ActionIcon, Anchor, AspectRatio, Avatar, Group, Image, Text } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import { IGif } from "@giphy/js-types";
import clsx from "clsx";

import { useFavorites } from "@/features/favorites";

import classes from "./GIFItem.module.css";

interface GIFItemProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  altText: string;
}

const GIFItem = ({
  imageUrl,
  imageWidth,
  imageHeight,
  altText,
  // IGif
  ...props
}: GIFItemProps & IGif) => {
  const { id, user } = props;
  const { isFavorite, toggleFavorite } = useFavorites();

  const ratio = imageWidth / imageHeight;

  return (
    <div data-testid="gif-item" className={clsx(classes.container, "gif-container")}>
      <div className={clsx(classes.favBtnWrapper, "fav-btn-wrapper")}>
        <ActionIcon
          data-testid="favorite-button"
          variant="default"
          size="lg"
          onClick={() => toggleFavorite(props)}
          w={50}
          radius="md"
          className={clsx(classes.favBtn, "gif-fav-button", { favorited: isFavorite(id) })}
        >
          <IconHeartFilled />
        </ActionIcon>
      </div>

      <AspectRatio ratio={ratio}>
        <Image className="gif-image" src={imageUrl} alt={props.alt_text} />
      </AspectRatio>
      {user && (
        <Anchor
          component={Link}
          className={clsx(classes.userWrapper, "user-wrapper")}
          td="none"
          href={`https://www.giphy.com/${user?.username}`}
          target="_blank"
        >
          <Group className={clsx(classes.user, "user")}>
            <Avatar src={user?.avatar_url} radius="xl" size="md" />
            <Text c="white" fw="bold" truncate maw="100%">
              {user?.display_name}
            </Text>
          </Group>
        </Anchor>
      )}
    </div>
  );
};

export default GIFItem;
