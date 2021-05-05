import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";

const attributes = {
    header: {
        type: "string",
        tag: "h2"
    },
    subheader: {
        type: "string",
        tag: "p"
    },
    imageUrl: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src"
    },
    imageId: {
        type: "number"
    },
    imageAlt: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: ""
    },
    linkText: {
        type: "string",
        source: "text",
        selector: "a"
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    }
};

registerBlockType("ws-blocks/story-block", {
    title: __("Story Block", "ws-blocks"),
    description: __(
        "Text and an image in a two column row for homepage",
        "ws-blocks"
    ),
    icon: "welcome-view-site",
    category: "ws-block-category",
    keywords: [__("windy", "shore", "ws-blocks")],
    attributes,
    supports: {
        reusable: false,
        html: false
    },
    edit: Edit,
    save: Save
});
