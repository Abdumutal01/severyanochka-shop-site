import React from 'react'
import './HeaderForm.scss'
export default function HeaderForm() {
    return (
        <form
            className='headerForm'
        >
            <input
                type="search"
                name=""
                id=""
                className='headerForm__input'
                placeholder='Найти товар'
            />
            <span>
                <i className="fa-solid fa-magnifying-glass" />
            </span>
        </form>
    )
}
