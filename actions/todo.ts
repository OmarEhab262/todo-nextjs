"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Fetch todos from the database
export const getTodoUserListAction = async ({
  userID,
}: {
  userID: string | null;
}) => {
  return await prisma.todo.findMany({
    where: {
      user_id: userID as string,
    },
    orderBy: {
      cratedAt: "desc",
    },
  });
};
// create todo

export const createTodoListAction = async ({
  title,
  body,
  completed,
  userID,
}: {
  title: string;
  body: string | undefined;
  completed: boolean;
  userID: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userID as string,
    },
  });
  revalidatePath("/");
};
// update todo

export const updateTodoListAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};

// delete todo
export const deleteTodoListAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
