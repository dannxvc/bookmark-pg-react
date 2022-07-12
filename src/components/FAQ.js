import Section from "./Section";
import Accordion from "./shared/Accordion";
import Button from "./shared/Button";

function FAQ() {
    const faqItems = {
        1: {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        2: {
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
        },
        3: {
            question: "Is there a mobile app?",
            answer: " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
        },
        4: {
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
        },
    };
    return ( 
        <Section>
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
            </p>
            {Object.keys(faqItems).map((key, i) => (
                <Accordion
                    key={key}
                    question={faqItems[key]["question"]}
                    answer={faqItems[key]["answer"]}
                />
            ))}
            <Button
                classButton=""
                text="More Info"
            />
        </Section>
        
     );
}

export default FAQ;