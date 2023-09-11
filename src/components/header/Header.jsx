import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

function Header({ currentUser, showMenu, onShowMenu }) {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <>
      <header className="sticky bg-main-blue h-[50px] w-full flex items-center text-white px-4">
        {showMenu ? (
          <i
            onClick={() => onShowMenu()}
            className="ri-close-line flex-[1] text-lg cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={() => onShowMenu()}
            className="ri-menu-2-line flex-[1] text-lg cursor-pointer"
          ></i>
        )}

        <div className="flex-[4] text-left">
          {showSearchbar ? (
            <div className="flex w-[75%] text-black bg-white rounded-3xl overflow-hidden px-2">
              <i className="ri-search-line mr-2"></i>
              <input
                placeholder="Search friends"
                className="focus:!outline-none"
                type="text"
              />
            </div>
          ) : (
            <h1 className="font-medium text-lg">Social App</h1>
          )}
        </div>
        <div className="flex items-center flex-[1]">
          {showSearchbar ? (
            <i
            onClick={() => setShowSearchbar((current) => !current)}
              className="ri-close-line mr-3 text-lg cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setShowSearchbar((current) => !current)}
              className="ri-search-line mr-4 text-lg cursor-pointer"
            ></i>
          )}
          <img
            className="w-[30px] h-[30px] rounded-[50%] bg-white cursor-pointer"
            src={currentUser.image}
            alt=""
          />
        </div>
      </header>
    </>
  );
}

export default Header;
