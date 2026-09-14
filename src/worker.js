import { PrismaClient } from "./generated/prisma/client.js";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

console.log("Worker started");

const incidentCount = await prisma.incident.count();

console.log(`There are ${incidentCount} incidents in the database`);

setInterval(() => {
  console.log("Worker is running...");
}, 5000);
