import Section from "./Section";
import Button from "./shared/Button";
import "../css/Intro.css";
import {ReactComponent as HeroSVG} from '../img/illustration-hero.svg';

function Intro() {
    return ( 
        <Section id="intro"
            classSection="section-intro"
        >
            <div className="intro">
                <h1 className="title">A Simple Bookmark Manager</h1>
                <p className="intro-des">A clean and simple interface to organize your favourite websites. Open a new 
    browser tab and see your sites load instantly. Try it for free.</p>
                <Button 
                    text={"Get it on Chrome"}
                    classButton="btn btn-blue"
                />
                <Button 
                    text={"Get it on Firefox"}
                    classButton="btn btn-white"
                />
            </div>
            <HeroSVG className="img-hero"></HeroSVG>
            
        </Section>
     );
}

export default Intro;