const menu = [
    {
        titolo: "DC COMICS",
        voci: [
            "Characters",
            "Comics",
            "Movies",
            "TV",
            "Games",
            "Videos",
            "News"
        ]
    },
    {
        titolo: "SHOP",
        voci: [
            "Shop DC",
            "Shop DC Collectibles"
        ]
    },
    {
        titolo: "DC",
        voci: [
            "Terms Of Use",
            "Privacy policy (New)",
            "Ad Choices",
            "Advertising",
            "Jobs",
            "Subscription",
            "Talent Workshops",
            "CPSC Certificates",
            "Ratings",
            "Show Help",
            "Contact Us"
        ]
    },
    {
        titolo: "SITES",
        voci: [
            "DC",
            "MAD Magazine",
            "DC Kids",
            "DC Universe",
            "DC Power visa"
        ]
    }
];

const MenuFooter = () => {
    return (
        <footer className="container-footer">
            {menu.map((sezione, i) => (
                <div key={i}>
                    <h3>{sezione.titolo}</h3>
                    <ul>
                        {sezione.voci.map((voce, j) => (
                            <a href=""><li key={j}>{voce}</li></a>
                        ))}
                    </ul>
                </div>
            ))}
        </footer>
    );
};



export default MenuFooter