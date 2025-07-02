import { Link } from 'react-router-dom'
function HeaderBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">Viajes Odisea IA</Link>
                <div className="navbar-nav ">
                    <Link className="nav-link text-white" to="/">Home</Link>
                    <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
                    <Link className="nav-link text-white" to="/contacto">Contacto</Link>
                </div>
            </div>
        </nav>
    );
}

export default HeaderBar;