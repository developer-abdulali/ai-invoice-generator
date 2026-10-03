import { PrismaClient } from "@/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL or DIRECT_URL environment variable is not set.",
  );
}

const adapter = new PrismaNeon({ connectionString });

const prismaLogLevel =
  process.env.PRISMA_LOG_LEVEL === "true"
    ? (["query", "error"] as const)
    : (["error"] as const);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter, log: [...prismaLogLevel] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
