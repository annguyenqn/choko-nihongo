/*
  Warnings:

  - Changed the type of `mean` on the `KanjiLesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `examples` on the `KanjiLesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "KanjiLesson" DROP COLUMN "mean",
ADD COLUMN     "mean" JSONB NOT NULL,
DROP COLUMN "examples",
ADD COLUMN     "examples" JSONB NOT NULL;
