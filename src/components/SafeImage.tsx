import React, { useState, useEffect } from "react";

interface SafeImageProps {
  src: any;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  [key: string]: any;
}

export default function SafeImage({ src, fallbackSrc, alt, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  // Keep state in sync with prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed && fallbackSrc) {
      setHasFailed(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
