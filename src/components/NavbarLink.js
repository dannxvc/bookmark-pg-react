function Navbarlink() {
    const navItems = [
        <a href="/">FEATURES</a>,
        <a href="/">PRICING</a>,
        <a href="/">CONTACT</a>,
        <a href="/">LOGIN</a>
    ];
    return (
        <div>
            {navItems.map((link, i) => (
                <div>{link}</div>
            ))}
        </div>
    );
}

export default Navbarlink;