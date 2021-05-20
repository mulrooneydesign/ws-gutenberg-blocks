import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const { imageUrl, explainerText, subText } = attributes;

    const blockProps = useBlockProps.save({ className: "banner-row" });

    return (
        <section
            {...blockProps}
            style={imageUrl ? `background-image: url(${imageUrl});` : null}
        >
            <div className="overlay"></div>
            <RichText.Content tagName="h3" value={explainerText} />
            <RichText.Content tagName="p" value={subText} />
        </section>
    );
};

export default Save;
