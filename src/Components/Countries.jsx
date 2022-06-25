import React from 'react'
import '../countries.css'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import Jogi from './Jogi'

export default function Countries() {
  
  const [dataArray, setDataArray] = useState([])
  const [loading, setloading] = useState(true)
  const queue = '/name/ken'
  
  useEffect(() => {

  const getData = async () => {
    await Jogi.get(queue)
      .then((res) => {
        setDataArray(res.data)
        setloading(false)
          
      .catch((err) => {console.log('JG, Theres an Error : ' + err)
      .finaly(() => {setloading(false)
            })
         })
      })
  }

    getData()
  }, [])
  // console.log(dataArray)
  // console.log(loading)
  return (
    <div>{loading ? 
            <div className='loadingOne'>Loading</div>
    : 
    <div>
      Countries
      {dataArray.map((c, idx) => {
        return (
          <div>
        <Link
          to={'/country/'+ c.name.common}
          key={idx}
          >
          <p>{c.name.common}</p>
          <img src={c.flags.png} alt='flag'/>
          <p>{c.capital.map( c => {return ( <>{c}</>)} )}</p>

            </Link>
            </div>
        )
      })}
      </div>
    }
      </div>
  )
}
