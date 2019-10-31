import React, { useState } from "react"
import "/Users/punchcode/Projects/react-validation/src/styles/base.css"
import validator from 'validator'


function Form(props) {
// variables for the inputs
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [website, setWebsite] = useState("")
  
// variables for the errors
const [errorName, setErrorName] = useState("")

const [errorEmail, setErrorEmail] = useState("")

const [errorUserName, setErrorUserName] = useState("")

const [errorPassword, setErrorPassword] = useState("")

const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

const [errorWebsite, setErrorWebsite] = useState("")

//SUBMIT HANDLE FUNCTION
    function handleSubmit(e){
      e.preventDefault()
      let err = false;
      
      
      if(name === ""){
        err = true;
        setErrorName(" - Cannot be blank")
      } else {
          setErrorName("")
      }
      

      if(email=== ""){
        err = true;
            setErrorEmail(" - Cannot be blank")
      } else {
          setErrorEmail("")
      }
      


      if(username=== ""){
        err = true;
          setErrorUserName(" - Cannot be blank")
      } else {
          setErrorUserName("")
      }
//passwords---------

      if(password !== '' && confirmPassword !== '' ){
        if(!validator.isAscii(password)){
            err = true
            setErrorPassword('- Cannot be blank')
        }else if(!validator.isAscii(confirmPassword)){
            err = true
            setErrorConfirmPassword('- Cannot be blank')
            }if(password === confirmPassword){
                setErrorPassword('')
                setErrorConfirmPassword('')
            }else if(password !== confirmPassword){
                err = true
                setErrorPassword('- Must Match "Confirm Password"')
                setErrorConfirmPassword('- Must Match "Password"')
            }
     }else if(password !== '' && confirmPassword === ''){
            err = true
            setErrorConfirmPassword('- Cannot be blank')
    }else if(password === '' && confirmPassword !== ''){
        err = true
        setErrorPassword('- Cannot be blank')
    }else {
        err = true
        setErrorPassword('- Cannot be blank')
        setErrorConfirmPassword('- Cannot be blank')
   }

      ////
      
      if(website ===""){
        if(!validator.isURL(website)){
        err = true; 
            setErrorWebsite(" - Cannot be blank")
        }else if(validator.isURL(website)){
          setErrorWebsite(" ")
        }
      } 


       if(!err){
        props.history.push('/Submitted')
      }

      
      console.log(`pass: ${password}, Confpass: ${confirmPassword}`)
    }
  
  //Main return component
  return (
    <div className="container">
      <h1>Profile Form - All fields required</h1>
      <div className="form">
      <form>

        <label htmlFor="name" 
        className={errorName === ""? "": "labelerror"}>Name{errorName}</label>
        

        <input name="name" 
        className={errorName === ""? "": "error"}
        onChange={e => setName(e.target.value)} 
        value={name} type="text" 
        placeholder="First Name"
        />

        <label htmlFor="email" className={errorEmail === ""? "": "labelerror"}>Email{errorEmail}</label>
        

        <input name="email" 
        className={errorEmail === ""? "": "error"}
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        type="email"
        placeholder="email@example.com"
        />

        <label htmlFor="username" className={errorUserName === ""? "": "labelerror"}>Username{errorUserName}</label>
        

        <input name="username" 
        className={errorUserName === ""? "": "error"}
        onChange={e => setUsername(e.target.value)} 
        type="text" 
        placeholder="Username" 
        value={username}
        />

        <label htmlFor="password" className={errorPassword === "" ? "": "labelerror"}>Password{errorPassword}</label>
        

        <input name="password" 
        className={errorPassword === "" ? "": "error"}
        onChange={e => setPassword(e.target.value)}
         type="password" 
         placeholder="Password" 
         value={password}
         />
            
        <label htmlFor="confirmPassword" className={errorConfirmPassword === "" ? "": "labelerror"}>
            Confirm Password{errorConfirmPassword}</label>
       

        <input name="confirmPassword" 
        className={errorConfirmPassword === ""? "": "error"}
        onChange={e => setConfirmPassword(e.target.value)} 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword}
        />
          
        <label htmlFor="website" className={errorWebsite === ""? "": "labelerror"}>Valid Website{errorWebsite}</label>
        
        <input name="website" 
        className={errorWebsite === ""? "": "error"}
        onChange={e => setWebsite(e.target.value)} 
        type="text" 
        placeholder="www.example.com"
        value={website}
        />

        
        <button type="submit" onClick={handleSubmit} >submit</button>
        
      </form>
    </div>
    </div>
  )
}

export default Form