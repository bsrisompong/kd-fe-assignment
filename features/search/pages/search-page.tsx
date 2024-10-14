"use client";

import { useState } from "react";
import { useGetTrendingGifts } from "../apis";

export default function HomePage() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data: trendingGifs = [] } = useGetTrendingGifts({
    limit,
    offset,
  });

  return <div className="mx-auto"></div>;
}
