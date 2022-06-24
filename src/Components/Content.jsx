import {useState} from 'react'
import React from 'react'
import List from './List'
const Content = ({ initialCont }) => {

  const [oneCountry, setOneCountry] = useState(null)
  
  const handleClick = (event, val, index) => {
    event.preventDefault()
    setOneCountry(val)
  }
  
  const indData = initialCont.map((val, index) => {
    return (
      <div
        key={index}
          onClick={(event) => {
            handleClick(event, val, index)
        }}>
        <li
        >{val.name.common}</li>
        <img src={val.flags.png} alt="" />
      </div>)
  })


  return (
    <div>
      Content
      {indData}
      {oneCountry ? 
      <List
        oneCountry={oneCountry}
      /> : ''}
    </div>
  )
}

export default Content


