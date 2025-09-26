import logo from "/img/dc-logo.png";

const categories = [
    { name: "CHARACTERS", current: false },
    { name: "COMICS", current: true },
    { name: "MOVIES", current: false },
    { name: "TV", current: false },
    { name: "GAMES", current: false },
    { name: "COLLECTIBLES", current: false },
    { name: "VIDEOS", current: false },
    { name: "FANS", current: false },
    { name: "NEWS", current: false },
    { name: "SHOP", current: false }
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
                        <a href="#">
                            <li className={element.current ? "active" : ""} key={i}>{element.name}</li>
                        </a>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default MyHeader;