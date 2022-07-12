import "../css/Link.css";
function Links() {
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
        </>
    );
}

export default Links;