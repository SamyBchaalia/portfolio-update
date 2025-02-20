import { ShortenUrlDto, ApiResponseShorten, Message } from './types';
import axiosClient from '@/apis/axios-client';

const baseUrl = 'shorten';

export const ShortenApi: {
  [key: string]:
    | ((body: ShortenUrlDto) => Promise<ApiResponseShorten>)
    | ((links: string[]) => Promise<ApiResponseShorten[]>)
    | ((messages: Message[]) => Promise<Message>);
} = {
  shortenUrl: (body: ShortenUrlDto): Promise<ApiResponseShorten> =>
    axiosClient.post(baseUrl, body),
  getShortenLinks: (links: string[]): Promise<ApiResponseShorten[]> =>
    axiosClient.post(`${baseUrl}/ids`, { ids: links }),
};
export const sendMessage = (messages: Message[]): Promise<string[]> => {
  return axiosClient.post(`${baseUrl}/bot`, { messages });
};
