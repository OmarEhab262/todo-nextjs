"use server";

import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Fetch todos from the database
export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};

// Other actions (create, update, delete)
export const createTodoListAction = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body: string | undefined;
  completed: boolean;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
};
export const updateTodoListAction = async () => {};
export const deleteTodoListAction = async () => {};
