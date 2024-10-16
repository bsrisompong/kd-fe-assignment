import React from "react";
import { Box, BoxProps, Center, CenterProps, Stack, StackProps, Text } from "@mantine/core";
import { IconBoxOff, IconPhotoOff, IconSearchOff } from "@tabler/icons-react";

const NotFound = (props: StackProps) => {
  return (
    <Stack justify="center" align="center" gap="xs" py={80} {...props}>
      <IconPhotoOff size={80} color="var(--mantine-color-gray-5)" />
      <Text fw={700} c="gray.5">
        Not Found
      </Text>
    </Stack>
  );
};

export default NotFound;
