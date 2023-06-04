import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headermain'>
        <div className='headerleft'>
            <h1 className='headerlefth1'>Flex Business Pro</h1>
            <p className='headerleftp'style={{color:'GrayText'}}>clean and modern business theme</p>
        </div>
        <div className='headerright'>
          <a href=" ">Home</a>
          <a href=" ">AboutUs</a>
          <a href=" ">Styleguide</a>
          <a href=" ">Blog</a>
          <a href=" ">ContactUs</a>
        </div>
    </div>
  )
}

export default Header