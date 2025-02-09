import { ShortenUrlDto, ApiResponseShorten } from './types';
import axiosClient from '@/apis/axios-client';

const baseUrl = 'shorten';

export const ShortenApi: {
  [key: string]:
    | ((body: ShortenUrlDto) => Promise<ApiResponseShorten>)
    | ((links: string[]) => Promise<ApiResponseShorten[]>);
} = {
  shortenUrl: (body: ShortenUrlDto): Promise<ApiResponseShorten> =>
    axiosClient.post(baseUrl, body),
  getShortenLinks: (links: string[]): Promise<ApiResponseShorten[]> =>
    axiosClient.post(`${baseUrl}/ids`, { ids: links }),
};
