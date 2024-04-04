import React from 'react'
import '../App.css'

function Section1() {
  return (
    <div className='section-1'>
        <h1>Merlo Ovie</h1>
        <h4>Full Stack Developer</h4>
        <div className='section-button'>
            <a href='mailto:oviemerlo@gmail.com?' className='email'><button type='submit' ><i className="fas fa-envelope"></i> 
            {' '}Email</button></a>
            <a href='https://www.linkedin.com/in/merlo-ovie-1884632b3/' className='linkedIn'><button type='button' >
                <i className="fab fa-linkedin"></i>{' '}LinkedIn</button></a> 
        </div>
    </div>

    )
}

export default Section1