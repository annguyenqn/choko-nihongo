import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lessonParam = searchParams.get('lesson');

    // Validate lesson parameter
    if (!lessonParam || isNaN(Number(lessonParam))) {
      return NextResponse.json(
        { error: 'Missing or invalid lesson parameter' },
        { status: 400 }
      );
    }

    const lesson = Number(lessonParam);

    // Fetch Kanji data for the given lesson
    const kanjiList = await prisma.kanji.findMany({
      where: { level: `N${lesson}` }, // Assuming lessons follow N5, N4, etc.
      select: {
        id: true,
        kanji: true,
        kun_reading: true,
        on_reading: true,
        han_viet: true,
        meaning_vi: true,
        meaning_en: true,
        radicals: true,
        strokes: true,
        examples: {
          select: {
            sentence: true,
            reading: true,
            meaning_vi: true,
            meaning_en: true,
          },
        },
      },
    });

    if (kanjiList.length === 0) {
      return NextResponse.json(
        { message: `No Kanji found for lesson N${lesson}` },
        { status: 404 }
      );
    }

    return NextResponse.json(kanjiList);
  } catch (error) {
    console.error("❌ Error fetching Kanji:", error);
    return NextResponse.json({ error: 'Failed to fetch Kanji' }, { status: 500 });
  }
}
