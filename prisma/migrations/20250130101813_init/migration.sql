-- CreateTable
CREATE TABLE "KanjiLesson" (
    "id" SERIAL NOT NULL,
    "lesson" INTEGER NOT NULL,
    "kanji" TEXT NOT NULL,
    "hiragana" TEXT NOT NULL,
    "mean" TEXT NOT NULL,
    "on_yomi" TEXT NOT NULL,
    "examples" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KanjiLesson_pkey" PRIMARY KEY ("id")
);
