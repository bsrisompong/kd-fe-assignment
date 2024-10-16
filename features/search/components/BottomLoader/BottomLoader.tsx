import { Loader, LoaderProps } from "@mantine/core";
import React from "react";
import clsx from "clsx";

import classes from "./BottomLoader.module.css";

interface BottomLoaderProps {
  visible?: boolean;
}

const BottomLoader = ({ visible, ...props }: BottomLoaderProps & LoaderProps) => {
  if (!visible) return null;
  return (
    <div className={clsx(classes.container)}>
      <Loader color="black" size="lg" type="oval" {...props} />
    </div>
  );
};

export default BottomLoader;
