import { ReactNode } from 'react';
import clsx from 'clsx';

type HeroBannerProps = {
  image: string;
  children: ReactNode;
  className?: string;
  align?: 'center' | 'bottom';
};

const HeroBanner = ({
  image,
  children,
  className,
  align = 'center',
}: HeroBannerProps) => {
  return (
    <div
      className={clsx(
        'relative left-1/2 -ml-[50vw] w-screen bg-fixed bg-cover bg-center',
        className,
      )}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Capa oscura para que el texto se lea */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20' />

      {/* Contenido */}
      <div
        className={clsx(
          'relative flex h-full flex-col items-center p-6 text-center text-white',
          align === 'center' ? 'justify-center' : 'justify-end',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroBanner;
