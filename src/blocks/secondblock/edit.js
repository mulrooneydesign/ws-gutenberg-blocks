// import { Component } from '@wordpress/element'
import { __ } from "@wordpress/i18n";
import {
    BlockControls,
    RichText,
    AlignmentToolbar,
    InspectorControls,
    PanelColorSettings,
    withColors,
    ContrastChecker
} from "@wordpress/block-editor";

const Edit = props => {
    const {
        className,
        attributes,
        setAttributes,
        setTextColor,
        setBackgroundColor,
        backgroundColor,
        textColor
    } = props;

    const { content, alignment } = attributes;

    const onChangeContent = content => {
        setAttributes({ content: content });
    };
    const onChangeAlignment = alignment => {
        setAttributes({ alignment });
    };

    return (
        <>
            <InspectorControls>
                <PanelColorSettings
                    title={__("Color Settings", "ws-blocks")}
                    colorSettings={[
                        {
                            value: backgroundColor.color,
                            onChange: setBackgroundColor,
                            label: __("Background Color", "ws-blocks")
                        },
                        {
                            value: textColor.color,
                            onChange: setTextColor,
                            label: __("Text Color", "ws-blocks")
                        }
                    ]}
                >
                    <ContrastChecker
                        textColor={textColor.color}
                        backgroundColor={backgroundColor.color}
                    />
                </PanelColorSettings>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    value={alignment}
                    onChange={onChangeAlignment}
                />
            </BlockControls>
            <RichText
                tagName="p"
                className={className}
                onChange={onChangeContent}
                value={content}
                allowedFormats={["core/bold", "core/italic"]}
                style={{
                    textAlign: alignment,
                    backgroundColor: backgroundColor.color,
                    color: textColor.color
                }}
            />
        </>
    );
};

export default withColors("backgroundColor", { textColor: "color" })(Edit);
