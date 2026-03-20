import { notFound } from "next/navigation";
import { connection } from "next/server";

export type User = {
  name: string;
  email: string;
  role: string;
};

const user: User = {
  name: "Aurora Scharff",
  email: "aurora@example.com",
  role: "Developer",
};

export async function getUser(): Promise<User> {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 800));

  const rand = Math.random();
  if (rand < 0.33) {
    notFound();
  }
  if (rand < 0.66) {
    throw new Error("Database connection timeout");
  }

  return user;
}
