import { FC, useState } from "react";
import { Id, Task } from "../../types/types";
import Popup from "../popup-item/Popup";
import { CardSpan, CardTextArea } from "./CardItems";
import { Button } from "../UI/Button";
import CommentItem from "../comment-item/CommentItem";

type TCardProps = {
  task: Task;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  addComment: (id: Id, content: string, authorComment?: string) => void;
  deleteComment: (taskId: Id, commentId: Id) => void;
  updateComment: (taskId: Id, commentId: Id, content: string) => void;
};

const Card: FC<TCardProps> = ({
  task,
  updateTask,
  deleteTask,
  addComment,
  deleteComment,
  updateComment,
}) => {
  const [editMode, setEditMode] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [comment, setComment] = useState("");

  const handleCardClick = () => {
    setPopupVisible((state) => !state);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {editMode === true ? (
          <CardTextArea
            value={task.content}
            onChange={(e) => {
              updateTask(task.id, e.target.value);
            }}
            onBlur={() => setEditMode(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditMode(false);
            }}
          />
        ) : (
          <CardSpan onClick={handleCardClick}>{task.content}</CardSpan>
        )}
        <Button onClick={() => deleteTask(task.id)}>X</Button>
      </div>

      {isPopupVisible && (
        <Popup setVisible={setPopupVisible}>
          <h2>Popup Content</h2>
          <CardTextArea
            style={{ height: "100px" }}
            value={task.content}
            onChange={(e) => {
              updateTask(task.id, e.target.value);
            }}
            onBlur={() => setEditMode(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditMode(false);
            }}
          />
          <h3>Comment</h3>

          <form>
            <CardTextArea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder={"Введите ваш комментарий"}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                addComment(task.id, comment);
                setComment("");
              }}
            >
              Добавить коммент
            </Button>
          </form>

          {task.comments?.map((comment) => (
            <CommentItem
              key={comment.idComment}
              idComment={comment.idComment}
              authorComment={comment.authorComment}
              contentComment={comment.contentComment}
              deleteComment={() => {
                deleteComment(task.id, comment.idComment);
              }}
              updateComment={(content) => {
                updateComment(task.id, comment.idComment, content);
              }}
            />
          ))}

          <Button onClick={handleCardClick}>Закрыть</Button>
        </Popup>
      )}
    </div>
  );
};

export default Card;
