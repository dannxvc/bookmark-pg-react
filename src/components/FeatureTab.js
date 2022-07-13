import { useState } from "react";
import FeatureBox from "./shared/FeatureBox";
import '../css/FeatureTab.css';
import { default as FeatureOne } from '../img/illustration-features-tab-1.svg';
import { default as FeatureTwo } from '../img/illustration-features-tab-2.svg';
import { default as FeatureThree } from '../img/illustration-features-tab-3.svg';
//import {ReactComponent as FeatureOne} from '../img/illustration-features-tab-1.svg';
// import {ReactComponent as FeatureTwo} from '../img/illustration-features-tab-2.svg';
// import {ReactComponent as FeatureThree} from '../img/illustration-features-tab-3.svg';
function FeatureTab() {

    
    const [value,setValues]= useState(1);
    const featureItems = {
        1: {
            title: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            img:<img className="img-f" src={FeatureOne} alt="Bookmark"/>
        },
        2: {
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            img:<img className="img-f" src={FeatureTwo} alt="Intelligent Search"/>
        },
        3: {
            title: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            img:<img className="img-f" src={FeatureThree} alt="Share Bookmarks"/>
        },
    };

    return (
        <div className="feature">
            <div className="feature-btns">
                <button className="btn-feature" onClick={() => setValues(1)}>Simple Bookmarking</button>
                <button className="btn-feature" onClick={() => setValues(2)}>Speedy Searching</button>
                <button className="btn-feature" onClick={() => setValues(3)}>Easy Sharing</button>
            </div>
            <FeatureBox
                title={featureItems[value]["title"]}
                description={featureItems[value]["description"]}
                img={featureItems[value]["img"]}
            />
            
        </div>
    );
}

export default FeatureTab;
