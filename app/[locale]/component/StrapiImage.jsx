import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

const StrapiImage = ({ src, alt, height, width, className }) => {
  if (!src) return null;

  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl }
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default StrapiImage;