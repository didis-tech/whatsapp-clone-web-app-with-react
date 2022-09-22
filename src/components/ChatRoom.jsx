const ChatRoom = ({ chatRoom, setChatOnView }) => {
  return (
    <li className="chatroom" onClick={() => setChatOnView(chatRoom.id)}>
      <div className="chatroom-icon-bg">
        <img
          className="chatroom-icon"
          src={chatRoom.profile_image}
          alt="profile-img"
        />
      </div>
      <div className="chatroom-content-wrapper">
        <div className="chatroom-name-recent">
          <span className="chatroom-name">{chatRoom.name}</span>
          <span className="preview-text">preview text</span>
        </div>
      </div>
    </li>
  );
};

export default ChatRoom;
