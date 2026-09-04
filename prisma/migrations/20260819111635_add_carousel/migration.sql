-- CreateTable
CREATE TABLE "Carousel" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Carousel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarouselItem" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL,
    "carouselId" INTEGER NOT NULL,

    CONSTRAINT "CarouselItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carousel_slug_key" ON "Carousel"("slug");

-- AddForeignKey
ALTER TABLE "CarouselItem" ADD CONSTRAINT "CarouselItem_carouselId_fkey" FOREIGN KEY ("carouselId") REFERENCES "Carousel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
