import "../css/Section.css";
function Section({children, classSection,id}) {
    return ( 
        <section id={id} className={classSection}>
            {children}
        </section>
     );
}

export default Section;