import React , {useState} from "react";

const SentenceApp = () => {
	
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);
	
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
		const result = "";
        const response = await fetch('http://localhost:9093/description', {
			  method: 'POST',
			  body: descriptionJSON,
			  headers: {
				'Content-Type': 'application/json',
				'Accept':'*/*'
			  }
			}).then((response) => {
                if (response.status === 200) {
                    setShowSuccessPopup(true);
                }
				const result = response.json();
            });
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
            <button onClick={handleSubmit}>Apply To Release</button>
			{showSuccessPopup && (
                <div className="popup">
                    <p>Success !!! you can view your template created in Digital.ai Release</p>
			</div>)}
        </div>
    );
}

export default SentenceApp;