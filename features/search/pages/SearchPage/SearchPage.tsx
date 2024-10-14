"use client";

import { Grid } from "@giphy/react-components";

import { gf } from "@/libs/giphy-fetch";

export default function HomePage() {
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

  return (
    <div className="mx-auto">
      Home
      <Grid width={800} columns={3} fetchGifs={fetchGifs} />
    </div>
  );
}
