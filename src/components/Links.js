import "../css/Link.css";
function Links({classLink, classUl}) {
    const navItems = [
        <a className={classLink} href="#features">FEATURES</a>,
        <a className={classLink} href="#download">PRICING</a>,
        <a className={classLink} href="#contact">CONTACT</a>
    ];
    return (
        <ul className={classUl}>
            {navItems.map((link) => (
                <>
                    <li key={link} className="link">{link}</li>
                </>
                ))}
        </ul>
    );
}

export default Links;