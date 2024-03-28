import React, { useState } from "react";
import ListeDeroulante from "./ListeDeroulante";
import InformationAnnonce from "./InformationAnnonce";
import Showquestion from "./Bubllyquestion";
import { carburantData, stateData, originData, GearBox, porteData, premiereData, moreData } from "../Datas/datastest";


const FormAnnonce = () => {
    const kilometrage = [
        { value: "Sélectionner", label: "Sélectionner" },
        { value: "0", label: "0 - 4 999" },
        { value: "5000", label: "5 000 - 9 999" },
        { value: "10000", label: "10 000 - 14 999" },
        { value: "15000", label: "15 000 - 19 999" },
        { value: "20000", label: "20 000 - 24 999" }
      ];

      const puissance = [
        { value: "Sélectionner", label: "Sélectionner" },
        { value: "4CV", label: "4 CV" },
        { value: "5CV", label: "5 CV" },
        { value: "6CV", label: "6 CV" },
        { value: "7CV", label: "7 CV" },
        { value: "8CV", label: "8 CV" }
      ];

      const  modeleAnnee= [
        { value: "Sélectionner", label: "Sélectionner" },
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "<= 1980", label: "1980 ou plus ancien" }
      ];

      const marque = [
        { value: "Sélectionner", label: "Sélectionner" },
        { value: "Dacia", label: "Dacia" },
        { value: "Mercedes", label: "Mercedes" },
        { value: "ferrari", label: "ferrari" },
        { value: "porsch", label: "porsch" },
        { value: "renault", label: "renault" }
      ];

      const [annonceData, setAnnonceData] = useState({
        prix: "",
        titre: "",
        description: "",

      })

      const updateFormData = (fieldName, value) => {
        setAnnonceData((prevData) => ({...prevData, [fieldName]: value}))
      }

      const updateFormList = (fieldName, value) => {
        setAnnonceData((prevData) => ({
          ...prevData,
          [fieldName]: value}));
      };

      const handleFormData = () => {
        console.log("L'annonce :", annonceData)
      }


  return (
    <div>
        <div>
        <ListeDeroulante options={kilometrage} label="Kilométrage" defaultValue="Selectionner" updateSelection={updateFormList}/>
        <ListeDeroulante options={marque} label="Marque" defaultValue="Selectionner" updateSelection={updateFormList}/>
        <ListeDeroulante options={modeleAnnee} label="Modèle Année" defaultValue="Selectionner" updateSelection={updateFormList}/>
        <ListeDeroulante options={puissance} label="Puissance" defaultValue="Selectionner" updateSelection={updateFormList}/>
        </div>
        <div>
          <Showquestion defaultsData={carburantData} updateFormData={updateFormData} />
          <Showquestion defaultsData={GearBox} updateFormData={updateFormData}/>
          <Showquestion defaultsData={stateData} updateFormData={updateFormData}/>
          <Showquestion defaultsData={originData} updateFormData={updateFormData}/>
          <Showquestion defaultsData={porteData} updateFormData={updateFormData}/>
          <Showquestion defaultsData={premiereData} updateFormData={updateFormData}/>
        </div>
        <div>
        <InformationAnnonce prix={annonceData.prix} titre={annonceData.titre} description={annonceData.description}
          setAnnonceData={setAnnonceData} />
        </div>
        <div>
          <Showquestion defaultsData={moreData} updateFormData={updateFormData}/>
        </div>
        <button onClick={handleFormData}>Confirmer</button>
        
    </div>
  );
}

export default FormAnnonce;