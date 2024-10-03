import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces/index";
import { Check, X } from "lucide-react";
import TodosTableActions from "./TodosTableActions";
import { Badge } from "./ui/badge";
// import { TodoFormValues } from "@/schema";

const TodoTable = ({ data }: { data: ITodo[] }) => {
  return (
    <>
      <Table>
        <TableCaption className="mb-5">
          A list of your recent todos.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-center">Completed</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell className="text-center ">
                  {todo.completed ? (
                    <Badge variant="secondary">
                      <Check size={20} strokeWidth={3} color="green" />
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <X size={20} strokeWidth={3} color="red" />
                    </Badge>
                  )}
                </TableCell>

                <TableCell className="flex a gap-2 justify-end">
                  <TodosTableActions todo={todo} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No todos available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right"> {data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default TodoTable;
