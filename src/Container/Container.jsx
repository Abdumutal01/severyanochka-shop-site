import React from 'react'
import '../App.scss'

export default function Container({ children }) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}
