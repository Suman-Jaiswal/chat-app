import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import {useRef} from 'react';

export default function ChatFeed(props) {
  const dummy = useRef()
  const {chats , activeChat , userName , messages} = props;
  const chat = chats && chats[activeChat];
  const renderReadReceipts = (message , isMyMessage) => chat.people.map((person,index) =>
      person.last_read === message.id && (
        <div
         key={`read_${index}`}
         className="read-receipts"
         style={{
           float: isMyMessage? 'right' : 'left',
           backgroundImage: `url(${person?.person?.avatar})`
         }}
        />
         
      )
    );
  
 
  const renderMessages =() =>{
    const keys = Object.keys(messages);

    return keys.map((key,index) => {
      const message = messages[key];
      const lastMessageKey = index ===0? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return(
        <div key={`msg_${index}`} style = {{width:"100%"}} >
           <div className="message-block">
               {
                 isMyMessage
                 ? <MyMessage message={message}/> 
                 : <TheirMessage message={message} lastMessage={lastMessageKey} /> 
                   } 
               <div ref={dummy}></div>
           </div>
           <div className="read-receipts" style={{marginRight: isMyMessage? '18px' : '0px' , marginLeft: isMyMessage? '0px' : '68px' }}>
             {renderReadReceipts(message, isMyMessage)}
          
           </div>

        </div>   

      )
    })
  }
  
 
   if(!chat) return "Loading..."
  return (
    <div className="channel">
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">{chat.people.map(person => `${person.person.username},`)}</div>
      </div>
      <div> {renderMessages()}</div>

     
      
     </div>
         <div className="message-form-container">
           <MessageForm dummy={dummy} {...props} chatId={activeChat}/>
         </div>
    </div>
  )
}
