export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Comment = {
  idComment: Id;
  authorComment: string;
  contentComment: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  author: string;
  comments?: Comment[];
};
