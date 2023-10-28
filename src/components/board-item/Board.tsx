import { FC, useState } from "react";
import ColumnKanban from "../column-item/ColumnKanban";
import { Container, Header, Input } from "./BoardItems";
import Popup from "../popup-item/Popup";
import { Button } from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { createColumn } from "../../redux/columns";
import { changeUserName } from "../../redux/user";

const Board: FC = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.columns);
  const tasks = useSelector((state: RootState) => state.tasks);
  const user = useSelector((state: RootState) => state.user.userName);

  const [isPopupVisibleUser, setIsPopupVisibleUser] = useState<boolean>(() => !user);

  const handleCardClick = () => {
    setIsPopupVisibleUser((state) => !state);
  };

  return (
    <div>
      <Header>
        <Button onClick={handleCardClick}>Изменить Пользователя</Button>
      </Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {isPopupVisibleUser && (
          <Popup setVisible={handleCardClick}>
            <h1>Введите Имя пользователя</h1>
            <Input value={user} onChange={(e) => dispatch(changeUserName(e.target.value))}></Input>
            <Button onClick={handleCardClick}>Закрыть</Button>
          </Popup>
        )}

        {columns.map((column) => (
          <ColumnKanban
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.columnId === column.id)}
          />
        ))}
        <Container>
          <Button onClick={() => dispatch(createColumn())}>Создать новую колонку</Button>
        </Container>
      </div>
    </div>
  );
};

export default Board;
