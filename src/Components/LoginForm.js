// import React, { useState } from 'react';
// import "../css/loginform.css"

// function LoginForm(props) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // TODO: Implement login functionality here
//     console.log(`Logging in with username: ${username} and password: ${password}`);
//   };

//   return (
//     <div className="login-form">
//        <h2>Log In</h2> 
//        <form onSubmit={handleSubmit}>
//         <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>


//     </form>
//     </div>    

//   );
// }

// export default LoginForm;
