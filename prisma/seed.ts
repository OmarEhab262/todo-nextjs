import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }, () => ({
  //     email: faker.internet.email(),
  //     name: faker.internet.userName(),
  //     address: {
  //       street: faker.location.street(),
  //       city: faker.location.city(),
  //       state: faker.location.state(),
  //       zip: faker.location.zipCode(),
  //     },
  //   })),
  // });
  await prisma.todo.createMany({
    data: Array.from({ length: 3 }, () => ({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      //   completed: faker.datatype.boolean(),
      //   cratedAt: faker.date.recent(),
    })),
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
