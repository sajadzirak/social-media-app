import ShareOption from "./shareOption/ShareOption";

function SharePost({ currentUser }) {
  return (
    <div className="w-[90%] shadow-postshadow rounded-lg mb-4 p-3">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-[50%] bg-gray-100 mr-4"
          src={currentUser.image}
          alt=""
        />
        <input
          className="flex-1 focus:!outline-none h-[40px]"
          placeholder="what's in your mind ?"
          type="text"
        />
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ShareOption color="text-rose-400" title="photo" icon="ri-image-add-line" />
          <ShareOption color="text-sky-500" title="tag" icon="ri-price-tag-3-fill" />
          <ShareOption color="text-green-700" title="location" icon="ri-map-pin-2-fill" />
          <ShareOption color="text-yellow-500" title="feelings" icon="ri-emotion-fill" />
        </div>
        <button className="bg-green-700 text-white py-1 px-2 rounded-md">share</button>
      </div>
    </div>
  );
}

export default SharePost;
