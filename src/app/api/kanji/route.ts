import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lessonParam = searchParams.get('lesson');
    
    // Kiểm tra nếu lesson không tồn tại hoặc không phải số
    if (!lessonParam || isNaN(Number(lessonParam))) {
      return NextResponse.json({ error: 'Missing or invalid lesson parameter' }, { status: 400 });
    }

    const lesson = Number(lessonParam);

    const kanjiItem = await prisma.kanjiLesson.findMany({
      where: { lesson },
      select: {
        id: true,
        lesson: true,
        kanji: true,
        hiragana: true,
        mean: true,
        on_yomi: true,
        examples: true,
        kanji_parts: true,
      },
    });

    return NextResponse.json(kanjiItem);
  } catch (error) {
    console.error("Error fetching kanji:", error);
    return NextResponse.json({ error: 'Failed to fetch kanji' }, { status: 500 });
  }
}
