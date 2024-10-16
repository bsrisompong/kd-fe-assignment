"use client";

import React, { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { CloseButton, Input, InputProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { useQueryParams } from "@/hooks";

import classes from "./Searchbar.module.css";

const Searchbar = (props: InputProps) => {
  const { setQueryParams, getQueryParams } = useQueryParams();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [debouncedSearchTerm] = useDebouncedValue(searchTerm, 300);

  useEffect(() => {
    const query = getQueryParams();
    if (query.search) {
      setSearchTerm(query.search as string);
    } else {
      setSearchTerm("");
    }
  }, []);

  useEffect(() => {
    setQueryParams({ search: debouncedSearchTerm || undefined });
  }, [debouncedSearchTerm, setQueryParams]);

  return (
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search gifs"
      classNames={classes}
      size="lg"
      leftSection={<IconSearch />}
      rightSectionPointerEvents="all"
      rightSection={
        <CloseButton
          size="lg"
          variant="transparent"
          aria-label="Clear search"
          onClick={() => setSearchTerm("")}
          className={searchTerm ? "visible" : "invisible"}
        />
      }
      {...props}
    />
  );
};

export default Searchbar;
