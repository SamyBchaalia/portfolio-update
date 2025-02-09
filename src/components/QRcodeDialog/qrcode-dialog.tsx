import { useState } from 'react';

import { X, Download, Copy, HelpCircle } from 'lucide-react';

interface QRCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export function QRCodeDialog({ isOpen, onClose, url }: QRCodeDialogProps) {
  const [qrColor, setQrColor] = useState('#000000');

  if (!isOpen) return null;

  const colors = [
    '#000000',
    '#ef4444',
    '#f97316',
    '#ec4899',
    '#eab308',
    '#22c55e',
    '#3b82f6',
    '#a855f7',
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK0SURBVO3BQW7sWAwEwSxC979yjpdcPUCQusfmZ0T8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUuiScqDyRhG9SeaJYoxRrlGKNcvEylTcl4YkknKjcofKmJLypWKMUa5RijXLxYUm4Q+UOlZMkfFIS7lD5pGKNUqxRijXKxR+XhBOVf0mxRinWKMUa5eKPUzlJwonKJMUapVijFGuUiw9T+aYkdCpdErokdCp3qPwmxRqlWKMUa5SLlyXhm5LQqXRJ6FS6JNyRhN+sWKMUa5RijRJ/8Icl4U0qf1mxRinWKMUa5eKhJHQqXRJOVLok3KHSJaFT6ZJwRxI6lZMkdCpdEk5UnijWKMUapVijxB88kIQnVLokdCpdEn4zlS4JnconFWuUYo1SrFHiD16UhBOVLglPqHRJ6FS6JHQqXRJOVE6S8ITKE8UapVijFGuUi4eS0Kl0SeiS0Kl0SehUuiScqHRJeEKlS8IdKidJeFOxRinWKMUaJf7ggSR0KidJ6FROktCpvCkJd6icJOEOlTcVa5RijVKsUeIP/rAkdCpdEk5UuiS8SaVLQqfypmKNUqxRijXKxUNJ+CaVO1S6JHRJ6FTuSMJJEr6pWKMUa5RijXLxMpU3JeFNKk8koVPpkvB/KtYoxRqlWKNcfFgS7lC5Q+UkCZ1Kl4ROpUvCEyrfVKxRijVKsUa5+OOS0Kl0Kl0SOpU7VJ5IQqfypmKNUqxRijXKxT9GpUtCp/KmJHQqn1SsUYo1SrFGufgwlU9S6ZJwotKpdEnoVE6S0KnckYRO5YlijVKsUYo1ysXLkvBNSfhNknCi0qm8qVijFGuUYo0Sf7DGKNYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1yn83+An1zIxJoAAAAABJRU5ErkJggg==';
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    void navigator.clipboard.writeText(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-lg rounded-lg bg-white dark:bg-gray-800">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              QR Code Design
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    QR Code Preview
                  </span>
                  <HelpCircle className="size-4 text-gray-400" />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleDownload}
                    className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Download className="size-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={handleCopy}
                    className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Copy className="size-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <div className="flex size-48 items-center justify-center rounded-lg bg-white p-2 dark:bg-gray-800">
                  <img
                    src={url}
                    alt="QR Code"
                    className="size-full object-contain"
                    style={{
                      filter:
                        qrColor !== '#000000'
                          ? `opacity(0.9) drop-shadow(0 0 0 ${qrColor})`
                          : 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                QR Code Color
              </span>
              <div className="mt-2 flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    className="w-24 rounded-md border border-gray-300 px-2 py-1 pl-8 text-sm dark:border-gray-600"
                  />
                  <div
                    className="absolute left-2 top-1/2 size-4 -translate-y-1/2 rounded-full"
                    style={{ backgroundColor: qrColor }}
                  />
                </div>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setQrColor(color)}
                    className={`size-8 rounded-full transition-transform hover:scale-110 ${
                      qrColor === color
                        ? 'ring-2 ring-blue-500 ring-offset-2'
                        : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
