import React, { useState } from "react";
import App from "../Styles/App.css";

const InformationAnnonce = ({ prix, titre, description }) => {
  const [prixSaisi, setPrixSaisi] = useState(prix);
  const [titreSaisi, setTitreSaisi] = useState(titre);
  const [descriptionSaisie, setDescriptionSaisie] = useState(description);

  const handlePrixChange = (event) => {
    const newPrix = event.target.value;
    setPrixSaisi(newPrix);
  };

  const handleTitreChange = (event) => {
    const newTitre = event.target.value;
    setTitreSaisi(newTitre);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescriptionSaisie(newDescription);
  };

  return (
    <div className="annonce">
      <form>
        <div className="prix">
          <label htmlFor="prix" className="formLabel">Prix:</label>
          <input type="number" id="prix" value={prixSaisi} placeholder="0" onChange={handlePrixChange} className="formInputtxt" required/>
        </div>

        <div className="titre">
          <label htmlFor="titre" className="formLabel">Titre:</label>
          <input type="text" id="titre" value={titreSaisi} placeholder="Titre de l'annonce" onChange={handleTitreChange} className="formInputtxt" required/>
        </div>

        <div className="description">
          <label htmlFor="description" className="formLabel">Description:</label>
          <input type="text" id="description" value={descriptionSaisie} onChange={handleDescriptionChange} className="formInputtxt" required/>
        </div>
      </form>
    </div>
  );
};

export default InformationAnnonce;