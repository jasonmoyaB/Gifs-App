import type { GiphyResponse } from "../../../interfaces/giphy.response";
import type { Gif } from "../gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(`/search`, {
    params: {
      q: query,
      limit: 10,
      //   lang: `es`,
      //   api_key: import.meta.env.VITE_GIPHY_API_KEY,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
