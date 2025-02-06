import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateNextReview } from "@/utils/spacedRepetition";

// Interface cho dữ liệu nhận được
interface UserResponse {
  userId: number;
  vocabId: number;
  correct: "remembered" | "somewhat remembered" | "forgotten";
}

export async function POST(req: Request) {
  let responses: UserResponse[];
  try {
    responses = await req.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid input data format " }, { status: 400 });
  }

  // Kiểm tra tính hợp lệ của các tham số trong mảng
  const errors: string[] = [];
  for (const response of responses) {
    if (typeof response.userId !== 'number' || isNaN(response.userId)) {
      errors.push(`Invalid userId for vocabId ${response.vocabId}`);
    }
    if (typeof response.vocabId !== 'number' || isNaN(response.vocabId)) {
      errors.push(`Invalid vocabId for userId ${response.userId}`);
    }
    if (!["remembered", "somewhat remembered", "forgotten"].includes(response.correct)) {
      errors.push(`Invalid correct value for vocabId ${response.vocabId} and userId ${response.userId}`);
    }
  }

  if (errors.length > 0) {
    return NextResponse.json({ message: "Invalid data", errors }, { status: 400 });
  }

  // Tiến hành cập nhật UserProgress với kiểm tra lỗi
  for (const { userId, vocabId, correct } of responses) {
    try {
      const userProgress = await prisma.userProgress.findUnique({
        where: {
          user_id_vocab_id: { user_id: userId, vocab_id: vocabId },
        },
      });

      if (!userProgress) {
        // Nếu không tìm thấy tiến độ người dùng, bỏ qua
        continue;
      }

      const { interval, easeFactor, repetitions, memoryScore, reviewDate } = calculateNextReview(
        userProgress.interval,
        userProgress.ease_factor,
        userProgress.repetitions,
        correct
      );

      // Cập nhật UserProgress với các giá trị mới
      await prisma.userProgress.update({
        where: {
          user_id_vocab_id: { user_id: userId, vocab_id: vocabId },
        },
        data: {
          interval,
          ease_factor: easeFactor,
          repetitions,
          memory_score: memoryScore,
          review_date: new Date(reviewDate),
        },
      });
    } catch (error) {
      // Bắt lỗi trong quá trình xử lý mỗi phần tử
      errors.push(`Failed to update progress for userId: ${userId}, vocabId: ${vocabId}`);
    }
  }

  // Nếu có lỗi, trả về danh sách lỗi
  if (errors.length > 0) {
    return NextResponse.json({ message: "Some progress updates failed", errors }, { status: 500 });
  }

  return NextResponse.json({ message: "User progress updated successfully" });
}
