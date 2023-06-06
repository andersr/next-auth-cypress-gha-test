import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";

const {
  EMAIL_FROM,
  NEXTAUTH_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PWD,
} = process.env;

export const authOptions = {
  secret: NEXTAUTH_SECRET || "abc123",
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        auth: {
          user: SMTP_USER,
          pass: SMTP_PWD,
        },
      },
      from: EMAIL_FROM,
    }),
  ],
};
export default NextAuth(authOptions);
