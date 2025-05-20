const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export type ImageType = {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
  };
};

type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: ImageType[];
};

export async function fetchImages(
  query: string,
  page = 1,
  perPage = 12
): Promise<UnsplashResponse> {
  const url = `${BASE_URL}?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch images from Unsplash");
  }

  return response.json();
}
