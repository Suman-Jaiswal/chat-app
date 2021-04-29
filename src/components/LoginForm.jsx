import React, {useState} from 'react'
import axios from 'axios'

export default function LoginForm() {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')

  const handleSubmit=(e)=>{
     e.preventDefault()
     const authObject = {
       'Project-ID' : "43f3b637-44da-4881-bdcd-e245a02bb58d",
       'User-Name': username,
       'User-Secret': password
      }
      try {
           axios.get('https://api.chatengine.io/chats' , {headers: authObject});

        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        window.location.reload();
      } catch (error) {
        setError('Oops, incorrect credentials')
      }
  }
  return (
    <div className="wrapper">
         <div className="form">
             <h2 align="center" style={{marginBottom : '15px' , color: 'white'}} >Chat Application</h2>
             <h1 className="title">See Saw</h1>
             <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="input"
                     placeholder="Username" required
                    />
                    <input type="password" name="password" value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="input"
                     placeholder="Password" required
                    />
                    <div align="center">
                      <button type="submit" className="button">
                        <span>Start Chatting</span>
                      </button>
                      <h2 className="error">{error}</h2>
                    </div>
             </form>
         </div>
    </div>
  )
}
