import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function Menubar() {
    return (
        <div className="menu_bar">
                <FontAwesomeIcon icon={faBars} className="links"/>
                <Link to='/' className="links">Contradiction</Link>
                {/* a태그안에 img태그 즉, 여기서는 Link태그 안에 img태그를 사용하면 됌 */}
                <Link to='/faBell' className="links"><FontAwesomeIcon icon={faBell} /></Link>
        </div>
    )
}

export default Menubar
