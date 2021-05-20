import {
    MediaPlaceholder,
    InspectorControls,
    RichText
} from "@wordpress/block-editor";
import { PanelBody, Button, Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { useBlockProps } from "@wordpress/block-editor";

const Edit = props => {
    const blockProps = useBlockProps();

    const { attributes, setAttributes } = props;
    const { imageUrl, explainerText, subText } = attributes;

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

    const onChangeSubText = subText => {
        setAttributes({ subText });
    };

    const style = {
        backgroundImage: "url(" + imageUrl + ")"
    };

    return (
        <div {...blockProps}>
            <section style={imageUrl ? style : null}>
                <div className="overlay"></div>
                <div className="hero-inner">
                    <RichText
                        tagName="h3"
                        rows="1"
                        onChange={onChangeExplainerText}
                        value={explainerText}
                    />

                    <RichText
                        tagName="p"
                        rows="1"
                        onChange={onChangeSubText}
                        value={subText}
                    />
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
        </div>
    );
};

export default Edit;
