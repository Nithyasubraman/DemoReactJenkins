//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  //States for Register
  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword,setconfirmPassword] = useState("")
  
  //Validation
  function validateForm()
  {
    if (firstName.length == 0)
    {
      alert('First Name Should not be Empty')
      return
    }

    if (email.length == 0) {
      alert('Email Address should not be empty')
      return
    }

    if (password.length < 8) {
      alert('Password must contain minimum 8 characters')
      return
    }

    if (password.length > 14) {
      alert('Password should contain maximum 14 characters')
      return
    }

    let countUpperCase = 0   
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!','@','#','$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
  '_',
        '-','+',
        '=','[','{',
        ']','}',
        ':',';',
        '<','>',
      ]

      if (specialChars.includes(password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }


  }

  //Handling the Name Change

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  //alertbox
  // const alertbox = () =>
  // {
  //   alert("Register Successfully..!");
  // }

   
  return (
    <div className="base-container">
      {/* <h1>Welcome</h1> */}
      <br/>
      <div className="Form">
      <h2 data-testid="Heading">Sign Up</h2>
      <br/>
      <input type="text" data-testid="TxtFirstName" placeholder="First Name" onChange={handleFirstName} />
      <br/>
      <input type="text" data-testid="TxtLastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <br/>
      <input type="email" data-testid="TxtEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <input type="password" data-testid="TxtPassword" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <input type="password" data-testid="TxtConfirmPassword" placeholder="Confirm Password"  onChange={(e) => setconfirmPassword(e.target.value)} />
      <br/>
      <input className="submit" data-testid="RegisterButton" type="submit" value="Register" onClick={() => { validateForm() }} />
    </div>
    </div>
  );
}

export default App;





// const [formData, setFormData] = useState({
//   firstname: "",
//   lastname: "",
//   email: "",
//   password: "",
//   confirmpassword: ""
// });


 // const CreateRegister = () => {
    //   alert("Registered Successfully..!");
    // }







{/* <label>First Name :</label> <input type="text" placeholder="First Name" />
<br/>
<label>Last Name :</label> <input type="text" placeholder="Last Name" />
<br/>
<label>Email :</label> <input type="email" placeholder="Email" />
<br/>
<label>Password :</label> <input type="password" placeholder="Password" />
<br/>
<label>Confirm Password :</label> <input type="password" placeholder="Confirm Password" />
<br/>
<input type="submit" value="Register" /> */}
