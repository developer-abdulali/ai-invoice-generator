// import "dotenv/config";
// import { definePrismaConfig } from "prisma/config";

// const prismaUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;

// if (!prismaUrl) {
//   throw new Error(
//     "DATABASE_URL or DIRECT_URL environment variable is not set.",
//   );
// }

// export default definePrismaConfig({
//   schema: "./prisma/schema.prisma",
//   migrations: {
//     path: "./prisma/migrations",
//     seed: "tsx prisma/seed.ts",
//   },
//   datasource: {
//     url: process.env["DATABASE_URL"],
//   },
//   skills: {
//     agents: ["claude", "cursor", "agents", "devin"],
//   },
// });

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
