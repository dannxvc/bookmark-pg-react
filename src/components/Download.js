import Section from "./Section";
import Card from "./shared/Card";
import {ReactComponent as chromeSVG} from '../img/logo-chrome.svg';
import {ReactComponent as firefoxSVG} from '../img/logo-firefox.svg';
import {ReactComponent as operaVG} from '../img/logo-opera.svg';
function Download() {
    return ( 
        <Section>
            <h2>
                Download the extension
            </h2>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
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
        </Section>
     );
}

export default Download;