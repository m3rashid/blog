import React from "react";
import { IPost } from "../services/types";

interface IProps {
  post: IPost;
  position: string;
}

const AdjacentPostCard: React.FC<IProps> = ({ post, position }) => {
  return (
    <>
      <div>AdjacentPostCard</div>
    </>
  );
};

export default AdjacentPostCard;
