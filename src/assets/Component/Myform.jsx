// import React, { useState } from 'react';

// const Myform = () => {
//   // Define state variables for form fields
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   // Handle input changes and update state
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the form data, e.g., send it to a server
//     console.log('Name:', name);
//     console.log('Email:', email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Myform;
import React from 'react'

const Myform = () => {
    
  return (
    <div>$form-validation-states: (
        "valid": (
          "color": $form-feedback-valid-color,
          "icon": $form-feedback-icon-valid
        ),
        "invalid": (
          "color": $form-feedback-invalid-color,
          "icon": $form-feedback-icon-invalid
        )
      );
      </div>
  )
}

export default Myform