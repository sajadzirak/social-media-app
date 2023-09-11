import Sidebar from "../components/sidebar/Sidebar";

function Home({showMenu}) {
  return(
    <div>
        <Sidebar showMenu={showMenu} />
    </div>
  )
}

export default Home;
