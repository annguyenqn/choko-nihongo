import { PrismaClient } from '@prisma/client';
import { kanjiItems36 } from '../src/data/kanjiItems';
const prisma = new PrismaClient();

const kanjiItems = kanjiItems36.map(item => ({...item, lesson:36}));
async function main() {
    await prisma.kanjiLesson.createMany({
      data: kanjiItems,
      skipDuplicates: true,
    });
  
    console.log("Seed data successfully inserted2!");
  }
  
  main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });