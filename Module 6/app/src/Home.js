import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand mx-5'><h1>Logo</h1></Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link active'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/aboutus" className='nav-link'>About us</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/service' className='nav-link'>Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='container'>
                <h2 className='text-center m-5'>Home page</h2>
            </section>
        </div>
    )
}

export default Home