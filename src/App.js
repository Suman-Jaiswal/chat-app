import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
      <ChatEngine  
          height="100vh"
          projectID="43f3b637-44da-4881-bdcd-e245a02bb58d"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  );
}

export default App;
