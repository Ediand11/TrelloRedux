import { FC } from "react";
import Card from "../card-item/Card";
import { Column, Id, Task } from "../../types/types";
import { Container, Input } from "../board-item/BoardItems";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { changeColumnName, deleteColumn } from "../../redux/columns";

type ColumnNameProps = {
  column: Column;
  tasks: Task[];
  addNewTask: (user: string, columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  addComment: (id: Id, content: string, authorComment?: string) => void;
  deleteComment: (taskId: Id, commentId: Id) => void;
  updateComment: (taskId: Id, commentId: Id, content: string) => void;
  user: string;
};

const ColumnKanban: FC<ColumnNameProps> = ({
  column,
  tasks,
  addNewTask,
  updateTask,
  deleteTask,
  addComment,
  deleteComment,
  updateComment,
  user,
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Input
          type="text"
          value={column.title}
          onChange={(e) => dispatch(changeColumnName({ id: column.id, newTitle: e.target.value }))}
        />
        <Button
          style={{ border: "none", outline: "none", borderRadius: 12 }}
          onClick={() => dispatch(deleteColumn(column.id))}
        >
          X
        </Button>
      </div>

      {tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          addComment={addComment}
          deleteTask={deleteTask}
          updateTask={updateTask}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      ))}

      <Button onClick={() => addNewTask(user, column.id)}>Добавить карточку</Button>
    </Container>
  );
};

export default ColumnKanban;
