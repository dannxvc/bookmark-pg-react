import Button from './Button';
function FeatureBox({title,description,img}) {
    return (  
        <div className="feature-box">     
            <div>
            {img}
            </div>
            <div>
                <h3 className="feature-title">{title}</h3>
                <p>{description}</p>
            
                <Button
                    text={"More Info"}
                    classButton="btn btn-blue"
                />
            </div>
        </div>
    );
}

export default FeatureBox;