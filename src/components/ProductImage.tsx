import Image from "next/image";

type ProductImageProps = { file: string; alt: string; className?: string; priority?: boolean };

/** Original, lossless captures: framing and any cropping are exclusively CSS. */
export function ProductImage({ file, alt, className = "", priority = false }: ProductImageProps) {
  return <div className={`product-image ${className}`}><Image src={`/screenshots/${file}`} alt={alt} width={942} height={2048} sizes="(max-width: 700px) 85vw, 380px" unoptimized preload={priority} /></div>;
}
