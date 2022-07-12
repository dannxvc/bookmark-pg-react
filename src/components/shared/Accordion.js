function Accordion({question,answer}) {
    return ( 
        <details className="accordion">
                <summary className="question">
                    {question}
                </summary>
                <div className="answer">
                    <p>
                        {answer}
                    </p>  
                </div>
        </details>
     );
}

export default Accordion;