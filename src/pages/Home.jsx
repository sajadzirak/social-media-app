import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";

function Home({showMenu, currentUser}) {
  return(
    <div className="flex mt-[50px]">
        <Sidebar showMenu={showMenu} />
        <Feed currentUser={currentUser} />
        <Rightbar />
    </div>
  )
}

export default Home;
