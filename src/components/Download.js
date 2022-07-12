import Section from "./Section";
import "../css/Download.css";
import Card from "./shared/Card";
import {ReactComponent as chromeSVG} from '../img/logo-chrome.svg';
import {ReactComponent as firefoxSVG} from '../img/logo-firefox.svg';
import {ReactComponent as operaVG} from '../img/logo-opera.svg';
function Download() {
    return ( 
        <Section id="download" classSection="section-secondary">
            <h2>
                Download the extension
            </h2>
            <p className="section-description">
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
            <div className="cards">
                <Card
                    BrowserSVG={chromeSVG}
                    title={"Add to chrome"}
                    subtitle={"Minimum version 62"}
                />
                <Card
                    BrowserSVG={firefoxSVG}
                    title={"Add to Firefox"}
                    subtitle={"Minimum version 55"}
                />
                <Card
                    BrowserSVG={operaVG}
                    title={"Add to Opera"}
                    subtitle={"Minimum version 46"}
                />
            </div>
        </Section>
     );
}

export default Download;