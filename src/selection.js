import React, { useState } from "react";
import DropdownMenu from "./dropdownMenu.js";
import './style.css';

const Selection = () => {
    const workManagement = ['Agility', 'Jira', 'Servicenow'];
    const scm = ['Bitbucket', 'Git', 'Teamforge'];
    const buildCi = ['Azure devops', 'Docker', 'github Actions', 'Jenkins'];
    const artifactory = ['Azure devops', 'Jfrog', 'Nexus'];
    const CD = ['ArgoCD' , 'Azure devops', 'DAI Deploy'];
    const security = ['Blackduck', 'Checkmarkx', 'SonarQube'];
    const provision = ['Anisble', 'AWS', 'Azure', 'Helm', 'Terraform'];
    const secretsManagement = ['AWS Secret manager', 'Azure vault', 'Conjour', 'HasicorpVaule'];


    const [selectedValuesMap, setSelectedValuesMap] = useState(new Map());

    const handleDropdownSelect = (dropdownName, selectedValue) => {
        const updatedMap = new Map(selectedValuesMap);
        updatedMap.set(dropdownName, selectedValue);
        setSelectedValuesMap(updatedMap);
    };

    const handleOnClick = () => {
        console.log('Apply in release !');
        for (const [dropdownName, selectedValue] of selectedValuesMap) {
            console.log(`Map values..... ${dropdownName}: ${selectedValue}`);
        }
        const selectedValuesJSON = JSON.stringify(Object.fromEntries(selectedValuesMap));
        console.log(selectedValuesJSON);
    };

    return (
    <div>
        <div className="title-headings">
        <h4>Build you template using ......</h4></div>
    <DropdownMenu templateOptions={workManagement} 
                  labelName="workManagement" 
                  placeholder="Select a workMangement"
                  onSelect={(value) => handleDropdownSelect('workManagement', value)}/>
    
    <DropdownMenu templateOptions={scm} 
                  labelName="scm" 
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

    <DropdownMenu templateOptions={provision} 
                  labelName="Provision" 
                  placeholder = "Select a provision"
                  onSelect={(value) => handleDropdownSelect('provision', value)}/>  
    
    <DropdownMenu templateOptions={secretsManagement} 
                  labelName="SecretsManagement" 
                  placeholder = "Select a secretsManagement"
                  onSelect={(value) => handleDropdownSelect('secrets', value)}/>  
    <div>
        <button onClick={handleOnClick}>Apply in Release</button>
    </div>
    </div>
    );
}

export default Selection;
