/*
  Warnings:

  - Made the column `icon` on table `AccordionItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AccordionItem" ALTER COLUMN "icon" SET NOT NULL;
