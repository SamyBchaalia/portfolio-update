import { useEffect, useState } from 'react';
import { Link, ArrowRight, Copy, QrCode, CornerDownRight } from 'lucide-react';
import {
  ApiResponseShorten,
  getShortenLinks,
  Shorten,
  shortenUrl,
} from '@/apis/shorten-url';
import { QRCodeDialog } from '@/layout/QRcodeDialog/qrcode-dialog';
import {
  getLinksFromLocalStorage,
  saveLinksToLocalStorage,
} from '@/storage/local-storage';
import toast, { Toaster } from 'react-hot-toast';
import { AxiosError } from 'axios';

const Home = () => {
  const [url, setUrl] = useState('');
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [selectedQrCode, setSelectedQrCode] = useState('');

  const handleQrCodeClick = (selectedQrCode: string) => {
    setSelectedQrCode(selectedQrCode);
    setQrDialogOpen(true);
  };
  const getInitialLinks = async () => {
    const linkIds = getLinksFromLocalStorage();
    console.log(linkIds);
    if (linkIds.length === 0) return;
    const links = await getShortenLinks(linkIds);
    console.log(links);
    if (links)
      setLinks(
        links.map((l) => {
          return {
            shortUrl: l.shortUrl,
            originalUrl: l.originalUrl,
            clicks: getClickString(l.clicks),
            iconLink: getIconLink(getDomainFromUrl(l.originalUrl)),
            qrCode: l.qrCode,
          };
        }),
      );
  };
  useEffect(() => {
    getInitialLinks();
  }, []);

  const getIconLink = (link: string) => {
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${link}`;
  };
  const [links, setLinks] = useState<Shorten[]>([]);
  const getClickString = (clicks: number) => {
    if (clicks > 1000) {
      return `${(clicks / 1000).toFixed(1)}K`;
    }
    return clicks + '';
  };
  const getDomainFromUrl = (url: string) => {
    const domain = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (domain != null && domain.length > 2 && typeof domain[2] === 'string') {
      return domain[2];
    }
    return url;
  };
  async function shorten() {
    try {
      const response: ApiResponseShorten = (await shortenUrl(
        url,
      )) as ApiResponseShorten;
      if (response) {
        console.log(response);
        setUrl('');
        toast.success('Link shortened successfully');
        setLinks([
          {
            shortUrl: response.shortUrl,
            originalUrl: response.originalUrl,
            clicks: getClickString(response.clicks),
            iconLink: getIconLink(getDomainFromUrl(url)),
            qrCode: response.qrCode,
          },
          ...links,
        ]);
        saveLinksToLocalStorage(response._id);
      }
    } catch (e: Error | AxiosError | any) {
      console.error(e?.response?.data.message);
      if (e?.response?.data.message) {
        e?.response?.data.message.forEach((message: string) => {
          toast.error(message);
        });
      }
    }
  }
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="mt-5 text-center font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in [animation-delay:100ms] dark:text-white mb-4">
          Short links with
        </h1>
        <h1 className="mt-5 text-center font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15] animate-slide-up-fade [--offset:20px] [animation-duration:1s] [animation-fill-mode:both] motion-reduce:animate-fade-in [animation-delay:100ms] dark:text-white mb-6">
          superpowers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Arcube-shorten is the open-source link management platform for modern
          marketing teams made by sami ben chaalia as a Thechnical test.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://sami.benchaalia.com"
            target="_blank"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            About me
          </a>
          <a
            href="www.github.com/samibenchaalia"
            target="_blank"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Source Code
          </a>
        </div>

        <div className="flex justify-center mb-4">
          <Link className="w-5 h-5 text-gray-400" />
          <span className="text-gray-500 dark:text-gray-400 ml-2">
            Try it out
          </span>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Shorten any link..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                shorten();
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {links.map((link, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 relative flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 max-w-full shadow-none drop-shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex min-w-0 items-center gap-x-3">
                    <div className="flex-none rounded-full border border-gray-200 bg-gradient-to-t from-gray-100 p-2">
                      <img
                        src={link.iconLink}
                        alt={getDomainFromUrl(link.originalUrl) + ' icon'}
                        height={20}
                        width={20}
                        loading="lazy"
                        className="blur-0 rounded-full size-6 sm:size-6"
                        style={{ color: 'transparent' }}
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <a
                          href={link.shortUrl}
                          target="_blank"
                          className="truncate font-semibold text-gray-800 hover:text-black  dark:text-white"
                          rel="noreferrer"
                        >
                          {link.shortUrl}
                        </a>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                            onClick={() => {
                              navigator.clipboard.writeText(link.shortUrl);
                            }}
                          >
                            <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                            onClick={() => handleQrCodeClick(link.qrCode)}
                          >
                            <QrCode className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <CornerDownRight className="text-gray-400 w-4 h-4" />
                        <a
                          href={link.originalUrl}
                          className="max-w-60 truncate text-sm text-gray-400 underline-offset-4 transition-all hover:text-gray-700 hover:underline sm:max-w-72"
                        >
                          {link.originalUrl}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <div className="w-4 h-4" />
                    <span>{link.clicks} clicks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <QRCodeDialog
        isOpen={qrDialogOpen}
        onClose={() => setQrDialogOpen(false)}
        url={selectedQrCode}
      />
      <Toaster />
    </main>
  );
};

export default Home;
