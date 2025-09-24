import logo from "../img/dc-logo-bg.png"

const MyFooter = () => {
    return (
        <footer className="container-footer">
            <div className="container-footer-testo">
                <div>
                    <h3>DC COMICS</h3>
                    <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>

                    <h3>SHOP</h3>
                    <ul>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>

                <div>
                    <h3>DC</h3>
                    <ul>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                    </ul>
                </div>

                <div>
                    <h3>SITES</h3>
                    <ul>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                        <li>Terms Of Use</li>
                    </ul>
                </div>
            </div>

            <div className="logo-footer">
                <img src={logo} alt="logo" />
            </div>
        </footer>
    )
}

export default MyFooter