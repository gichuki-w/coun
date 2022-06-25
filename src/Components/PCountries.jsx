import React from 'react'
import {useParams} from 'react-router-dom'
import Jogi from './Jogi'
import { useState, useEffect } from 'react';


export default function PCountries() {

  let params = useParams()
  console.log(params.name)

  const [dataArray, setDataArray] = useState([])
  const [loading, setloading] = useState(true)


  useEffect(() => {

  const getData = async () => {
    await Jogi.get('/name/' + params.name)
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
  }, [params.name])

  // console.log(dataArray)
  // console.log(loading)

  return (
  <div>
      {loading ?
        <div> Loading </div>
        :
    <div>
      {dataArray.map((c, idx) => {
        return (
          <div
          key={c.name.common}
          >
            <p>{c.name.common}</p>
            <img src={c.flags.png} alt='flag'/>
            <p>{c.capital.map( c => {return ( <>{c}</>)} )}</p>
          </div>
        )
      })}
      </div>
    }
      </div>
  )
}
