import { useState } from 'react'
import { Icon } from '@iconify/react';
import TransitionAlerts from "../comp/TransitionAlerts"
import axios from 'axios';

const Card = ({ fdata, user, handlePostSuccess }) => {

  const [modalState, setmodalState] = useState(false)
  const handleBook = () => {
    if (user == null) {
      return
    } else {
      setmodalState(true)
    }
  }

  const handleBookClose = () => {
    setmodalState(false)
  }
  //need also to delete the reservation when we delete the flight
  const handleDelete = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const res = await axios.delete(`http://localhost:5000/api/flight/${fdata._id}`, config);
      console.log(res);
      //we can only remove it from the ui so no need to do the fetching again 
      handlePostSuccess()
    } catch (err) {
      console.log(err.response.data);
    }

  };

  const handleSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const res = await axios.post('http://localhost:5000/api/reservations', {
        user: user._id,
        flight: fdata._id,
        passengerName: user.username,
        seatNumber: "12", // Depending on how seats are assigned
      }, config);
      console.log(res);
      setmodalState(false)
    } catch (err) {
      console.log(err.response.data);
    }

  };
  return (
    <li>
      <div className="property-card">
        {/* 
      <figure className="card-banner img-holder" style={{ '--width': '800', '--height': '533' }} >
        <img src={about} width="800" height="533" loading="lazy"
          alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA" className="img-cover" />
      </figure> */}

        {user && user.isAdmin && (
          <button onClick={handleDelete} className="card-action-btn" aria-label="add to favourite">
     <Icon icon="typcn:delete" />
          </button>
        )}




        <div className="card-content">

          <div className="depart">
          <Icon icon="game-icons:airplane-departure" />

            <h3 className="h3">
              <a href="#" className="card-title"> {fdata.departureCity} </a>
            </h3>

            <span className='info' >
            <Icon icon="carbon:time" /> Départ
              <a href="#"> {fdata.departureTime} </a>
            </span>
          </div>

          <ul className="card-list ">

            <li className="card-item ">

              <div className="arrive">
                <Icon className="plane" icon="material-symbols-light:flight-land" />
                <h3 className="h3">
                  <a href="#" className="card-title">{fdata.arrivalCity}</a>
                </h3>

                <span className='info' >
                <Icon icon="ion:time-outline" /> Destination
              <a href="#" > {fdata.arrivalTime} </a>
            </span>
              </div>
              {/* <div className="item-icon">
              <ion-icon name="cube-outline"></ion-icon>
            </div> */}

            </li>

            {/* <li className="card-item">
            <div className="item-icon">
              <ion-icon name="bed-outline"></ion-icon>
            </div>

            <span className="item-text">4 Beds</span>
          </li>

          <li className="card-item">
            <div className="item-icon">
              <ion-icon name="man-outline"></ion-icon>
            </div>

            <span className="item-text">4 Baths</span>
          </li> */}

          </ul>

          <div className="card-meta">

            <div>
              <span className="meta-title">Prix</span>

              <span className="meta-text">{fdata.price} €</span>
            </div>


            <button className="tab-btn " onClick={handleBook} > <Icon icon="material-symbols-light:airplane-ticket-outline" /> Acheter</button>

            <div>
              <span className="meta-title">Places</span>

              <span className="meta-text">



                <span>{fdata.availableSeats}</span>
                <div className="rating-wrapper">
                  <Icon icon="material-symbols-light:airline-seat-recline-extra" />
                </div>

              </span>
            </div>

          </div>

        </div>
        {/* dialog */}
        <TransitionAlerts fdata={fdata} handleSubmit={handleSubmit} handleBookClose={handleBookClose} modalState={modalState} />
      </div>
    </li>
  )
}

export default Card