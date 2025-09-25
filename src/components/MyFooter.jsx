const infos = [
    { description: "DIGITAL COMICS", img: "/img/buy-comics-digital-comics.png" },
    { description: "DC MERCHANDISE", img: "/img/buy-comics-merchandise.png" },
    { description: "SUBSCRIPTION", img: "/img/buy-comics-shop-locator.png" },
    { description: "COMIC SHOP LOCATOR", img: "/img/buy-comics-subscriptions.png" },
    { description: "DC POWER VISA", img: "/img/buy-dc-power-visa.svg" }
];


const MyFooter = () => {
    return (
        <>

            {/* creazione parte footer immagini */}
            <section className="container-footer-info">
                <div className="container-card-info">
                    {infos.map((info, i) => (
                        <div className="card-infos" key={i}>
                            <img src={info.img} alt={info.description} />
                            <span>{info.description}</span>
                        </div>
                    ))}
                </div>
            </section>


            {/* sezione footer about us */}
            <footer className="container-footer">
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
            </footer>


            {/* sezione footer registrati e social */}
            <section className="container-footer-accedi">
                <div className="container-accedi">
                    <a href="#">
                        <span className="bottone-accedi">SIGN-UP NOW!</span>
                    </a>
                </div>

                <div className="container-social">
                    <h3>FOLLOW US</h3>
                    <ul className="social">
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>
                        <li><i class="fa-brands fa-pinterest"></i></li>
                        <li><i class="fa-solid fa-location-dot"></i></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MyFooter