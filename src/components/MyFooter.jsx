const infos = [
    { description: "DIGITAL COMICS", img: "/img/buy-comics-digital-comics.png" },
    { description: "DC MERCHANDISE", img: "/img/buy-comics-merchandise.png" },
    { description: "SUBSCRIPTION", img: "/img/buy-comics-subscriptions.png" },
    { description: "COMIC SHOP LOCATOR", img: "/img/buy-comics-shop-locator.png" },
    { description: "DC POWER VISA", img: "/img/buy-dc-power-visa.svg" }
];

import MenuFooter from "./main-component/MenuFooter";


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



            <MenuFooter />


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
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                        <li><i className="fa-brands fa-pinterest"></i></li>
                        <li><i className="fa-solid fa-location-dot"></i></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MyFooter