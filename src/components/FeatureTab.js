import { useState } from "react";
import FeatureBox from "./shared/FeatureBox";
import '../css/FeatureTab.css';
import { default as FeatureOne } from '../img/illustration-features-tab-1.svg';
import { default as FeatureTwo } from '../img/illustration-features-tab-2.svg';
import { default as FeatureThree } from '../img/illustration-features-tab-3.svg';
function FeatureTab() {

    
    const [value,setValues]= useState("Simple Bookmarking");


    const featureItems = {
        "Simple Bookmarking": {
            title: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            img:<img className="img-f" src={FeatureOne} alt="Bookmark"/>
        },
        "Speedy Searching": {
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            img:<img className="img-f" src={FeatureTwo} alt="Intelligent Search"/>
        },
        "Easy Sharing": {
            title: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            img:<img className="img-f" src={FeatureThree} alt="Share Bookmarks"/>
        },
    };

    return (
        <div className="feature">
            <div className="feature-btns">
                {Object.keys(featureItems).map((feature)=>(
                    <button key={feature} className={`btn-feature ${value === feature&&"btn-feature-active"}`} value={value === feature} onClick={() => setValues(feature)}>{feature}</button>
                ))}
            </div>
            {Object.keys(featureItems).map((feature)=>(
            <FeatureBox
                key={feature}
                title={featureItems[feature]["title"]}
                description={featureItems[feature]["description"]}
                img={featureItems[feature]["img"]}
            />
            ))}
        </div>
    );
}

export default FeatureTab;
