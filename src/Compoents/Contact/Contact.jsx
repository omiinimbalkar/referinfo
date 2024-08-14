import React from 'react'
import './Contact.css'
import insta from '../../assets/social.png'
import gmail from '../../assets/gmail.png'
import phone from '../../assets/telephone.png'
import adress from '../../assets/adress.png'
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
            <li><img src={phone} alt="phone" />+91 95795 15126
            ,+91 755 917 2475</li>
            <li><img src={gmail} alt="email" /><a href="techunir5@gmail.com">techunir5@gmail.com</a></li>
            <li><img src={adress} alt="adress" />Adrresss</li>
            <li><img src={insta} alt="insta" /><a href="https://www.instagram.com/spotezypay10?igsh=MTdsa2VkZGdpeG52MQ==">spotezpay</a></li>
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