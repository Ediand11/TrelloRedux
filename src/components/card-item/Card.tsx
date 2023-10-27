import { FC, useState } from "react";
import { Task } from "../../types/types";
import Popup from "../popup-item/Popup";
import { CardSpan, CardTextArea } from "./CardItems";
import { Button } from "../UI/Button";
import CommentItem from "../comment-item/CommentItem";
import {
  addComment,
  deleteComment,
  deleteTask,
  updateComment,
  updateTask,
} from "../../redux/tasks";
import { useDispatch } from "react-redux";

type TCardProps = {
  task: Task;
};

const Card: FC<TCardProps> = ({ task }) => {
  const [editMode, setEditMode] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

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
              dispatch(updateTask({ id: task.id, content: e.target.value }));
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
        <Button onClick={() => dispatch(deleteTask(task.id))}>X</Button>
      </div>

      {isPopupVisible && (
        <Popup setVisible={setPopupVisible}>
          <h2>Popup Content</h2>
          <CardTextArea
            style={{ height: "100px" }}
            value={task.content}
            onChange={(e) => {
              dispatch(updateTask({ id: task.id, content: e.target.value }));
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
                dispatch(
                  addComment({ taskId: task.id, contentComment: comment, authorComment: "" })
                );
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
                dispatch(deleteComment({ taskId: task.id, commentId: comment.idComment }));
              }}
              updateComment={(content) => {
                dispatch(updateComment({ taskId: task.id, commentId: comment.idComment, content }));
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
