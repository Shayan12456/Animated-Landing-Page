import { motion } from 'framer-motion';

interface ScrollImageProps {
  src: string;
  direction?: 'left' | 'right';
  alt?: string;
}

export default function ScrollImage({ src, direction = 'left', alt = '' }: ScrollImageProps) {
  const offsetX = direction === 'left' ? -200 : -200;

  return (
    <div className="flex justify-center w-full">
      <motion.img
        src={src}
        alt={alt}
        className="w-4/5 max-w-[280px] md:max-w-sm rounded-xl shadow-xl object-contain"
        initial={{ opacity: 0, x: offsetX }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: offsetX }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
      />
    </div>
  );
}
