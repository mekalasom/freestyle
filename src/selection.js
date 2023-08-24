import React, { useState } from "react";
import DropdownMenu from "./dropdownMenu.js";
import './style.css';

const Selection = () => {
    const workManagement = ['Agility', 'Jira', 'Servicenow'];
    const scm = ['Bitbucket', 'Github', 'Gitlab'];
    const buildCi = ['Devops', 'Actions', 'Jenkins'];
    const artifactory = ['Jfrog', 'Nexus'];
    const CD = ['Argocd' , 'Devops', 'DAI Deploy'];
    const security = ['Blackduck', 'Checkmarkx', 'SonarQube'];
   
    const [selectedValuesMap, setSelectedValuesMap] = useState(new Map());

    const handleDropdownSelect = (dropdownName, selectedValue) => {
        const updatedMap = new Map(selectedValuesMap);
        updatedMap.set(dropdownName, selectedValue.toLowerCase());
        setSelectedValuesMap(updatedMap);
    };

    const handleOnClick = async () => {
        console.log('Downloading yaml !');
        const selectedValuesJSON = JSON.stringify(Object.fromEntries(selectedValuesMap));
        console.log(selectedValuesJSON);
		
		const response = await fetch('http://localhost:9093/selection', {
			  method: 'POST',
			  body: selectedValuesJSON,
			  headers: {
				'Content-Type': 'application/json',
				'Accept':'*/*'
			  }
			});
		const result = await response.json();
		console.log(result);
        
    };

    return (
    <div>
        <div className="title-headings">
        <h4>Build you template using the below dropdown list </h4></div>
    <DropdownMenu templateOptions={workManagement} 
                  labelName="WorkManagement" 
                  placeholder="Select a workMangement"
                  onSelect={(value) => handleDropdownSelect('workManagement', value)}/>
    
    <DropdownMenu templateOptions={scm} 
                  labelName="SCM" 
                  placeholder = "Select a SCM tool"
                  onSelect={(value) => handleDropdownSelect('scm', value)}/>  

    <DropdownMenu templateOptions={buildCi} 
                  labelName="Build CI" 
                  placeholder = "Select a Build CI tool"
                  onSelect={(value) => handleDropdownSelect('buildCI', value)}/>  

    <DropdownMenu templateOptions={artifactory} 
                  labelName="Artifactory" 
                  placeholder = "Select a artifactory"
                  onSelect={(value) => handleDropdownSelect('artifactory', value)}/>  
    
    <DropdownMenu templateOptions={CD} 
                  labelName="CD" 
                  placeholder = "Select a CD"
                  onSelect={(value) => handleDropdownSelect('cd', value)}/>
    
    <DropdownMenu templateOptions={security} 
                  labelName="Security" 
                  placeholder = "Select a security"
                  onSelect={(value) => handleDropdownSelect('security', value)}/>  
    <div>
        <button onClick={handleOnClick}> Apply to Release  </button>
    </div>
    </div>
    );
}

export default Selection;
