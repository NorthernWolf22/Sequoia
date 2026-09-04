import { prisma } from "@/lib/prisma";
import { Carousel, CarouselItem } from "@/generated/prisma/client";

export async function getCarouselQuotes(slug: string) : Promise<(Carousel & { items: CarouselItem[] }) | null> {
  return prisma.carousel.findUnique({
    where: { slug },
    include: { items: true },
  });
}
