'use client';
import { useState } from 'react';

export default function ImageWithFallback({ srcs = [], alt = '', className = '' }) {
  const [idx, setIdx] = useState(0);
  const src = srcs[idx] || '';
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setIdx((i) => (i + 1 < srcs.length ? i + 1 : i))}
      loading="eager"
    />
  );
}
