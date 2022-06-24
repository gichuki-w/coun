import React from 'react'
// import {useState} from 'react'


function List({oneCountry}) {


  const name = oneCountry.name.common
  const capital = oneCountry.capital
  const subRegion = oneCountry.subregion
  const region = oneCountry.region
  

  // const [name, setName] = useState(null)

  // const country = () => {
  //   setName(oneCountry.name.common)
  // }  
  // country()
  // console.log(oneCountry)

  return (
    <div>
      {name}
      {capital}
      {region}
      {subRegion}
      
    </div>
  )
}

export default List
