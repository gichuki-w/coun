import React from 'react'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import Jogi from './Jogi'

export default function Countries() {
  
  const [dataArray, setDataArray] = useState([])
  const [loading, setloading] = useState(true)
  const queue = '/name/ken'

  // // check local storage - use elsewhere
  // const check = localStorage.getItem('world')
  // if (check) {
  //   setDataArray(JSON.parse(check))
  // } else {
  // }
  
  useEffect(() => {

  const getData = async () => {
    await Jogi.get(queue)
      .then((res) => {setDataArray(res.data)
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
            <div>Loading</div>
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
