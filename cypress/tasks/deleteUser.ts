import { prisma } from "../../src/lib/prisma";

const email = "e2e@e2e.com";

export async function deleteUser() {
  return await prisma.user.delete({
    where: {
      email,
    },
  });
}
