import { useEffect, useState } from 'react';
import { Link, ArrowRight, Copy, QrCode, MoreVertical } from 'lucide-react';
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
            iconLink: getIconLink('https://' + getDomainFromUrl(l.originalUrl)),
            qrCode: l.qrCode,
          };
        }),
      );
  };
  useEffect(() => {
    getInitialLinks();
  }, []);

  const getIconLink = (link: string) => {
    return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link}`;
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
    const response: ApiResponseShorten = (await shortenUrl(
      url,
    )) as ApiResponseShorten;
    if (response) {
      console.log(response);
      setUrl('');
      setLinks([
        {
          shortUrl: response.shortUrl,
          originalUrl: response.originalUrl,
          clicks: getClickString(response.clicks),
          iconLink: getIconLink('https://' + getDomainFromUrl(url)),
          qrCode: response.qrCode,
        },
        ...links,
      ]);
      saveLinksToLocalStorage(response._id);
    }
  }
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        {/* <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-1 mb-6">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Introducing Acrube Conversions
          </span>
          <div className="flex items-center text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="text-sm">Read more</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div> */}

        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Short links with
        </h1>
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
          superpowers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Arcube is the open-source link management platform for modern
          marketing teams made by sami ben chaalia as a side project.
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
                className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <img src={link.iconLink} />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {link.shortUrl}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {link.originalUrl.length > 50 ? (
                        <span>{link.originalUrl.substring(0, 50)}...</span>
                      ) : (
                        <span>{link.originalUrl}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <div className="w-4 h-4" />
                    <span>{link.clicks} clicks</span>
                  </div>
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
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <MoreVertical className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
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
    </main>
  );
};

export default Home;
