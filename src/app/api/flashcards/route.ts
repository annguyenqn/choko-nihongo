import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateNextReview } from "@/utils/spacedRepetition";

export async function POST(req: Request) {
  const { userId, vocabId, correct } = await req.json();

  // Lấy thông tin UserProgress của từ vựng
  const userProgress = await prisma.userProgress.findFirst({
    where: {
      user_id: userId,
      vocab_id: vocabId,  // Sử dụng cặp khóa user_id và vocab_id
    },
  });

  if (!userProgress) {
    return NextResponse.json({ message: "User progress not found" }, { status: 404 });
  }

  // Tính toán lại các giá trị spaced repetition
  const { interval, easeFactor, repetitions, memoryScore, reviewDate } = calculateNextReview(
    userProgress.interval,
    userProgress.ease_factor,
    userProgress.repetitions,
    correct
  );

  // Cập nhật UserProgress với các giá trị mới
  await prisma.userProgress.update({
    where: {
      user_id_vocab_id: { 
        user_id: userId,
        vocab_id: vocabId 
      },
    },
    data: {
      interval,
      ease_factor: easeFactor,
      repetitions,
      memory_score: memoryScore,
      review_date: new Date(reviewDate),
    },
  });

  return NextResponse.json({ message: "User progress updated successfully" });
}
