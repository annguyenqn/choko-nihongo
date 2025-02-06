/*
  Warnings:

  - A unique constraint covering the columns `[user_id,vocab_id]` on the table `UserProgress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserProgress_user_id_vocab_id_key" ON "UserProgress"("user_id", "vocab_id");
