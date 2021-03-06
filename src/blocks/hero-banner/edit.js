import {
    MediaPlaceholder,
    InspectorControls,
    RichText,
    URLInput
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, Button, Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { useBlockProps } from "@wordpress/block-editor";
import LogoImage from "./logo.svg";

const Edit = props => {
    const blockProps = useBlockProps();

    const { attributes, setAttributes } = props;
    const { imageUrl, explainerText, linkUrl, linkText } = attributes;

    const onSelectImage = image => {
        setAttributes({
            imageUrl: image.url
        });
    };

    const removeImage = () => {
        setAttributes({
            imageUrl: null
        });
    };

    const imageUploadError = error => {
        // eslint-disable-next-line no-console
        console.error(error);
    };

    const onChangeExplainerText = value => {
        setAttributes({
            explainerText: value
        });
    };

    const style = {
        backgroundImage: "url(" + imageUrl + ")"
    };

    return (
        <div {...blockProps}>
            <section style={imageUrl ? style : null}>
                <div className="overlay"></div>
                <div className="hero-inner">
                    <div className="logo">
                        <LogoImage />
                    </div>
                    <RichText
                        tagName="p"
                        rows="1"
                        className="explainerText"
                        placeholder={__("Enter some text", "ws-blocks")}
                        onChange={onChangeExplainerText}
                        allowedFormats={[]}
                        value={explainerText}
                    />

                    <PanelRow>
                        <RichText
                            className="editor-button"
                            tagName="a"
                            onChange={value =>
                                setAttributes({ linkText: value })
                            }
                            allowedFormats={[]}
                            placeholder={__("Enter button text", "ws-blocks")}
                            value={linkText}
                            href={linkUrl}
                            title={linkText}
                        />
                    </PanelRow>
                </div>
            </section>

            <InspectorControls>
                <PanelBody title={__("Button Url", "ws-blocks")}>
                    <p>Add a link below</p>
                    <URLInput
                        value={linkUrl}
                        onChange={linkUrl => setAttributes({ linkUrl })}
                    />
                </PanelBody>

                <PanelBody title={__("Background Image", "ws-blocks")}>
                    {imageUrl ? (
                        <div>
                            {isBlobURL(imageUrl) ? (
                                <>
                                    Uploading <Spinner />
                                </>
                            ) : null}
                            <img src={imageUrl} />
                            <Button
                                text={__(
                                    "Remove Background Image",
                                    "ws-blocks"
                                )}
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
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
