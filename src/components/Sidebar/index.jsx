import Logo from '../../assets/logo.png'
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';

import './styles.css';
export default function Sidebar() {
    return (
        <aside>

            <img src={Logo} className="logo" alt="CodeConnect logo" />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link item__link-publicacao'>
                            Publicar
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='' />
                            Feed
                        </a>
                    </li>

                    <li>
                        <a href='#' className='item__link'>
                            <img src={Account} alt='' />
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Info} alt='' />
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Logout} alt='' />
                            Sair
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}