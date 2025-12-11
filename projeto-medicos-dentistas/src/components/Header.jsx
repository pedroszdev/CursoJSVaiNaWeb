import { Link } from 'react-router-dom'
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

import '../styles/header.scss'
function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };
    return (
        <div className='borda'>
            <nav>
                <div className='titulo'>
                    <FaHeart size={24} className='logo' color='white'/>
                    <p>Médicos & Dentistas</p>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {menuAberto ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                <div className={`botoes-menu ${menuAberto ? 'aberto' : ''}`}>
                    <Link to="/" className='botao-home' onClick={() => setMenuAberto(false)}>
                        Home
                    </Link>
                    <Link to="/voluntario" className='botao-voluntario' onClick={() => setMenuAberto(false)}>
                        Seja Voluntário
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header