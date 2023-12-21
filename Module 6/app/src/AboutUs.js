import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div>
            <section className='container'>
                <h2 className='text-center m-5'>
                    About us page
                    <Link to='/' className='btn btn-dark m-5'>Back</Link>
                </h2>

            </section>
        </div>
    )
}

export default AboutUs