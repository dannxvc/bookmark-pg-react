import Button from "./shared/Button";
import "../css/Link.css";
function Navbarlink() {
    const navItems = [
        <a href="/">FEATURES</a>,
        <a href="/">PRICING</a>,
        <a href="/">CONTACT</a>
    ];
    return (
        <>
            {navItems.map((link, i) => (
                <div className="link">{link}</div>
            ))}
            <Button
                text="LOGIN"
                classButton="btn btn-red"
            />
        </>
    );
}

export default Navbarlink;