import "../../css/Button.css";
function Button({text,classButton }) {
    return ( 
        <button className={classButton}>
                {text}
        </button>
        
     );
}

export default Button;