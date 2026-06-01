import Image from 'next/image';

interface BlogHeroImageProps {
  src: string;
  alt: string;
  credit?: string;
}

export function BlogHeroImage({ src, alt, credit }: BlogHeroImageProps) {
  return (
    <figure className="mb-10">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
          priority
        />
      </div>
      {credit && (
        <figcaption className="mt-2 text-center text-sm font-body text-near-black opacity-50">
          Photo: {credit}
        </figcaption>
      )}
    </figure>
  );
}
