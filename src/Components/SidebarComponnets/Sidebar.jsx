import "../../Styles/SideBar.css";
import Chats from "./Chats";
import Searchnav from "./Searchnav";
import SideNav from "./SideNav";
function SideBar() {
  return (
    <>
    <SideNav/>
    <Searchnav/>
    <Chats/>
    </>
    );
}

export default SideBar;
