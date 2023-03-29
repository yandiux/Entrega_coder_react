import React from 'react'
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
  return (
    <div className=''>
        <header className='navbar'>
            <h1>Yandy's Design</h1>
            <nav>
                <ul>
                    <li>Diseño web</li>
                    <li>Desarrollo  Backend</li>
                    <li>Desarrollo de Aplicacions moviles</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                    <li><CarWidget/></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar