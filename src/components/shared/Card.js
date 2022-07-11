import Button from "./Button";

function Card({BrowserSVG,title,subtitle}) {
    return ( 
        <div>
            <BrowserSVG></BrowserSVG>
            <p>{title}</p>
            <span>{subtitle}</span>
            <hr></hr>
            <Button
                text={"Add & Install Extension"}
            />
        </div>
     );
}

export default Card;