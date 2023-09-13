import SidebarOption from "./sidebar-option/SidebarOption";
import { users } from "../../db";
import SidebarProfile from "./sidebar-profile/SidebarProfile";

function Sidebar({showMenu}) {
  const data = [
    { class: "ri-rss-line", title: "Feed" },
    { class: "ri-message-2-line", title: "Chats" },
    { class: "ri-video-fill", title: "Videos" },
    { class: "ri-group-fill", title: "Groups" },
    { class: "ri-bookmark-fill", title: "Bookmarks" },
    { class: "ri-question-line", title: "Questions" },
    { class: "ri-briefcase-line", title: "Jobs" },
    { class: "ri-calendar-event-fill", title: "Events" },
  ];

  return (
    <div className={`xl:flex-[2] md:sticky md:left-0 md:flex-[1] bg-white w-[75%] sm:w-[60%] p-4 h-[calc(100vh-50px)] overflow-scroll fixed top-[50px] ${showMenu ? "left-0" : "left-[-100%]"} transition-left transition-slowest`}>
      <ul>
        {data.map((el) => {
          return (
            <SidebarOption key={el.title} title={el.title}>
              <i className={el.class}></i>
            </SidebarOption>
          );
        })}
      </ul>
      <button className="bg-gray-200 px-8 py-2 mb-4 rounded-md">Show More</button>
      <hr className="mb-4 bg-black" />
      <ul>
        {users.map(user => {
            return (
                <SidebarProfile key={user.id} user={user} />
            )
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
