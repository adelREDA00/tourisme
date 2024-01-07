import React from 'react';
import { Icon } from '@iconify/react';



export default function TransitionAlerts({fdata,handleSubmit,modalState,handleBookClose}) {

  return (
//show & block to show 
    <div className={`modal ${modalState ? 'showM' : ''} ` } >
   
      <div  className={`modal-content ${modalState ? 'show' : ''} ` } >
        <div className="modal-header">
          <h3>Confirmation <span className="close" onClick={handleBookClose}>&times;</span></h3>
        </div>
        <div className="modal-body">
        <Icon icon="game-icons:airplane-departure" />
          <h1> {fdata.departureCity} </h1>
          <br />
          <hr />
          <br />
          <Icon className="plane"  icon="material-symbols-light:flight-land" />
          <h1>{fdata.arrivalCity}</h1>
          
        </div>
        <div className="modal-footer">
        
          <button onClick={handleSubmit} > <Icon icon="material-symbols-light:airplane-ticket-outline" className='Icon' />Réserver le Vol</button>
        </div>
      </div>
    </div>

  );
}