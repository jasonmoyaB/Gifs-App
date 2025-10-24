import React, { useState } from "react";
import { getGifByQuery } from "../components/actions/get-gifs-by-query.action";
import type { Gif } from "../components/gif.interface";

const giffsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    if (giffsCache[term]) {
      setGifs(giffsCache[term]);
      return;
    }

    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifByQuery(query);
    setGifs(gifs);

    giffsCache[query] = gifs;
  };
  return {
    //props
    gifs,
    //methods
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
