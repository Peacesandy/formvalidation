import React, {useState} from 'react'
import './App.css';


function App() {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     

     const handleSubmit = (e) => {
        e.preventDefault();
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if (!passwordPattern.test(password)) {
             setPassword("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.")
             return
        }
        alert('The email address and password are' + email + 'and' + password + 'respectively.')
     }

  return (
    <div className="App">
       <form onSubmit={handleSubmit} autoComplete='off'>
          <h1>Register</h1>
          <div className='formInput'>
          <label>Email</label>
           <input
             type='email'
             name='email'
             value={email}
             placeholder='Enter your email...'
             onChange={(e) => setEmail(e.target.value)}
           />
          </div>
          <div className='formInput'>
              <label>Password</label>
              <input
                 type='password'
                 name='password'
                 value={password}
                 placeholder='Enter a strong password...'
                 onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button>Submit</button>
       </form> 
    </div>
  );
}

export default App;
