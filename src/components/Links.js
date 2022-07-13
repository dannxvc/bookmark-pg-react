import "../css/Link.css";
function Links({classLink}) {
    const navItems = [
        <a className={classLink} href="#features">FEATURES</a>,
        <a className={classLink} href="#download">PRICING</a>,
        <a className={classLink} href="#contact">CONTACT</a>
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