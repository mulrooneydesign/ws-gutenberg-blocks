import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
    BlockControls,
    RichText,
    AlignmentToolbar,
    InspectorControls,
    PanelColorSettings
} from "@wordpress/block-editor";
//import { PanelBody, ToggleControl, ColorPalette } from '@wordpress/components'

registerBlockType("ws-blocks/secondblock", {
    title: __("Second Block", "ws-blocks"),
    description: __("Our Second Block", "ws-blocks"),
    category: "ws-block-category",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M17 5h-2V3h2v2zm-2 16h2v-2.59L19.59 21 21 19.59 18.41 17H21v-2h-6v6zm4-12h2V7h-2v2zm0 4h2v-2h-2v2zm-8 8h2v-2h-2v2zM7 5h2V3H7v2zM3 17h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-8 2h2V3h-2v2zM3 9h2V7H3v2zm4 12h2v-2H7v2zm-4-8h2v-2H3v2zm0-8h2V3c-1.1 0-2 .9-2 2z" />
        </svg>
    ),
    keywords: [__("windy shore"), __("ws")],
    styles: [
        {
            name: "rounded",
            label: __("Rounded", "ws-blocks"),
            isDefault: true
        },
        {
            name: "outline",
            label: __("Outline", "ws-blocks"),
            isDefault: false
        },
        {
            name: "square",
            label: __("Square", "ws-blocks"),
            isDefault: false
        }
    ],
    attributes: {
        content: {
            type: "string",
            source: "html",
            selector: "p"
        },
        alignment: {
            type: "string"
        },
        backgroundColor: {
            type: "string"
        },
        textColor: {
            type: "string"
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        const { content, alignment, backgroundColor, textColor } = attributes;

        const onChangeContent = content => {
            setAttributes({ content: content });
        };
        const onChangeAlignment = alignment => {
            setAttributes({ alignment });
        };
        const onChangeBackgroundColor = backgroundColor => {
            setAttributes({ backgroundColor });
        };
        const onChangeTextColor = textColor => {
            setAttributes({ textColor });
        };

        return (
            <>
                <InspectorControls>
                    <PanelColorSettings
                        title={__("Color Settings", "ws-blocks")}
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: onChangeBackgroundColor,
                                label: __("Background Color", "ws-blocks")
                            },
                            {
                                value: textColor,
                                onChange: onChangeTextColor,
                                label: __("Text Color", "ws-blocks")
                            }
                        ]}
                    />
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
                        backgroundColor: backgroundColor,
                        color: textColor
                    }}
                />
            </>
        );
    },
    save: ({ attributes }) => {
        const { content, alignment, backgroundColor, textColor } = attributes;

        return (
            <RichText.Content
                tagName="p"
                value={content}
                style={{
                    textAlign: alignment,
                    backgroundColor: backgroundColor,
                    color: textColor
                }}
            />
        );
    }
});
