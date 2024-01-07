import {useState,useEffect} from 'react'
import axios from 'axios';

const Aform = ({handlePostSuccess}) => {

    const [flightValues, setFlightValues] = useState({
        flightNumber: '',
        departureCity: '',
        arrivalCity: '',
        departureTime: '',
        arrivalTime: '',
        price:0,
        availableSeats:0,
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
  
        setFlightValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));

      };

      const handleSubmit = async (e) => {
          e.preventDefault();
          const key = localStorage.getItem("token"); // Replace with your actual authentication token
          const config = {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          };
    
          try {
           const res =  await axios.post('http://localhost:5000/api/flight', flightValues, config);
           console.log(res);
           handlePostSuccess()
    
          }catch (err) {
            console.log(err.response.data);
          }
        
      };

      //login the data that we will send
      useEffect(() => {
        console.log(flightValues); // Logs flightValues whenever it changes
      }, [flightValues]);

  return (

    <form action="" className="hero-form">

    <div className="input-wrapper">

      <label htmlFor="search" className="input-label">Depart :</label>

      <input type="search" name="departureCity" id="search" placeholder="Lieu de départ" onChange={handleInputChange} value={flightValues.departureCity}  required
        className="input-field" />

      <ion-icon name="search-outline"></ion-icon>

    </div>

    <div className="input-wrapper">

<label htmlFor="search" className="input-label">Destination :</label>

<input type="search" name="arrivalCity" onChange={handleInputChange} value={flightValues.arrivalCity}  id="search" placeholder="destination" required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>


<div className="input-wrapper">

<label htmlFor="search" className="input-label"> Numéro de vol :</label>

<input  type="number" name="flightNumber"onChange={handleInputChange} value={flightValues.flightNumber} id="search" placeholder="XXX-1514-857" required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>


<div className="input-wrapper">

<label htmlFor="search" className="input-label">Prix :</label>

<input  type="number" name="price"onChange={handleInputChange} value={flightValues.price} id="search" placeholder="XX €" required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>


<div className="input-wrapper">

<label htmlFor="search" className="input-label">Heure de départ :</label>

<input type="search" name="departureTime"onChange={handleInputChange} value={flightValues.departureTime} id="search" placeholder="5:20 PM " required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>



<div className="input-wrapper">

<label htmlFor="search" className="input-label">Heure d'arrivée:</label>

<input type="search" name="arrivalTime"onChange={handleInputChange} value={flightValues.arrivalTime} id="search" placeholder="8:01 PM" required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>

<div className="input-wrapper">

<label  className="input-label">Places disponibles :</label>

<input  type="number" name="availableSeats"onChange={handleInputChange} value={flightValues.availableSeats} id="search" placeholder="YYY" required
  className="input-field" />

<ion-icon name="search-outline"></ion-icon>

</div>
{/* 
    <div className="input-wrapper">
      <label htmlFor="category" className="input-label">Sélectionner des catégories :</label>

      <select name="category" id="category" className="dropdown-list">

        <option value="house">Maison</option>
        <option value="apartment">Appartement</option>
        <option value="offices">Bureaux</option>
        <option value="townhome">Maison de ville</option>

      </select>
    </div>

    <div className="input-wrapper">
      <label htmlFor="min-price" className="input-label">Min Prix  :</label>

      <select name="min-price" id="min-price" className="dropdown-list">

        <option value="min price">Min Prix </option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="3000">3000</option>
        <option value="4000">4000</option>
        <option value="5000">5000</option>
        <option value="6000">6000</option>

      </select>
    </div>

    <div className="input-wrapper">
      <label htmlFor="max-price" className="input-label">Max Prix  :</label>

      <select name="max-price" id="max-price" className="dropdown-list">

        <option value="max price">Max Prix </option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="3000">3000</option>
        <option value="4000">4000</option>
        <option value="5000">5000</option>
        <option value="6000">6000</option>

      </select>
    </div> */}

    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Enregistrer le vol</button>

  </form>
  )
}

export default Aform