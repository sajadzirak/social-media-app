import { useState } from "react";

import {users} from "./db";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = users[0]
  
  function handleShowMenu() {
    setShowMenu(current => !current)
  }
  
  return (
    <>
      <Header currentUser={currentUser} showMenu={showMenu} onShowMenu={handleShowMenu} />
      <Home currentUser={currentUser} showMenu={showMenu} />
    </>
  );
}

export default App;
