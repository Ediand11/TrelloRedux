import { FC, useState } from "react";
import { Comment } from "../../types/types";
import {
  CommentButton,
  CommentContainer,
  CommentSpan,
  CommentTextarea,
} from "./CommentItem.module";

const CommentItem: FC<
  Comment & { deleteComment: () => void; updateComment: (content: string) => void }
> = ({ authorComment, contentComment, deleteComment, updateComment }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <CommentContainer>
      {editMode ? (
        <CommentTextarea
          value={contentComment}
          onChange={(e) => {
            updateComment(e.target.value);
          }}
          placeholder={"Введите ваш комментарий"}
          onBlur={() => setEditMode(false)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setEditMode(false);
          }}
        />
      ) : (
        <CommentSpan>{`${authorComment}: ${contentComment}`}</CommentSpan>
      )}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CommentButton onClick={deleteComment}>x</CommentButton>
        <CommentButton onClick={() => setEditMode(true)}>Ed</CommentButton>
      </div>
    </CommentContainer>
  );
};

export default CommentItem;
