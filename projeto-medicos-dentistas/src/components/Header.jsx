import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

import '../styles/header.scss'
function Header() {
    return (
        <div className='borda'>
            <nav>
                <div className='titulo'>
                    <FaHeart size={24} className='logo' color='white'/>
                    <p>Médicos & Dentistas</p>
                </div>
                <div className="botoes-menu">
                    
                    <Link to="/" className='botao-home'>Home</Link>
                    <Link to="/voluntario" className='botao-voluntario'>Seja Voluntário</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header