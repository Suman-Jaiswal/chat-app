const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        /> 
         <h6 style={{textAlign:'center', }}>{message.sender.username}</h6>
        </div>
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
    </div>
  );
};

export default TheirMessage;
