import Section from "./Section";
import Button from "./shared/Button";
import '../css/Contact.css'
import { useState } from "react";
function Contact() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [errorClass, setErrorClass] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }
    const validate = () => {
        let isValid = true;
        const reg =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!reg.test(email)){
            setErrorClass("bg-red");
            setEmailError("Whoops, make sure it's an email");
            isValid = false;
        }
        return isValid;
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(validate()===true){
            alert("Sent!");
            setEmailError("");
            setErrorClass("");
            setEmail("");
        }
    }

    return ( 
        <Section id="contact" classSection="section-secondary section-contact">
            <p className="contact-des">35,000+ ALREADY JOIN</p>
            <h2 className="contact-subtitle">Stay up-to-date with what we’re doing</h2>
            <form onSubmit={handleSubmit}> 
                <div className="email-validate">
                    <input className="contact-input" placeholder="Enter your email address" name="email" value={email} onChange={handleInputChange}/>
                    <span className={`email-error ${errorClass}`} >{emailError}</span>
                </div>
                <Button
                    typeButton="submit"
                    classButton="btn btn-red btn-contact"
                    text="Contact Us"
                />
            </form>
        </Section>
     );
}

export default Contact;