import React from 'react'
import './Contact.css'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a34706d3-5cb3-483b-ab54-64b350d5a586");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };

    return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send Us A Message <img src="https://th.bing.com/th/id/OIP.gYHLbGhMxqXb7j71P_8XVwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='msgbox'/> </h3>
        <p>
            Feel Free to Reach Out through contact from or find our contact information below. your 
            feedback,Question,and suggestions are important to us we strive to provide, and suggestions
            are important to us we strive to provide exceptional service to our Company 
        </p>
        <ul>
            <li><img src="https://th.bing.com/th/id/OIP.UucVRWGPR85penwOoAXSngHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="phone" />+91 95795 15126
            ,+91 755 917 2475</li>
            <li><img src="https://th.bing.com/th/id/OIP.2vUIhn5smzWehchkpgolMgHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="email" />nishantspatil04@gmail.com
            ,sawantparth303@gmail.com</li>
            <li><img src="https://th.bing.com/th/id/OIP.AmyziwaCekmkaQf1fkM5-wHaHa?w=601&h=601&rs=1&pid=ImgDetMain" alt="adress" />Adrresss</li>
        </ul>
       </div>
       <div className='contct-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="Name" placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name="Phone-no" placeholder='Enter Your Mobile-no' required/>
            <label>Write Your Message here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='sumbit' className='btn dark-btn'>Sumbit it!!</button>
            </form>
            <span>
             {result}
            </span>
       </div>
    </div>
  )
}

export default Contact