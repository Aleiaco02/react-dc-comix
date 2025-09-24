import logo from "../img/dc-logo.png"

const MyHeader = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul>
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </nav>
        </header>
    )
}

export default MyHeader