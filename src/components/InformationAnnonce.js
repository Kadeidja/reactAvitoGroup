import React, { useState } from "react";

const InformationAnnonce = ({ prix, titre, description }) => {
  const [prixSaisi, setPrixSaisi] = useState(prix);
  const [titreSaisi, setTitreSaisi] = useState(titre);
  const [descriptionSaisie, setDescriptionSaisie] = useState(description);

  const handlePrixChange = (event) => {
    const newPrix = event.target.value;
    setPrixSaisi(newPrix);
    console.log(newPrix);
  };

  const handleTitreChange = (event) => {
    const newTitre = event.target.value;
    setTitreSaisi(newTitre);
    console.log(newTitre);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescriptionSaisie(newDescription);
    console.log(newDescription);
  };

  return (
    <div className="annonce">
      <form>
        <div className="prix">
          <label htmlFor="prix">Prix:</label>
          <input type="number" id="prix" value={prixSaisi} placeholder="0" onChange={handlePrixChange} required/>
        </div>

        <div className="titre">
          <label htmlFor="titre">Titre:</label>
          <input type="text" id="titre" value={titreSaisi} placeholder="Titre de l'annonce" onChange={handleTitreChange} required/>
        </div>

        <div className="description">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={descriptionSaisie} onChange={handleDescriptionChange} required/>
        </div>
      </form>
    </div>
  );
};

export default InformationAnnonce;