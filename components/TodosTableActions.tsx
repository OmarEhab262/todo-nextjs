"use client";
import { deleteTodoListAction } from "@/actions/todo";
import { TrashIcon } from "lucide-react";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import Spinner from "./Spinner";
import { Button } from "./ui/button";
import { ITodo } from "@/interfaces";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />

      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoListAction({ id: todo?.id });
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <TrashIcon size={18} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
