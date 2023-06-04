import React from 'react'
import './Footer.css'

const Footer = () => {
  const imgdata=[{img:'https://images.pexels.com/photos/2090531/pexels-photo-2090531.jpeg'},
  {img:'https://images.pexels.com/photos/589810/pexels-photo-589810.jpeg'},
  {img:'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg'},
  {img:'https://images.pexels.com/photos/3269160/pexels-photo-3269160.jpeg'},
  {img:'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'},
  {img:'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg'},
  {img:'https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg'},
  {img:'https://images.pexels.com/photos/2090531/pexels-photo-2090531.jpeg'}]
  return (
    <div className='footermain'>
      <div className='footerleft'>
        <h1 className='h1h4'>About Flex Business Pro</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, explicabo beatae nemo enim cupiditate magnam non magni, praesentium est iure officia mollitia quae possimus consectetur natus dolor eveniet blanditiis recusandae.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero at maxime numquam quod laudantium aliquid dolores ipsa? Dicta dignissimos suscipit nulla est quo, nisi itaque eum adipisci eligendi ea!</p> </div>
      <div className='footermid'>
        <h1 className='h1h4'>Recent Posts</h1>
        <h5 className='h1h4'>Fly to london</h5>
        <p className='p12'>September 2018</p>
        <h5 className='h1h4'>Stair communication</h5>
        <p className='p12'>September 2018</p>
        <h5 className='h1h4'>Do you want to be a robot</h5>
        <p className='p12'>September 2018</p>
      </div>
      <div className='footerright'>
        <h1 className='h1h4'>Gallery</h1>
      
      <div className='imggallery'>
      {imgdata.map((ele)=>{
        return(
          <img className='imgs' src={ele.img} alt='' ></img>
        )
       })}</div> 
      </div>
    </div>
  )
}

export default Footer