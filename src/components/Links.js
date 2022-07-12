import "../css/Link.css";
function Links() {
    const navItems = [
        <a href="#features">FEATURES</a>,
        <a href="#download">PRICING</a>,
        <a href="#contact">CONTACT</a>
    ];
    return (
        <>
            {navItems.map((link, i) => (
                <div className="link">{link}</div>
            ))}
        </>
    );
}

export default Links;