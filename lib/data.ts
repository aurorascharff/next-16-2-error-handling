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

let callCount = 0;

export async function getUser(): Promise<User> {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 800));

  const cycle = callCount++ % 3;
  if (cycle === 0) {
    return user;
  }
  if (cycle === 1) {
    throw new Error("Database connection timeout");
  }
  notFound();
}
