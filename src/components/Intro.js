import Section from "./Section";
import Button from "./shared/Button";
import {ReactComponent as HeroSVG} from '../img/illustration-hero.svg';

function Intro() {
    return ( 
        <Section>
            <div>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>
            </div>
            <Button text={"Get it on Chrome"}></Button>
            <Button text={"Get it on Firefox"}></Button>
            <HeroSVG></HeroSVG>
        </Section>
     );
}

export default Intro;