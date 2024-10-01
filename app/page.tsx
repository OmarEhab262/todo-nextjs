import { getTodoListAction } from "@/actions/todo";
import AddTodoForm from "@/components/AddTodoForm";
import { ModeToggle } from "@/components/ModeToggle";
import TodoTable from "@/components/TodoTable";
export default async function Home() {
  const todos = await getTodoListAction();
  return (
    <main className="container mx-auto p-4">
      <ModeToggle />
      <AddTodoForm />
      <div className="px-14">
        <TodoTable data={todos} />
      </div>
    </main>
  );
}
