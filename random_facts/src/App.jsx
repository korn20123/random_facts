import React, { useState, useEffect } from 'react';
function App() {
    const [fact, setFact] = useState('');
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(fact);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const fetchFact = async () => {
        try {
            const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
            if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
            const data = await res.json();

            if(data.text){
                setFact(data.text);
            }
            else {
                throw new Error('no fact fount');
            }
        } catch(e) {
            console.log(e.message);
        } 
    };
    useEffect(() => {
        fetchFact();
    }, []);
    return(
        <div>
            <h1>random fun facts</h1>
            <p>{fact}</p>
            {copied && <p>copied</p>}
            <button onClick={copy} disabled={!fact}>copy</button>
            <button onClick={fetchFact}>reload fact</button>
        </div>
    );
}
export default Facts;