import "../css/Section.css";
function Section({children, classSection}) {
    return ( 
        <section className={classSection}>
            {children}
        </section>
     );
}

export default Section;