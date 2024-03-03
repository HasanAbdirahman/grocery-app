import { useState } from "react"
import axios from 'axios'

export default function Login(){
    const [loginInput, setLoginInput]= useState({
        email: '',
        password: ''
    })
   

    const handleChange = (e)=>{
        setLoginInput({...loginInput, [e.target.name]: e.target.value})
    }
    // remember everytime we deal with side effect like timeInterval or
    //  fetching data we use useEffect except logging in and signing up
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            let result =  await axios.post('/v1/user/login');
            setLoginInput(result.data)            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
   
    return(
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' name='email' type="email" required onChange={handleChange} value={loginInput.email}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" required onChange={handleChange}  value={loginInput.password}/>
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}