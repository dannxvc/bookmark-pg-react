import Section from "./Section";
import Button from "./shared/Button";

function Contact() {
    return ( 
        <Section>
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form>
                <input placeholder="example@email.com"/>
                <Button
                    text="Contact Us"
                />
            </form>
        </Section>
     );
}

export default Contact;