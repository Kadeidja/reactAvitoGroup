import { useState } from "react"


const AddCar = () => {
    // const[model, setModel] = useState('')
    // const[motorisation, setMotorisation] = useState('')
    // const[km, setKm] = useState('')

    // const handleModelCar = e => {

    //     setModel(e.target.value);

    // }

    // const handleMotorisation = e => {
    //     setMotorisation(e.target.value);
    // }

    // const handleKm = e => {
    //     setKm(e.target.value);
    // }

    

    const [formData, setFromData] = useState({
        model : '',
        motorisation: '',
        km : '',
        etat: false,
    })

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        const checkValue = type === "checkbox" ? checked : value;
        setFromData(prevState => ({
            ...prevState,
            [name]: checkValue
        }));
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("FormData", formData)
        // const newEtat = formData.etat ? "neuf" : "occasion";
        // setFromData((prevState) => ({
        //   ...prevState,
        //   etat: newEtat,
        ;
        console.log("Model:", formData.model);
        console.log("Motorisation:", formData.motorisation);
        console.log("KM:", formData.km);
        console.log('etat:', formData.etat);
    }

    const activeButton = 
        formData.model.length >= 4 && formData.km > 0 && formData.motorisation;


    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Modèle : </label>
            <input name='model' value={formData.model} onChange={handleChange} minLength={4} required/>
            </div>
            <div>
                <label>Motorisation :</label>
                <select name='motorisation' value={formData.motorisation} onChange={handleChange} required>
                    <option value="">--Choisissez une motorisation--</option>
                    <option value="Essence">Essence</option>
                    <option value="Diesel">Diesel</option>
                    <option value="electrique">electrique</option>
                </select>
            </div>
            <div>
                <label>KM : </label>
                <input name='km' type='number' value={formData.km} onChange={handleChange} min={0} required/>
            </div>
            <div>
                <label>Etat Neuf?</label>
                <input
                 type='checkbox'
                  name='etat'
                 checked={formData.etat}
                 onChange={handleChange}
                  />
            </div>
            <button disabled={!activeButton}>Ajouter ma voiture</button>
        </form>
    )

    }

    export default AddCar;

