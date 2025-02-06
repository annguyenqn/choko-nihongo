import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const kanjiList = await prisma.kanji.findMany({
      where: { level: "N5" }, 
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

    return NextResponse.json(kanjiList);
  } catch (error) {
    console.error("❌ Error fetching N5 Kanji:", error);
    return NextResponse.json({ error: 'Failed to fetch N5 Kanji' }, { status: 500 });
  }
}
