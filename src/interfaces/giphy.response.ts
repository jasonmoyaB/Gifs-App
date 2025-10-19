export interface GiphyResponse {
  data: GiphyGif[];
  meta: Meta;
  pagination: Pagination;
}

export interface GiphyGif {
  type: "gif" | string; // normalmente "gif"
  id: string;
  url: string;
  slug: string;
  bitly_gif_url?: string;
  bitly_url?: string;
  embed_url: string;
  username?: string; // libre
  source?: string;
  title: string;
  rating?: GiphyRating;
  content_url?: string; // suele venir ""
  source_tld?: string;
  source_post_url?: string;
  is_sticker?: number;
  import_datetime: string; // <-- string, no Date
  trending_datetime: string; // a veces "0000-00-00 00:00:00"
  images: Images;
  analytics_response_payload?: string;
  analytics?: Analytics;
  alt_text?: string;
  user?: User;
}

export type GiphyRating = "y" | "g" | "pg" | "pg-13" | "r";

export interface Analytics {
  onload?: AnalyticsLink;
  onclick?: AnalyticsLink;
  onsent?: AnalyticsLink;
}

export interface AnalyticsLink {
  url: string;
}

export interface Images {
  original: FixedVariant;
  downsized?: StillVariant;
  downsized_large?: StillVariant;
  downsized_medium?: StillVariant;
  downsized_small?: MP4Variant;
  downsized_still?: StillVariant;
  fixed_height?: FixedVariant;
  fixed_height_downsampled?: FixedVariant;
  fixed_height_small?: FixedVariant;
  fixed_height_small_still?: StillVariant;
  fixed_height_still?: StillVariant;
  fixed_width?: FixedVariant;
  fixed_width_downsampled?: FixedVariant;
  fixed_width_small?: FixedVariant;
  fixed_width_small_still?: StillVariant;
  fixed_width_still?: StillVariant;
  looping?: Looping;
  original_still?: StillVariant;
  original_mp4?: MP4Variant;
  preview?: MP4Variant;
  preview_gif?: StillVariant;
  preview_webp?: StillVariant;
  "480w_still"?: StillVariant; // clave literal, keep quoted
  hd?: MP4Variant;
}

export interface StillVariant {
  height: string;
  width: string;
  size?: string;
  url: string;
}

export interface MP4Variant {
  height: string;
  width: string;
  mp4_size?: string;
  mp4: string;
}

export interface FixedVariant {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
}

export interface Looping {
  mp4_size?: string;
  mp4: string;
}

export interface User {
  avatar_url?: string;
  banner_image?: string;
  banner_url?: string;
  profile_url?: string;
  username: string;
  display_name?: string;
  description?: string;
  instagram_url?: string;
  website_url?: string;
  is_verified?: boolean;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
