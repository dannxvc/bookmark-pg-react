import Button from "./Button";
import "../../css/Card.css";
function Card({BrowserSVG,title,subtitle}) {
    return ( 
        <div className="card">
            <BrowserSVG className="card-img"></BrowserSVG>
            <div>
               <h3>{title}</h3>
                <span className="card-subtitle">{subtitle}</span> 
            </div>
            <hr/>
            <Button
                classButton={"btn btn-card btn-blue"}
                text={"Add & Install Extension"}
            />
        </div>
     );
}

export default Card;