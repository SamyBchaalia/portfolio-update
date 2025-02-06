export type ShortenUrlDto = {
  originalUrl: string;
};

export type ApiResponseShorten = {
  shortUrl: string;
  originalUrl: string;
  clicks: number;
  iconLink: string;
  qrCode: string;
  _id: string;
};
export type Shorten = {
  shortUrl: string;
  originalUrl: string;
  clicks: string;
  iconLink: string;
  qrCode: string;
};
