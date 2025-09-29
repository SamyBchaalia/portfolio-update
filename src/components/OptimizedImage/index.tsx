import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('/assets/placeholder.svg');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="size-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
}
