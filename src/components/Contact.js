import Section from "./Section";
import Button from "./shared/Button";
import '../css/Contact.css'
function Contact() {
    return ( 
        <Section id="contact" classSection="section-secondary section-contact">
            <p className="contact-des">35,000+ ALREADY JOIN</p>
            <h2 className="contact-subtitle">Stay up-to-date with what we’re doing</h2>
            <form>
                <input className="contact-input" placeholder="example@email.com"/>
                <Button
                    classButton="btn btn-red btn-contact"
                    text="Contact Us"
                />
            </form>
        </Section>
     );
}

export default Contact;