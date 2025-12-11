import { Link } from 'react-router-dom'
import coracao from '../assets/coracao.png'
import '../styles/header.scss'
function Header() {
    return (
        <div className='borda'>
            <nav>
                <div className='titulo'>
                    <img src={coracao} alt="" className='logo'/>
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