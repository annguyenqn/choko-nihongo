import { PrismaClient } from '@prisma/client';
import { KanjiSeedData } from '../src/data/vocabsItems';
const prisma = new PrismaClient();
async function main() {
  console.log("🔄 Checking existing Kanji in the database...");

  // 1️⃣ Fetch existing Kanji records to avoid duplicates
  const existingKanji = await prisma.kanji.findMany({
    select: {
      kanji: true,
      id: true, // Fetch ID to link Examples later
    },
  });

  // Convert to a set for quick lookup
  const existingKanjiSet = new Map(existingKanji.map((k) => [k.kanji, k.id]));

  // 2️⃣ Filter out already existing Kanji
  const newKanjiItems = KanjiSeedData.filter(
    (item) => !existingKanjiSet.has(item.kanji)
  );

  console.log(`🔍 Found ${newKanjiItems.length} new Kanji to insert.`);

  // 3️⃣ Insert new Kanji records
  for (const kanjiItem of newKanjiItems) {
    const insertedKanji = await prisma.kanji.create({
      data: {
        kanji: kanjiItem.kanji,
        kun_reading: kanjiItem.kun_reading,
        on_reading: kanjiItem.on_reading,
        han_viet: kanjiItem.han_viet,
        meaning_vi: kanjiItem.meaning_vi,
        meaning_en: kanjiItem.meaning_en,
        radicals: kanjiItem.radicals,
        strokes: kanjiItem.strokes,
        level: kanjiItem.level,
      },
    });

    console.log(`✅ Inserted Kanji: ${kanjiItem.kanji}`);

    // Store the new ID for inserting examples
    existingKanjiSet.set(insertedKanji.kanji, insertedKanji.id);
  }

  // 4️⃣ Insert related Example records
  const exampleData = KanjiSeedData.flatMap((kanjiItem) =>
    kanjiItem.examples.map((example) => ({
      sentence: example.sentence,
      reading: example.reading,
      meaning_vi: example.meaning_vi,
      meaning_en: example.meaning_en,
      kanjiId: existingKanjiSet.get(kanjiItem.kanji), // Link to inserted Kanji
    }))
  );

  if (exampleData.length > 0) {
    await prisma.example.createMany({
      data: exampleData,
      skipDuplicates: true,
    });
    console.log(`✅ Inserted ${exampleData.length} Example records.`);
  } else {
    console.log("⚠️ No new Example records to insert.");
  }
}

// Execute the seed script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });