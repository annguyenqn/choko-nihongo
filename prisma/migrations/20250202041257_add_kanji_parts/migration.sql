/*
  Warnings:

  - Added the required column `kanji_parts` to the `KanjiLesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "KanjiLesson" ADD COLUMN     "kanji_parts" JSONB NOT NULL;
