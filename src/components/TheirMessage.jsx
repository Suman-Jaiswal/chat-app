import React from 'react'

export default function TheirMessage({lastMessage , message}) {
  const isFisrtMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
  return (
    <div className="message-row">
      {
        isFisrtMessageByUser && (
          <div
             className="message-avatar"
             style={{backgroundImage: `url(${message?.sender?.avatar})`}}/>
         )} { message?.attachments?.length > 0
              ? (
                <img src={message.attachments[0].file} 
                     alt="message-attachment"
                     className="message-image"
                     style={{marginLeft: isFisrtMessageByUser? '4px' : '48px'}}
                     />
              ) : (<div 
              className="message" 
              style={{
                       float: 'left' , 
                       color:'white', 
                       backgroundColor:'#CABCDC' ,
                       marginLeft: isFisrtMessageByUser? '4px' : '48px' }}>
                       {message.text}
                  </div>)                           
        
            }
    </div>
  )
}
