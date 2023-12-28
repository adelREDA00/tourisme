import React from 'react'
import { Icon } from '@iconify/react';

const Card = ({fdata}) => {
  console.log(fdata);
  return (
    <li>
    <div className="property-card">
{/* 
      <figure className="card-banner img-holder" style={{ '--width': '800', '--height': '533' }} >
        <img src={about} width="800" height="533" loading="lazy"
          alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA" className="img-cover" />
      </figure> */}

      <button className="card-action-btn" aria-label="add to favourite">
        <ion-icon name="heart" aria-hidden="true"></ion-icon>
      </button>

      <div className="card-content">
        <div className="depart">
        <Icon className="plane" icon="material-symbols-light:flight" />

<h3 className="h3">
  <a href="#" className="card-title"> {fdata.departureCity} </a>
</h3>
        </div>        

        <ul className="card-list ">

          <li className="card-item ">

            <div className="arrive">
            <Icon className="plane"  icon="material-symbols-light:flight-land" />
        <h3 className="h3">
          <a href="#" className="card-title">{fdata.arrivalCity}</a>
        </h3>
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
            <span className="meta-title">Price</span>

            <span className="meta-text">${fdata.price}</span>
          </div>

          <button className="tab-btn " >Acheter</button>

          <div>
            <span className="meta-title">seats</span>

            <span className="meta-text">

              <div className="rating-wrapper">
              <Icon icon="material-symbols-light:airline-seat-recline-extra" />
              </div>

              <span>{fdata.availableSeats}</span>

            </span>
          </div>

        </div>

      </div>

    </div>
  </li>
  )
}

export default Card