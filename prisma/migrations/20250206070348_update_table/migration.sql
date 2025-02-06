/*
  Warnings:

  - You are about to drop the `KanjiLesson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "KanjiLesson";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vocab" (
    "id" SERIAL NOT NULL,
    "vocab" TEXT NOT NULL,
    "hiragana" TEXT NOT NULL,
    "meaning_vi" TEXT,
    "meaning_en" TEXT,
    "lesson" INTEGER,
    "level" TEXT,
    "word_type" TEXT,

    CONSTRAINT "Vocab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "sentence" TEXT NOT NULL,
    "reading" TEXT NOT NULL,
    "meaning_vi" TEXT,
    "meaning_en" TEXT,
    "vocabId" INTEGER,
    "kanjiId" INTEGER,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kanji" (
    "id" SERIAL NOT NULL,
    "kanji" TEXT NOT NULL,
    "kun_reading" TEXT[],
    "on_reading" TEXT[],
    "han_viet" TEXT,
    "meaning_vi" TEXT,
    "meaning_en" TEXT,
    "radicals" TEXT,
    "strokes" INTEGER,
    "level" TEXT,

    CONSTRAINT "Kanji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProgress" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "vocab_id" INTEGER,
    "kanji_id" INTEGER,
    "review_date" TIMESTAMP(3) NOT NULL,
    "last_review_date" TIMESTAMP(3) NOT NULL,
    "ease_factor" DOUBLE PRECISION NOT NULL,
    "interval" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "memory_score" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'new',

    CONSTRAINT "UserProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizGame" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "vocab_id" INTEGER,
    "kanji_id" INTEGER,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "correct_answer" TEXT NOT NULL,
    "options" TEXT[],
    "user_answer" TEXT,
    "is_correct" BOOLEAN,
    "score" INTEGER DEFAULT 0,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningHistory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "vocab_id" INTEGER,
    "kanji_id" INTEGER,
    "review_date" TIMESTAMP(3) NOT NULL,
    "result" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LearningHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_vocabId_fkey" FOREIGN KEY ("vocabId") REFERENCES "Vocab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "Kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_vocab_id_fkey" FOREIGN KEY ("vocab_id") REFERENCES "Vocab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_kanji_id_fkey" FOREIGN KEY ("kanji_id") REFERENCES "Kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizGame" ADD CONSTRAINT "QuizGame_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizGame" ADD CONSTRAINT "QuizGame_vocab_id_fkey" FOREIGN KEY ("vocab_id") REFERENCES "Vocab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizGame" ADD CONSTRAINT "QuizGame_kanji_id_fkey" FOREIGN KEY ("kanji_id") REFERENCES "Kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningHistory" ADD CONSTRAINT "LearningHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningHistory" ADD CONSTRAINT "LearningHistory_vocab_id_fkey" FOREIGN KEY ("vocab_id") REFERENCES "Vocab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningHistory" ADD CONSTRAINT "LearningHistory_kanji_id_fkey" FOREIGN KEY ("kanji_id") REFERENCES "Kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;
