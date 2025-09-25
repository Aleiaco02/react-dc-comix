import logo from "../img/dc-logo.png";

const categories = [
    "CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP"
];

const MyHeader = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul>
                    {categories.map((element, i) => (
                        <li className="active" key={i}>{element}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default MyHeader;