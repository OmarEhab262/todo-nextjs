import { getTodoUserListAction } from "@/actions/todo";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
export default async function Home() {
  const { userId } = auth();

  const todos = await getTodoUserListAction({ userID: userId });
  return (
    <main className="container mx-auto p-4 flex flex-col    ">
      <div className="flex flex-row-reverse pr-14 mb-5">
        <AddTodoForm userID={userId} />
      </div>
      <div className="px-14">
        <TodoTable data={todos} />
      </div>
    </main>
  );
}
