import { Link } from "react-router"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>

            <ul className="nav">
                <li><link to="/"></link></li>
                <li><link to="/produtos">Produtos</link></li>
                <li><link to="/contato">Contato</link></li>
            </ul>

            <div className="header-actions">
                <span className="icon-button">🔍</span>
                <span className="icon-button">❤️</span>
                <span className="icon-button cart">
                    🛒
                    <span className="badge">3</span>
                </span>
            </div>
        </header>
    )
}

export default Header