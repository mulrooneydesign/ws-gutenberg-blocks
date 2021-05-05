const Save = ({ attributes }) => {
    const { imageUrl, explainerText, buttonUrl, buttonText } = attributes;

    return (
        <section className="hero" style={`background-image: url(${imageUrl});`}>
            <div className="overlay"></div>
            <div className="hero-inner">
                <div className="logo">Logo Here</div>
                <p className="explainerText">{explainerText}</p>
                <a className="buttonText button" href={buttonUrl}>
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default Save;
