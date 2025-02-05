import axiosClient from './axios-client';
export interface ApiResponseShorten {
  shortUrl: string;
  originalUrl: string;
  clicks: number;
  iconLink: string;
  qrCode: string;
  _id: string;
}
export interface Shorten {
  shortUrl: string;
  originalUrl: string;
  clicks: string;
  iconLink: string;
  qrCode: string;
}

export async function shortenUrl(
  url: string,
): Promise<ApiResponseShorten | void> {
  return await axiosClient.post('/shorten', { originalUrl: url });
}
export async function getShortenLinks(
  ids: string[],
): Promise<ApiResponseShorten[] | void> {
  try {
    return await axiosClient.post('/shorten/ids', { ids });
  } catch (error) {
    console.error('Error while getting shorten links', error);
  }
}
