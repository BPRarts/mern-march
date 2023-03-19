import React, { useState } from 'react';

const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ confirmPw, setConfirmPw] = useState("");

 
  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  }

  
  return (
    <div>
      <form style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div>
        {firstName.length < 2 && firstName.length > 0 ? (
            <p>First Name must be at least 2 characters</p>
          ) : null}


        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div>
        {lastName.length < 2 && lastName.length > 0 ? (
            <p>Last Name must be at least 2 characters</p>
          ) : null}


        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        {email.length < 5 && email.length > 0 ? (
            <p>Email must be at least 5 characters</p>
          ) : null}



        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
          {password.length < 8 ? (
              <p>Password must be at least 8 characters</p>
              ) : null}

        <div style={inputDataDivStyle}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }
            />
        </div>
        
        {confirmPw !== password ? <p>Passwords must match</p> : null}
      </form>

      
    </div>
    
  )
}

export default Form;