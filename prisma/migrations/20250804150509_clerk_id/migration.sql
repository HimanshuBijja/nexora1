/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Snippet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_id_key" ON "Snippet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
