import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
    return (
        <div>
            
            <section className='container'>
                <h2 className='text-center m-5'>Service page <Link to='/' className='btn btn-dark m-5'>Back</Link>       
                </h2>
                <ul className='nav nav-pills'>
                    <li className='nav-item'>
                        <Link to='/service/service1' className='btn btn-info text-center m-5'>Service 1</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/service/service2' className='btn btn-info text-center m-5'>Service 2</Link>
                    </li>
                </ul>
                <Outlet />
                
            </section>
        </div>

    )
}

export default Service