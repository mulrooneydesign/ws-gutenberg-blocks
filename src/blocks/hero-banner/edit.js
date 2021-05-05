import { MediaPlaceholder, InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    PanelRow,
    TextareaControl,
    Button,
    Spinner
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";

const Edit = props => {
    const { attributes, setAttributes } = props;
    const { imageUrl, explainerText, buttonText, buttonUrl } = attributes;

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

    const onChangeButtonText = value => {
        setAttributes({
            buttonText: value
        });
    };

    const onChangeButtonUrl = url => {
        setAttributes({
            buttonUrl: url
        });
    };

    const style = {
        backgroundImage: "url(" + imageUrl + ")"
    };

    return (
        <>
            <section style={style}>
                <div className="overlay"></div>
                <div className="hero-inner">
                    <TextareaControl
                        label={__("Explainer Text", "ws-blocks")}
                        placeholder={__("Explainer Text", "ws-blocks")}
                        help={__("Explain the website", "ws-blocks")}
                        rows="1"
                        className="explainerText"
                        onChange={onChangeExplainerText}
                        value={explainerText}
                    />

                    <PanelRow>
                        <TextareaControl
                            label={__("Text on button", "ws-blocks")}
                            placeholder={__("Text on button", "ws-blocks")}
                            help={__("Name the button", "ws-blocks")}
                            rows="1"
                            className="buttonText"
                            onChange={onChangeButtonText}
                            value={buttonText}
                        />

                        <TextareaControl
                            label={__("URL of Button", "ws-blocks")}
                            placeholder={__("#URL", "ws-blocks")}
                            help={__("Copy and paste a link here", "ws-blocks")}
                            rows="1"
                            className="buttonUrl"
                            onChange={onChangeButtonUrl}
                            value={buttonUrl}
                        />
                    </PanelRow>
                </div>
            </section>

            <InspectorControls>
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
        </>
    );
};

export default Edit;
