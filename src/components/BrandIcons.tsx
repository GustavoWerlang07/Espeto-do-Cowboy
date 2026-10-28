import React from 'react';

export function IfoodIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <img
      src="/assets/logo_ifood.png"
      alt="iFood Oficial"
      className={`${className} object-contain`}
      loading="eager"
    />
  );
}

export function KitaIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <img
      src="/assets/logo_keeta.png"
      alt="Keeta / Kita Oficial"
      className={`${className} object-contain rounded-md`}
      loading="eager"
    />
  );
}

export function WhatsappIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 20C33.43 20 20 33.43 20 50C20 55.77 21.64 61.16 24.47 65.73L21.5 76.5L32.72 73.61C37.07 76.19 43.32 78 50 78C66.57 78 80 64.57 80 50C80 33.43 66.57 20 50 20ZM41.44 35.12C40.85 33.8 40.23 33.77 39.67 33.75C39.2 33.73 38.68 33.73 38.15 33.73C37.63 33.73 36.78 33.93 36.06 34.72C35.34 35.5 33.3 37.47 33.3 41.47C33.3 45.47 36.21 49.34 36.62 49.88C37.03 50.43 42.27 58.74 50.41 61.94C57.17 64.6 58.55 64.06 60.03 63.92C61.51 63.79 64.79 61.98 65.46 60.08C66.13 58.17 66.13 56.54 65.93 56.2C65.73 55.86 65.21 55.66 64.42 55.26C63.63 54.87 59.76 52.96 59.04 52.7C58.32 52.44 57.8 52.31 57.27 53.1C56.75 53.88 55.24 55.66 54.78 56.2C54.32 56.73 53.86 56.79 53.07 56.4C52.28 56 49.74 55.17 46.73 52.48C44.38 50.39 42.79 47.81 42.33 47.02C41.87 46.24 42.28 45.81 42.68 45.42C43.03 45.07 43.47 44.5 43.86 44.04C44.26 43.58 44.39 43.25 44.65 42.73C44.91 42.2 44.78 41.74 44.58 41.35C44.39 40.95 42.12 35.63 41.44 35.12Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GoogleIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export function RusticDivider() {
  return (
    <div className="flex items-center justify-center gap-3 w-full my-4 opacity-75">
      <div className="h-[1px] flex-1 max-w-[90px] bg-gradient-to-r from-transparent via-[#c8963e]/40 to-[#c8963e]/70" />
      <div className="flex items-center gap-1.5 text-[#c8963e]">
        <span className="text-[10px] transform rotate-45">✦</span>
        <span className="text-xs">★</span>
        <span className="text-[10px] transform rotate-45">✦</span>
      </div>
      <div className="h-[1px] flex-1 max-w-[90px] bg-gradient-to-l from-transparent via-[#c8963e]/40 to-[#c8963e]/70" />
    </div>
  );
}
