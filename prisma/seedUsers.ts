import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seedUsers() {
  console.log("🔄 Checking existing Users in the database...");

  const existingUsers = await prisma.user.findMany({
    select: { email: true },
  });

  const existingEmails = new Set(existingUsers.map(user => user.email));

  // Danh sách user cần seed
  const usersData = [
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123", // Mật khẩu sẽ được hash
      role: "admin",
    },
    {
      name: "Test User",
      email: "user@example.com",
      password: "password123",
      role: "user",
    }
  ];

  // Lọc ra các user chưa có trong database
  const newUsers = usersData.filter(user => !existingEmails.has(user.email));

  if (newUsers.length === 0) {
    console.log("✅ No new users to insert.");
    return;
  }

  for (const user of newUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });

    console.log(`✅ Inserted User: ${user.email}`);
  }
}

seedUsers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
