import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import Continents from './Continents'
import About from './About'
import Setting from './Setting'
import Countries from './Countries'
import PCountries from './PCountries'

// import Root from './Root' // watch..

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/countries' element={<Countries/>}/>
          <Route path='/country/:name' element={<PCountries/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/continents' element={<Continents />} />
          <Route path='*' element={<p>Page not found :-</p>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
