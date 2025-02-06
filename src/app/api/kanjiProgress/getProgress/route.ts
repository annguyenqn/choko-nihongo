import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const { userId, level } = await req.json();  // Thêm param level
  
    // Lấy tất cả tiến độ học của người dùng
    const allProgress = await prisma.userProgress.findMany({
      where: {
        user_id: userId,
      },
      include: {
        vocab: true,  // Bao gồm từ vựng để lấy level của từ
      }
    });
  
    // Nếu có param `level`, lọc theo level trước
    let reviewWords = allProgress;
  
    if (level) {
      reviewWords = reviewWords.filter((progress) => progress.vocab?.level === level);  // Lọc theo level
    }
  
    // Lọc ra các từ cần ôn lại, tức là các từ có `interval` nhỏ hoặc `memory_score` thấp
    reviewWords = reviewWords.filter((progress) => {
      return progress.interval <= 7 && progress.memory_score < 2;  // Điều chỉnh interval và memory_score tùy nhu cầu
    });
  
    if (reviewWords.length === 0) {
      return NextResponse.json({ message: "No words to review" }, { status: 404 });
    }
  
    // Randomize các từ cần ôn lại
    const wordsToReview = reviewWords.sort(() => Math.random() - 0.5).slice(0, 10); // Lấy 10 từ ngẫu nhiên
  
    return NextResponse.json(wordsToReview);
  }
  