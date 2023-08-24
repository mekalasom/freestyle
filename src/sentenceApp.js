import React , {useState} from "react";

const SentenceApp = () => {
    const [text, setText] = useState('');
    const [mapObject, setMapObject] = useState(new Map());

    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = async () => {
        console.log('entererd text ', text);
        const newMap = new Map(mapObject);
        newMap.set('inputText', text);
        setMapObject(newMap);
        
        const descriptionJSON = JSON.stringify(Object.fromEntries(newMap));
        console.log(descriptionJSON);

        const response = await fetch('http://localhost:9093/description', {
			  method: 'POST',
			  body: descriptionJSON,
			  headers: {
				'Content-Type': 'application/json',
				'Accept':'*/*'
			  }
			});
			const result = await response.json();
			console.log(result);


    }

    return (
        <div >
            <div className="title-headings">
                <h3>Sentence Based YAML generation -Application </h3> </div>
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