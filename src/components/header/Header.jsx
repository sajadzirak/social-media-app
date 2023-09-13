import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import NotifItem from "../notifItem/NotifItem";

function Header({ currentUser, showMenu, onShowMenu }) {
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <>
      <header className="fixed top-0 bg-main-blue h-[50px] w-full flex items-center text-white px-4 md:px-8 z-[1000]">
        {showMenu ? (
          <i
            onClick={() => onShowMenu()}
            className="md:hidden ri-close-line flex-[1] text-lg cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={() => onShowMenu()}
            className="md:hidden ri-menu-2-line flex-[1] text-lg cursor-pointer"
          ></i>
        )}

        <div className="md:flex-[2] flex-[4] text-left ">
          <div className="hidden md:flex md:justify-between">
            <h1 className="font-medium text-lg">Social App</h1>
            <div className="hidden md:flex md:max-w-[850px] w-[75%] text-black bg-white rounded-3xl overflow-hidden px-2">
              <i className="ri-search-line mr-2"></i>
              <input
                placeholder="Search friends"
                className="focus:!outline-none"
                type="text"
              />
            </div>
          </div>
          {showSearchbar ? (
            <div className="md:hidden flex w-[75%] text-black bg-white rounded-3xl overflow-hidden px-2">
              <i className="ri-search-line mr-2"></i>
              <input
                placeholder="Search friends"
                className="focus:!outline-none"
                type="text"
              />
            </div>
          ) : (
            <h1 className="md:hidden font-medium text-lg">Social App</h1>
          )}
        </div>
        <div className="flex items-center justify-end flex-[1]">
          {showSearchbar ? (
            <i
              onClick={() => setShowSearchbar((current) => !current)}
              className="md:hidden ri-close-line mr-3 text-lg cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setShowSearchbar((current) => !current)}
              className="md:hidden ri-search-line mr-4 text-lg cursor-pointer"
            ></i>
          )}
          <div className="hidden md:flex items-center mr-8">
            <NotifItem icon="ri-user-fill" notifNum="3" />
            <NotifItem icon="ri-message-2-fill" notifNum="5" />
            <NotifItem icon="ri-notification-2-fill" notifNum="2" />
          </div>
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
