import { prisma } from "../../src/lib/prisma";

const TEST_EMAIL = "e2e@e2e.com";
interface Args {
  sessionToken: string;
}
export async function seedDB({ sessionToken }: Args) {
  const date = new Date();
  const user = await prisma.user.upsert({
    where: {
      email: TEST_EMAIL,
    },
    create: {
      email: TEST_EMAIL,
      sessions: {
        create: {
          expires: new Date(date.getFullYear(), date.getMonth() + 1, 0),
          sessionToken,
        },
      },
    },
    update: {},
  });

  return user;
}
