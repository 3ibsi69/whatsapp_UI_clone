import "../../Styles/SideBar.css";
import Chats from "./Chats";
import Searchnav from "./Searchnav";
import SideNav from "./SideNav";
import melek from "../../Assets/melek.jpg";
import crush from "../../Assets/crush.jfif";
import belha from "../../Assets/belha.jpg";
import anas from "../../Assets/anas.jpg";
import men from "../../Assets/men.avif";

function SideBar() {
  return (
    <>
    <SideNav/>
    <Searchnav/>
    <Chats
        chatName="John Doe"
        chatTime="2:00 PM"
        messageCounter={1}
        chatText="Hey, how are you?"
        chatImgSrc={`${men}`}
      />
       <Chats
        chatName="Anas Abbassi"
        chatTime="4:30 PM"
        messageCounter={98}
        chatText="Come on, let's go to the cinema"
        chatImgSrc={`${anas}`}
      />
       <Chats
        chatName="Melek Abbassi"
        chatTime="2:00 AM"
        messageCounter={5}
        chatText="Good night"
        chatImgSrc={`${melek}`}
      />
       <Chats
        chatName="Crush"
        chatTime="12:26 PM"
        messageCounter={0}
        chatText="I love you"
        chatImgSrc={`${crush}`}
      />
       <Chats
        chatName="Dad"
        chatTime="9:45 PM"
        messageCounter={95}
        chatText="Come back home now if you don't come i will beat you up so hard" 
        chatImgSrc={`${belha}`}
      />
      
    </>
    );
}

export default SideBar;
