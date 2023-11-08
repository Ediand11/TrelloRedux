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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";

type TCardProps = {
  task: Task;
};

type TCommentContent = {
  contentComment: string;
};

const Card: FC<TCardProps> = ({ task }) => {
  const [editMode, setEditMode] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCommentContent>({
    reValidateMode: "onChange",
  });

  const user = useSelector((state: RootState) => state.user.userName);
  const dispatch = useDispatch();

  const handleCardClick = () => {
    setPopupVisible((state) => !state);
  };

  const onSubmit: SubmitHandler<TCommentContent> = (data) => {
    dispatch(
      addComment({
        taskId: task.id,
        contentComment: data.contentComment,
        authorComment: user,
      })
    );
    reset();
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
        <Button onClick={() => dispatch(deleteTask({ id: task.id }))}>X</Button>
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardTextArea
              {...register("contentComment", { required: "Is nothing" })}
              placeholder={"Введите ваш комментарий"}
            />
            <Button type="submit">Добавить коммент</Button>
          </form>

          {errors?.contentComment && (
            <div style={{ textAlign: "center" }}>{errors.contentComment.message}</div>
          )}

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
