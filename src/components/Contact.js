// Contact.js

import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [ userData, setUserData]= useState({
        name:"",
        email:"",
        message:"",
    })
    let name ,value;
    const postUserData = (event) =>{
        name=event.target.name;
        value=event.target.value;

setUserData({...userData,[name]:value});
 };

//connect with firebase
const submitData =async (event) => {
    event.preventDefault();
    const{name,email,message}=userData;

    if(name  &&  email && message){

   const res= fetch("https://react-firebase-3362c-default-rtdb.firebaseio.com/userDataRecords.json",{
   method:"post",
   headers:{
    "Content-Type":"applications/json"
   },
   body:JSON.stringify({name,email,message,

   }),
}
   );
   if(res){
    setUserData({
        name:"",
        email:"",
        message:"",

    });
    alert("Data Stored");
   }
   else{
    alert("Please Fill The Data");
   }
    }
    else{
        alert("Please Fill The Data");
    }
};

    return (
        <div>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, feedback, or business inquiries, please feel
                free to contact us using the form below. We'll get back to you as soon as
                possible.
            </p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                    placeholder='Enter Your Name:' 
                    value={userData.name}
                    onChange={postUserData}/>

                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                     type="email" 
                    id="email"
                     name="email"
                    placeholder='Enter Your Email:' 
                    value={userData.email}
                  onChange={postUserData} 
                     />  
                   </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input
                     type="message" 
                    id="message"
                     name="message"
                      rows="4"
                    placeholder='Enter suggestions'
                    value={userData.message}
                   onChange={postUserData}/></div>
                <button type="submit" onClick={submitData}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
