import { prisma } from "@/lib/prisma";

// Interface cho dữ liệu nhận được
export async function createNewVocabProgress(userId: number, vocabId: number) {
    const defaultEaseFactor = 2.5;
    const defaultInterval = 1; // 1 ngày
    const defaultRepetitions = 1;
    const defaultMemoryScore = 0;
  
    const reviewDate = Date.now() + defaultInterval * 24 * 60 * 60 * 1000; // Review lại sau 1 ngày
  
    await prisma.userProgress.create({
      data: {
        user_id: userId,
        vocab_id: vocabId,
        review_date: new Date(reviewDate),
        last_review_date: new Date(),
        interval: defaultInterval,
        ease_factor: defaultEaseFactor,
        repetitions: defaultRepetitions,
        memory_score: defaultMemoryScore,
        status: "new",
      },
    });
  }
  