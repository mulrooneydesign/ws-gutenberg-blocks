import { RichText } from "@wordpress/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const blockProps = useBlockProps.save({ className: "about-row container" });

    const {
        header,
        subheader,
        imageId,
        imageUrl,
        imageAlt,
        linkUrl,
        linkText
    } = attributes;

    return (
        <div {...blockProps}>
            <div className="col">
                <RichText.Content tagName="h2" value={header} />
                <RichText.Content tagName="p" value={subheader} />
                <RichText.Content
                    className="button"
                    tagName="a"
                    value={linkText}
                    href={linkUrl}
                />
            </div>
            <div className="col">
                <div className="center-align">
                    <img id={imageId} src={imageUrl} alt={imageAlt} />
                </div>
            </div>
        </div>
    );
};

export default Save;
