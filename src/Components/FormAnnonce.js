import React, { useState } from "react";
import ListeDeroulante from "./ListeDeroulante";
import InformationAnnonce from "./InformationAnnonce";
import Showquestion from "./Bubllyquestion";
import { defaultsData, carburantData, stateData, originData, GearBox, porteData, premiereData, moreData } from "../Datas/datastest";


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
        { value: "ferrari", label: "ferrari" },
        { value: "ferrari", label: "ferrari" }
      ];


  return (
    <div>
        <div>
        <ListeDeroulante options={kilometrage} label="Kilométrage" defaultValue="Selectionner" />
        <ListeDeroulante options={marque} label="Marque" defaultValue="Selectionner" />
        <ListeDeroulante options={modeleAnnee} label="Modèle Année" defaultValue="Selectionner" />
        <ListeDeroulante options={puissance} label="Puissance" defaultValue="Selectionner" />
        </div>
        <div>
          <Showquestion defaultsData={carburantData}/>
          <Showquestion defaultsData={GearBox}/>
          <Showquestion defaultsData={stateData}/>
          <Showquestion defaultsData={originData}/>
          <Showquestion defaultsData={porteData}/>
          <Showquestion defaultsData={premiereData}/>
        </div>
        <div>
        <InformationAnnonce prix="" titre="" description="" />
        </div>
        <div>
          <Showquestion defaultsData={moreData}/>
        </div>
        
    </div>
  );
}

export default FormAnnonce;