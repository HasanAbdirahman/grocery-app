// import { useState } from "react"
// import axios from 'axios'

// export default function Login(){
//     const [loginInput, setLoginInput]= useState({
//         email: '',
//         password: ''
//     })
   

//     const handleChange = (e)=>{
//         setLoginInput({...loginInput, [e.target.name]: e.target.value})
//     }
//     // remember everytime we deal with side effect like timeInterval or
//     //  fetching data we use useEffect except logging in and signing up
//     async function handleSubmit(e){
//         e.preventDefault();
//         try {
//             let result =  await axios.post('/v1/user/login', loginInput);
//             setLoginInput(result.data)            
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
    
//     return(
//         <form  onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input id='email' name='email' type="email" required onChange={handleChange} value={loginInput.email}/>
//                 <label htmlFor="password">Password</label>
//                 <input id='password' name='password' type="password" required onChange={handleChange}  value={loginInput.password}/>
//             <button type="submit">Submit</button>

//         </form>
//     )
// }
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('your-backend-api-url/login', {
        username,
        password
      });

      // Handle successful login here, such as setting authentication token, redirecting, etc.
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
