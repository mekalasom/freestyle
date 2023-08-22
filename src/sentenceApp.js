import React , {useState} from "react";

const SentenceApp = () => {
    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = () => {
        console.log('entererd text ', text);
    }
    return (
        <div>
            <div className="title-headings">
                <h3> Selection Application </h3> </div>
            <div>
                 <textarea
                    rows={5} cols={50} 
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter your text here..."/>
            </div>
            <button onClick={handleSubmit}>Apply To Release.</button>
        </div>
    );
}

export default SentenceApp;