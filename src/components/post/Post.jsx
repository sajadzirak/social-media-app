import { useState } from "react";
import { users } from "../../db";

function Post({ post }) {
  const user = users.filter((u) => u.id === post.userId)[0];
  const [likes, setLikes] = useState(post.reactions);
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    if (!isLiked) {
      setLikes((current) => current + 1);
    } else {
      setLikes((current) => current - 1);
    }
    setIsLiked((current) => !current);
  }

  return (
    <div className="mb-4 w-[90%] shadow-postshadow p-3 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-[50%] bg-gray-100 mr-2"
            src={user.image}
            alt=""
          />
          <span className="font-medium mr-2">{user.username}</span>
          <span className="font-light text-gray-900 text-xs">{post.date}</span>
        </div>
        <i className="ri-more-2-fill"></i>
      </div>
      <div>
        <p className="my-3">{post.desc}</p>
        <img src={post.photo} alt="" />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center">
          <i
            onClick={() => handleLike()}
            className={`${
              isLiked ? "ri-heart-fill text-red-600" : "ri-heart-line"
            } cursor-pointer mr-2 text-xl`}
          ></i>
          <span>{likes} people like it</span>
        </div>
        <span className="border-b-2 border-dashed border-[#333333] cursor-pointer">{post.comment} comments</span>
      </div>
    </div>
  );
}

export default Post;
