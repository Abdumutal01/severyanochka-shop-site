import React from 'react'
import '../App.scss'

export default function Container({ children }) {
    return (
        <section className='container'>
            {children}
        </section>
    )
}
