import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "./App.css"

export const App = () => {
  const[citilist,setCitilist] = useState([]);


  useEffect (() => {
       axios.get('http://localhost:3001')
      .then(res => setCitilist(res.data))
      .catch((e) => console.log(e))
    
  
    
  })
  return (
    <div>
      <h1>City list</h1>
    {
    citilist.map((city) => {
      
    return(
      
      <div className='card' key={city.id}>
      <div className='item'>
        <table>
          <tr>
            < td> 
                City: {city.name}
            </td>
            <td> State: {city.state}</td>
          </tr>
        </table>
      </div>

      </div>
      )})
    }

    </div>
    
  );
  }
