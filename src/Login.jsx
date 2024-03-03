import { useState, useEffect  } from "react"

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('')

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

    }
    useEffect(()=>{

    },[])
    return(
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' name='email' type="email" required onChange={handleEmailChange} value={email}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" required onChange={handlePasswordChange}  value={password}/>
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}