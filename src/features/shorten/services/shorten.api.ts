import { ShortenUrlDto, ApiResponseShorten } from './types';
import axiosClient from '@/apis/axios-client';

const baseUrl = 'shorten';

const ShortenApi = {
  shortenUrl: (body: ShortenUrlDto): Promise<ApiResponseShorten> =>
    axiosClient.post(baseUrl, body),
  getShortenLinks: (links: string[]): Promise<ApiResponseShorten[]> =>
    axiosClient.post(`${baseUrl}/ids`, { ids: links }),
};

export default ShortenApi;
