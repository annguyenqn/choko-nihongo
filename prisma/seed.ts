import { PrismaClient } from '@prisma/client';
import { kanjiItems } from '../src/data/kanjiItems'; // Giả sử bạn đã có dữ liệu kanjiItems
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Lấy danh sách `lesson` và `kanji` đã có trong database
  const existingKanji = await prisma.kanjiLesson.findMany({
    select: {
      lesson: true,
      kanji: true,
    },
  });

  // 2️⃣ Lọc ra những bản ghi chưa có
  const newKanjiItems = kanjiItems.filter(
    (item) =>
      !existingKanji.some(
        (existing) => existing.lesson === item.lesson && existing.kanji === item.kanji
      )
  );

  // 3️⃣ Chuyển đổi dữ liệu để phù hợp với schema mới
  const formattedKanjiItems = newKanjiItems.map(item => ({
    ...item,
    mean: JSON.stringify({
      vi: item.mean.vi,
      en: item.mean.en,
    }),  // Chuyển đổi thành chuỗi JSON cho trường mean
    examples: item.examples.map(example => ({
      sentence: example.sentence,
      reading: example.reading,
      meaning: JSON.stringify({
        vi: example.meaning.vi,
        en: example.meaning.en,
      }),  // Chuyển đổi thành chuỗi JSON cho trường meaning trong examples
    })),
    kanji_parts: item.kanji_parts.map(part => ({
      kanji: part.kanji,
      han_viet: part.han_viet,
      meaning: JSON.stringify({
        vi: part.meaning.vi,
        en: part.meaning.en,
      }),  // Chuyển đổi thành chuỗi JSON cho trường meaning trong kanji_parts
    })),
  }));

  // 4️⃣ Chỉ thêm vào database nếu có dữ liệu mới
  if (formattedKanjiItems.length > 0) {
    await prisma.kanjiLesson.createMany({
      data: formattedKanjiItems,
    });
    console.log(`✅ Seeded ${formattedKanjiItems.length} new kanji items.`);
  } else {
    console.log("⚠️ No new kanji items to seed.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
