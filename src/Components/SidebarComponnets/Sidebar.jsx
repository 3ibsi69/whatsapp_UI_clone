import "../../Styles/SideBar.css";
import Chats from "./Chats";
import Searchnav from "./Searchnav";
import SideNav from "./SideNav";
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
        chatImgSrc="https://www.w3schools.com/howto/img_avatar.png"
      />
       <Chats
        chatName="Anas Abbassi"
        chatTime="4:30 PM"
        messageCounter={98}
        chatText="Come on, let's go to the cinema"
        chatImgSrc="https://www.w3schools.com/howto/img_avatar.png"
      />
       <Chats
        chatName="Melek Abbassi"
        chatTime="2:00 AM"
        messageCounter={5}
        chatText="Good night"
        chatImgSrc="https://www.w3schools.com/howto/img_avatar.png"
      />
       <Chats
        chatName="Crush"
        chatTime="12:26 PM"
        messageCounter={0}
        chatText="I love you"
        chatImgSrc="https://www.w3schools.com/howto/img_avatar.png"
      />
       <Chats
        chatName="Dad"
        chatTime="9:45 PM"
        messageCounter={95}
        chatText="Come back home now if you don't come i will beat you up so hard" 
        chatImgSrc="https://www.w3schools.com/howto/img_avatar.png"
      />
      
    </>
    );
}

export default SideBar;
