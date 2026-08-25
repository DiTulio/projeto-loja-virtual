const HeroSection = (propos) => {
    return (
        <div>
        <section className="banner">
            <div className="banner-text">
                <h1>Ofertas imperdíveis para você</h1>
                <p>Até 30% de desconto em produtos selecionados. Aproveite!</p>
                <button className="btn-primary">Ver ofertas</button>
            </div>
            <img className="banner-image" src={hero} alt="Banner de promoção da loja" />
        </section>
        </div>
    )
}

export default Hero