import "../../css/Button.css";
function Button({typeButton,text,classButton }) {
    return ( 
        <button type={typeButton} className={classButton}>
                {text}
        </button>
        
     );
}

export default Button;