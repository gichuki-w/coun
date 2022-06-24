import jogi from './jogi'
import Content from './Content'
import Header from './Header'
import { useState, useEffect } from 'react'
import React from 'react'


function Main() {

  const [initialCont, setInitialCont] = useState([])

  const queue = '/name/ke'

  useEffect(() => {
    const initialCall = async () => {
      try {
        const response = await jogi.get(queue);
        if (response && response.data) setInitialCont(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err)
        } else {
          console.log(`ERROR JG ${err}`)
        }
      }
    }
    initialCall()
  }, []);


  return (
    <div>
      <Header />
      <Content
        initialCont={initialCont}
      />
    </div>
  )
}

export default Main




