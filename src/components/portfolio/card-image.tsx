import Image from "next/image";
import { portfolioImages, type PortfolioImageName } from "@/lib/portfolio-images";
import { cn } from "@/lib/utils";

export function CardImage({ name, alt = "", className, sizes = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw", imageClassName }: {
  name: PortfolioImageName;
  alt?: string;
  className?: string;
  sizes?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative aspect-[16/10] shrink-0 overflow-hidden rounded-xl bg-sand", className)}>
      <Image src={portfolioImages[name]} alt={alt} fill placeholder="blur" sizes={sizes}
        className={cn("object-cover transition-transform duration-700 motion-safe:group-hover:scale-105", imageClassName)} />
    </div>
  );
}
