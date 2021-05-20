import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";
import LogoImage from "./logo.svg";

const Save = ({ attributes }) => {
    const { imageUrl, explainerText, linkUrl, linkText } = attributes;

    const blockProps = useBlockProps.save({ className: "hero" });

    return (
        <section
            {...blockProps}
            style={imageUrl ? `background-image: url(${imageUrl});` : null}
        >
            <div className="overlay"></div>
            <div className="hero-inner">
                <div className="logo">
                    <LogoImage />
                </div>
                <RichText.Content tagName="p" value={explainerText} />
                <RichText.Content
                    className="buttonText button"
                    tagName="a"
                    href={linkUrl}
                    value={linkText}
                />
            </div>
        </section>
    );
};

export default Save;
