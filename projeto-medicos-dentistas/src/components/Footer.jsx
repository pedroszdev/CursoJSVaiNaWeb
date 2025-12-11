import '../styles/footer.scss'
import { FaHeart } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
function Footer() {
    return (
        <footer>
            <div className="footer-contents">
                <div className="">
                    <div className='titulo-footer'>
                        <FaHeart size={24} className='logo-footer'/>
                        <p>Médicos & Dentistas</p>
                    </div>
                    <p>Saúde e cuidado sem barreiras para <br /> toda comunidade.</p>
                </div>
                <div className="content">
                    <h3>Contato</h3>
                    <div className="email">
                        <MdOutlineEmail size={24}/>
                        <p>contato@medico-dentista.org</p>
                    </div>
                    <div className="telefone">
                        <BsTelephone size={22}/>
                        <p>(11) 3000-0000</p>
                    </div>
                    <div className="loc">
                        <IoLocationOutline size={24}/>
                        <p>São Paulo, Brasil</p>
                    </div>
                </div>
                <div className="content">
                    <h3>Redes Sociais</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Linkedln</p>
                </div>
            </div>
            <p className='texto-final'>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer