import { useState } from "react"

export default function SignUp(){
    const [forms, setForms]= useState({
        firstName: "",
        lastName: '',
        email: '',
        passowrd:'',
        confirm: ''
    })
    function handleChange(e){
        setForms({  ...forms,
            [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type='text' id="firstName" name="firstName" required onChange={handleChange} value={forms.firstName}/>
            </div>
            <div>
                <label htmlFor="lastNmae">Lat Name</label>
                <input type='text' id="lastNmae"  name="lastName"required onChange={handleChange} value={forms.lastName}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' id="email"  name="email" required onChange={handleChange}value={forms.email}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name='password' required onChange={handleChange} value={forms.password}/>
            </div>
            <div>
                <label htmlFor="confirm">Confirm</label>
                <input type='text' id="confirm" name='confirm' required onChange={handleChange}/>
            </div>
           <button type="submit">Submit</button>
        </form>
    )
}