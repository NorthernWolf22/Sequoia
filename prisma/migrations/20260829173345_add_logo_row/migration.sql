-- CreateTable
CREATE TABLE "LogoRow" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "reverse" BOOLEAN NOT NULL,

    CONSTRAINT "LogoRow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logo" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "logoRowId" INTEGER NOT NULL,

    CONSTRAINT "Logo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LogoRow_slug_key" ON "LogoRow"("slug");

-- AddForeignKey
ALTER TABLE "Logo" ADD CONSTRAINT "Logo_logoRowId_fkey" FOREIGN KEY ("logoRowId") REFERENCES "LogoRow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
