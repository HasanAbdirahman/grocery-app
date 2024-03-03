import { useState } from "react"
import axios from "axios"


export default function SignUp(){
    const [forms, setForms]= useState({
        firstName: "",
        lastName: '',
        email: '',
        password:'',
        confirm: ''
    })
    function handleChange(e){
        setForms({  ...forms,
            [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            let result =  await axios.post('/v1/user/signup', forms);
            console.log(result.data); 
            setForms(prevState => ({
                ...prevState,
                firstName: "", 
                lastName: "",  
                email: "",     
                password: "",  
                confirm: ""    
              }));         
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
           
                <label htmlFor="firstName">First Name</label>
                <input type='text' id="firstName" name="firstName" required onChange={handleChange} value={forms.firstName}/>
           
                <label htmlFor="lastNmae">Lat Name</label>
                <input type='text' id="lastNmae"  name="lastName"required onChange={handleChange} value={forms.lastName}/>
           
                <label htmlFor="email">Email</label>
                <input type='email' id="email"  name="email" required onChange={handleChange}value={forms.email}/>
           
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name="password" required onChange={handleChange} value={forms.password}/>
           
                <label htmlFor="confirm">Confirm</label>
                <input type='password' id="confirm" name="confirm" required onChange={handleChange}value={forms.confirm}/>
           <button type="submit">Submit</button>
        </form>
    )
}