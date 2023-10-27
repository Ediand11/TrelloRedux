import { FC } from "react";
import Card from "../card-item/Card";
import { Column, Task } from "../../types/types";
import { Container, Input } from "../board-item/BoardItems";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { changeColumnName, deleteColumn } from "../../redux/columns";
import { createTask } from "../../redux/tasks";

type ColumnNameProps = {
  column: Column;
  tasks: Task[];

  user: string;
};

const ColumnKanban: FC<ColumnNameProps> = ({
  column,
  tasks,

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
        <Card key={task.id} task={task} />
      ))}

      <Button onClick={() => dispatch(createTask({ userName: user, columnId: column.id }))}>
        Добавить карточку
      </Button>
    </Container>
  );
};

export default ColumnKanban;
