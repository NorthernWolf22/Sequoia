/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Accordion" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Accordion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccordionItem" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "accordionId" INTEGER NOT NULL,

    CONSTRAINT "AccordionItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accordion_slug_key" ON "Accordion"("slug");

-- AddForeignKey
ALTER TABLE "AccordionItem" ADD CONSTRAINT "AccordionItem_accordionId_fkey" FOREIGN KEY ("accordionId") REFERENCES "Accordion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
