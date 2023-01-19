import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        <aside>
            <div className="nav__logoContainer">
                <a href="#dashboard" className='nav__logo'>
                    Management
                </a>
            </div>

            <nav className='nav'>
                <div className="nav__menu">
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a className='nav__link' href='#dashboard'><i className='icon-speedometer'></i>&emsp;Dashboard</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <div className="nav__footer">
                <span className='copyright'>&copy 2022-2023</span>
            </div> */}
        </aside>
    )
}

export default Sidebar