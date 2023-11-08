import { FC } from "react";
import Card from "../card-item/Card";
import { Column } from "../../types/types";
import { Container, Input } from "../board-item/BoardItems";
import { Button } from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeColumnName, deleteColumn } from "../../redux/columns";
import { createTask, deleteTasksColumn } from "../../redux/tasks";
import { RootState } from "../../redux/store";
import { getTasksByColumnId } from "../../redux/selectors";

const ColumnKanban: FC<{ column: Column }> = ({ column }) => {
  const user = useSelector((state: RootState) => state.user.userName);
  const tasks = useSelector((state: RootState) => getTasksByColumnId(state, column.id));

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
          onClick={() => {
            dispatch(deleteColumn(column.id));
            dispatch(deleteTasksColumn({ id: column.id }));
          }}
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
