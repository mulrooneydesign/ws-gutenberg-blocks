import {
    RichText,
    MediaPlaceholder,
    InspectorControls,
    URLInput
} from "@wordpress/block-editor";
import { Button, Spinner, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";

const Edit = props => {
    const blockProps = useBlockProps({ className: "about-row container" });

    const { attributes, setAttributes } = props;
    const {
        header,
        subheader,
        imageUrl,
        imageId,
        imageAlt,
        linkText,
        linkUrl
    } = attributes;

    const onSelectImage = image => {
        setAttributes({
            imageUrl: image.url,
            imageId: image.id,
            imageAlt: image.alt
        });
    };

    const removeImage = () => {
        setAttributes({
            imageUrl: null,
            imageId: null,
            imageAlt: null
        });
    };

    const imageUploadError = error => {
        // eslint-disable-next-line no-console
        console.error(error);
    };

    return (
        <div {...blockProps}>
            <div className="col">
                <RichText
                    tagName="h2"
                    onChange={value => setAttributes({ header: value })}
                    allowedFormats={["core/bold", "core/italic"]}
                    placeholder={__("Enter the headline", "ws-blocks")}
                    value={header}
                />

                <RichText
                    tagName="p"
                    onChange={value => setAttributes({ subheader: value })}
                    allowedFormats={["core/bold", "core/italic"]}
                    placeholder={__("Enter the subhead", "ws-blocks")}
                    value={subheader}
                    multiline="p"
                />

                <RichText
                    className="editor-button"
                    tagName="a"
                    onChange={value => setAttributes({ linkText: value })}
                    allowedFormats={["core/bold", "core/italic"]}
                    placeholder={__("Enter button text", "ws-blocks")}
                    value={linkText}
                    href={linkUrl}
                    title={linkText}
                />

                <InspectorControls>
                    <PanelBody title={__("Button Url", "ws-blocks")}>
                        <p>Add a link below</p>
                        <URLInput
                            value={linkUrl}
                            onChange={linkUrl => setAttributes({ linkUrl })}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
            <div className="col">
                {imageUrl ? (
                    <div>
                        {isBlobURL(imageUrl) ? (
                            <>
                                Uploading <Spinner />
                            </>
                        ) : null}
                        <img src={imageUrl} id={imageId} alt={imageAlt} />
                        <Button
                            text={__("Remove Image", "ws-blocks")}
                            isDestructive="true"
                            icon="trash"
                            isTertiary="true"
                            onClick={removeImage}
                        />
                    </div>
                ) : (
                    <MediaPlaceholder
                        icon={"format-image"}
                        onSelect={onSelectImage}
                        accept="images/*"
                        allowedTypes={["image"]}
                        onError={imageUploadError}
                    />
                )}
            </div>
        </div>
    );
};

export default Edit;
