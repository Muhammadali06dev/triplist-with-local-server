import React from 'react'

function TripsList({ trips }) {
   console.log(trips)
   return (
      <ul className='trip__list'>
         {trips && trips.map((trip) => {
            return (
               <li
                  className='trip__item'
                  key={trip.id}>
                  <h2>Country: {trip.title}</h2>
                  <h4>Price: {trip.price}</h4>
               </li>
            )
         })}
      </ul>
   )
}

export default TripsList