function Accordion({question,answer}) {
    return ( 
        <>
            <details className="accordion">
                    <summary className="question">
                        {question}
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    </summary>
                    <div className="answer">
                        <p className="answer-w">
                            {answer}
                        </p>  
                    </div>
            </details>
            <hr className="hr-accordion"/>
        </>
        
     );
}

export default Accordion;